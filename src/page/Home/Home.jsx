import { Button } from "@/components/ui/button";
import Login from "@/components/Web/Login"
import TanstackTable from "@/components/Web/TanstackTable"
import { Pencil ,UserPlus,Eraser} from "lucide-react";
import { useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";

const data = [
    { id: 1, name: "Stark", age: 25, place: "Canada", phone: 1234567890 },
    { id: 2, name: "Jane Smith", age: 32, place: "Newyork", phone: 1234567890 },
    { id: 3, name: "Clark Kent", age: 28, place: "Australia", phone: 1234567890 },
    { id: 4, name: "Jeo", age: 28, place: "China", phone: 1234567890 },
];

const Home = () => {
    const [addEmployeeOpen, setAddEmployeeOpen] = useState(false)
    const [employeeData, setEmployeeData] = useState(data)
    console.log("employeeData",employeeData)
    const columns = [
        {
            header: "ID",
            accessorKey: "id",
        },
        {
            header: "Name",
            accessorKey: "name",
        },
        {
            header: "Age",
            accessorKey: "age",

        },
        {
            header: "Place",
            accessorKey: "place",

        },
        {
            header: "Phone",
            accessorKey: "phone",

        },
        {
            header: "Actions",
            accessorKey: "actions",
            cell: ({ row }) => {
                return (
                    <ul className="justify-center flex gap-x-2">
                        <Button onClick={() => { handleEditEmployee(row.original) }} >
                            <Pencil className="h-5 w-5 flex-shrink-0 cursor-pointer" />
                        </Button>
                        <Button className="bg-red-600 hover:bg-red-500"  variant="" onClick={() => { handleDeleteEmployee(row.original) }}>
                            <Eraser className="h-5 w-5 flex-shrink-0 cursor-pointer" />
                        </Button>

                    </ul>
                )
            }

        },
    ];
    //console.log("employeeData :", employeeData)


    const handleEditEmployee = (row) => {
        console.log("name", row.id)

    }
    const handleDeleteEmployee = (row) => {
        console.log("name", row.id)

    }

    const handleAddEmployee = () => {
        setAddEmployeeOpen(true)
    }
    return (
        <div className="px-3">
            <div className="flex justify-end w-full">
                <Button
                    onClick={() => { handleAddEmployee() }}
                >Add Employee <UserPlus className="h-5 w-5 flex-shrink-0 cursor-pointer" /></Button>
            </div>

            <div className=" h-screen w-full py-2">
                <TanstackTable columns={columns} data={data} />
                <AddEmployeeModal
                    isOpen={addEmployeeOpen}
                    setIsOpen={setAddEmployeeOpen}
                    data={employeeData}
                    setData={setEmployeeData}
                />

            </div>

        </div>
    )
}

export default Home




