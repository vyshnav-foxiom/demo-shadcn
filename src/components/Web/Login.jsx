"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { showToast } from "../../utils/ShowToast"


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import authData from '../../utils/LogData.json'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { toast } from "sonner"
import Navbar from "./Navbar"

// Define the validation schema
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(3, {
        message: "Password must be at least 3 characters.",
    }),
})

const Login = () => {
    const nav = useNavigate()
    // Initialize the form with useForm
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "", // Set initial values if necessary
        },
    })
    const sanitizeInput = (value) => value.trim().replace(/\s+/g, ' ');

    // Define the submit handler
    const onSubmit = (data) => {

        data.username = sanitizeInput(data.username);
        data.password = sanitizeInput(data.password);
        const user = authData.find(logData => data.username === logData.username && data.password === logData.password);
        console.log("user",user)
        if (user) {
            showToast('success', data.username + "  Logined successfully!");
            localStorage.setItem("user", data.username)
            nav("/home")
            return
        }

        //console.log("Form submitted:", data)
        const user1 = authData.find(logData => data.username === logData.username)
        if (!user1) {
            showToast('error', "Invalid username");
            return
        }
        if (user1) {
            //showToast('error', "Invalid password");
            toast.error("Invalid Password !", {
                className: 'bg-red-600 text-white p-4 rounded-lg shadow-lg',
                icon: '❌',
            });

            console.log("Invalid password");
            return
        }

        if (data.username != authData.username && data.password != authData.password) {
            Swal.fire({
                title: 'Oops!',
                text: 'Sorry! Invalid Username or Password !!!',
                icon: 'error',
                confirmButtonText: 'OK'

            }).then(() => {
                // form.reset({ username: "", password: "" });
                console.log("Invalid username & password")

            }).catch((error) => console.log(error))
            return
        }

        // Handle form data here, e.g., send it to an API
    }

    return (

        <div className="  w-[30%] min-w-[400px] mx-auto p-6  shadow-md rounded-lg space-y-4 bg-gray-800 mt-24">
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <div>
                                <FormItem>
                                    <div className="flex justify-center">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                        </Avatar>
                                        <h1 className="text-center text-xl font-bold p-2">Login</h1>
                                    </div>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username"  {...field}
                                            onChange={(e) => field.onChange(sanitizeInput(e.target.value))}
                                            autoComplete="on" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            </div>
                        )}
                    />         
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <div>
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Password" {...field}
                                            onChange={(e) => field.onChange(sanitizeInput(e.target.value))} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <Button
                        className="mx-auto block"
                        type="submit"
                        variant='destructive'

                    >Submit</Button>
                </form>
            </Form>
        </div>
    )
}


export default Login