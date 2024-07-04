import React from "react";
import AuthenticatedLayout from "@/Components/Layouts/AuthenticatedLayout";
import Table from "@/Components/Elements/Table";
import PrimaryButton from "@/Components/Elements/PrimaryButton";

export default function FloodLayout({ auth, data = [] }) {
    const columns = [
        "alternative_id",
        "flood_accident",
        "topography_village",
        "building",
        "year",
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Flood
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-end mb-4">
                                <PrimaryButton
                                    className="bg-blue-500"
                                    onClick={() => {
                                        window.location.href =
                                            route("flood.create");
                                    }}
                                >
                                    Tambahkan Data Banjir
                                </PrimaryButton>
                            </div>
                            {Array.isArray(data) && data.length > 0 ? (
                                <Table columns={columns} data={data} />
                            ) : (
                                <div className="text-center py-4">
                                    Tidak ada data yang tersedia
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
