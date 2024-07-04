import React from "react";
import { Head, useForm } from "@inertiajs/react";
import FloodCreateLayout from "@/Components/Layouts/FloodCreateLayout";
import FormCreateFlood from "@/Components/Fragments/FormCreateFlood";

export default function Create({ auth, csrf_token, alternatives }) {
    const handleSubmit = (data) => {
        post(route("flood.store"), data);
    };

    return (
        <FloodCreateLayout
            auth={auth}
            title="Add New Flood Data"
            csrf_token={csrf_token}
        >
            <Head title="Add New Flood Data" />
            <FormCreateFlood
                csrf_token={csrf_token}
                initialData={{ alternatives }}
                onSubmit={handleSubmit}
            />
        </FloodCreateLayout>
    );
}
