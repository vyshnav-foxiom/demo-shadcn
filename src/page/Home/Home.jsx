import { Button } from "@/components/ui/button";
import Login from "@/components/Web/Login"
import TanstackTable from "@/components/Web/TanstackTable"
import { Pencil, UserPlus, Eraser } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const data = [
    { id: 1, name: "Stark", age: 25, place: "Canada", phone: 1234567890 },
    { id: 2, name: "Jane Smith", age: 32, place: "Newyork", phone: 1234567890 },
    { id: 3, name: "Clark Kent", age: 28, place: "Australia", phone: 1234567890 },
    { id: 4, name: "Jeo", age: 28, place: "China", phone: 1234567890 },
];

const Home = () => {
    const [addEmployeeOpen, setAddEmployeeOpen] = useState(false)
    const [employeeData, setEmployeeData] = useState(data)
    const [rowData, setRowData] = useState(null)
    const [name, setName] = useState(null)
    const inputRef = useRef()
    const inputRef2 = useRef()




    console.log("employeeData", employeeData)
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
                        <Button className="bg-red-600 hover:bg-red-500" variant="" onClick={() => { handleDeleteEmployee(row.original) }}>
                            <Eraser className="h-5 w-5 flex-shrink-0 cursor-pointer" />
                        </Button>

                    </ul>
                )
            }

        },
    ];
    const handleEditEmployee = (row) => {
        console.log("name", row.name)
        setAddEmployeeOpen(true)
        setRowData(row)
    }
    const handleDeleteEmployee = (row) => {
        setEmployeeData((prevData) => prevData.filter(employee => employee.id !== row.id));
    };
    const handleAddEmployee = () => {
        setAddEmployeeOpen(true)
    }
    const handleFocus = () => {
        inputRef.current.name = "input2"
        console.log("inputRef", inputRef.current.name)
    }
    const handleUploadClick = () => {
        if (inputRef2.current) {
            inputRef2.current.click();
        }
    };
    useEffect(() => {
        console.log("inputRef", inputRef.current.name)
    })
    return (
        <div className="px-3">
            <div className="flex justify-end w-full">
                <Button
                    onClick={() => { handleAddEmployee() }}
                >Add Employee <UserPlus className="h-5 w-5 flex-shrink-0 cursor-pointer" /></Button>
            </div>

            <div className=" w-full py-2">
                <TanstackTable columns={columns} data={employeeData} />
                <AddEmployeeModal
                    isOpen={addEmployeeOpen}
                    setIsOpen={setAddEmployeeOpen}
                    data={employeeData}
                    setData={setEmployeeData}
                    editData={rowData}
                    setEditData={setRowData}
                />

            </div>
            <div>
                <Input name="input1" ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
                <div>My name is     {name}</div>
                <Button onClick={handleFocus}>Focus</Button>
            </div>
            <div>
                <Input name="name1" type="file" ref={inputRef2} value={name} />
                <Button onClick={handleUploadClick}>Upload</Button>
            </div>


            <div>
                <div className="p-4 space-y-4">
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-8 w-40 bg-red-800" />
                        <Skeleton className="h-6 w-24 bg-red-800" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Skeleton className="h-10 w-full bg-red-800" />
                        <Skeleton className="h-10 w-full bg-red-800" />
                        <Skeleton className="h-10 w-full bg-red-800" />
                        <Skeleton className="h-10 w-full bg-red-800" />
                    </div>
                    <div className="flex gap-4">
                        <Skeleton className="h-8 w-36 bg-red-800" />
                        <Skeleton className="h-8 w-36 bg-red-800" />
                    </div>
                    <div className=" rounded">
                        <Skeleton className="h-12 w-full bg-red-800" />
                    </div>
                    <div className="flex gap-4">
                        <Skeleton className="h-10 w-32 bg-red-800" />
                        <Skeleton className="h-10 w-32 bg-red-800" />
                        <Skeleton className="h-10 w-32 bg-red-800" />
                    </div>
                    <Skeleton className="h-8 w-24 bg-red-800" />
                    <Skeleton className="h-16 w-full bg-red-800" />
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-12 w-48 bg-red-800" />
                        <div className="flex gap-4">
                            <Skeleton className="h-12 w-24 bg-red-800" />
                            <Skeleton className="h-12 w-24 bg-red-800" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home




