import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, Formik } from 'formik'
import { Upload, UserPlus } from 'lucide-react'
import React, { useEffect } from 'react'
import { Copy } from "lucide-react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const AddEmployeeModal = ({ isOpen, setIsOpen, data, setData, editData, setEditData }) => {

    //console.log("editData", editData)
    const initialValues = {
        id: editData?.id || "",
        name: editData?.name || "",
        age: editData?.age || "",
        place: editData?.place || "",
        phone: editData?.phone || "",
    }
    const handleSubmit = (values) => {
        const len = data.length
        console.log("submitted", len)

        setData(prev => [
            ...prev,
            {
                ...values,
                id: len,

            }
        ])
        setEditData(null)
        setIsOpen(false)
    }
    return (
        <div className='flex items-center justify-center min-w-[200px]'>


            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-md ">
                    <DialogHeader>
                        <DialogTitle className="flex justify-center">{editData ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">


                            <Formik
                                initialValues={initialValues}
                                onSubmit={handleSubmit}
                                enableReinitialize
                            >
                                {
                                    ({ handleChange, values, handleBlur, submitForm }) => {

                                        useEffect(() => {
                                            console.log("values :", values)
                                        }, [values])

                                        return (
                                            <Form className='gap-y-3'>
                                                <div className='flex flex-col gap-y-3'>
                                                    <Input
                                                        name="name"
                                                        type="text"
                                                        Placeholder="Enter Name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.name}
                                                    />
                                                    <Input
                                                        name="age"
                                                        type="number"
                                                        Placeholder="Enter Age"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.age}
                                                    />
                                                    <Input
                                                        name="place"
                                                        type="text"
                                                        Placeholder="Enter Place"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.place}
                                                    />
                                                    <Input
                                                        name="phone"
                                                        type="text"
                                                        Placeholder="Enter Phone"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.phone}
                                                    />
                                                    <Button
                                                        onClick={submitForm}
                                                        type="button"
                                                    >Add
                                                        <Upload className="h-5 w-5 flex-shrink-0 cursor-pointer" />
                                                    </Button>
                                                </div>

                                            </Form>
                                        )

                                    }}
                            </Formik>
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" className="bg-red-600 hover:bg-red-500 w-full">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>






        </div>
    )
}

export default AddEmployeeModal