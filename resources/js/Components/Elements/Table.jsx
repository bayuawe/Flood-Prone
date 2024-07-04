import React from "react";
import { Link, useForm } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

export default function Table({ columns, data }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        destroy(route("village.destroy", { id }));
    };

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column}
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {column}
                        </th>
                    ))}
                    <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row) => (
                    <tr key={row.id}>
                        {columns.map((column) => (
                            <td
                                key={column}
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                            >
                                {row[column]}
                            </td>
                        ))}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                            <PrimaryButton
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={() =>
                                    (window.location.href = route(
                                        "village.edit",
                                        { id: row.id }
                                    ))
                                }
                            >
                                Edit
                            </PrimaryButton>
                            <PrimaryButton
                                className="text-red-600 hover:text-red-900 ml-4"
                                onClick={() => handleDelete(row.id)}
                            >
                                Delete
                            </PrimaryButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
