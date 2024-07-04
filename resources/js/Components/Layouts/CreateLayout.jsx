import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Components/Layouts/AuthenticatedLayout";
import FormCreateVillage from "@/Components/Fragment/FormCreateVillage";

const CreateLayout = ({ auth, title, csrf_token, initialData = {} }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {title}
                </h2>
            }
        >
            <Head title={title} />
            <div className="py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow sm:rounded-lg overflow-hidden">
                        <FormCreateVillage
                            csrf_token={csrf_token}
                            initialData={initialData}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateLayout;
