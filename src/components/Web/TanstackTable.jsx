import React from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table"; // Make sure this is installed!


const TanstackTable = ({
    columns,
    data,
    defaultFooter = false
}) => {


    const table = useReactTable({
        data: data || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="">
            <table className="border-collapse border border-[#3b3534] w-full md:min-w-[900px] ">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="bg-[#000f3f]">
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="border p-5 text-left"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="hover:bg-[#365d76] bg-[#152133] border">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="border p-3">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                {defaultFooter && (<tfoot>
                    {table.getFooterGroups().map((footerGroup) => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="border border-gray-300 p-2 font-medium"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.footer,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>)}
            </table>
            <div className="h-4" />
        </div>
    );
};

export default TanstackTable;
