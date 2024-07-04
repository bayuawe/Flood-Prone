import EditLayout from "@/Components/Layouts/EditLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Edit({ auth, village = {}, csrf_token }) {
    const initialData = {
        alternative: village.alternative || "",
        village_code: village.village_code || "",
        name: village.name || "",
        id: village.id || null,
    };

    return (
        <EditLayout
            auth={auth}
            title="Edit Village"
            csrf_token={csrf_token}
            initialData={initialData}
        >
            <Head title="Edit Village" />
        </EditLayout>
    );
}
