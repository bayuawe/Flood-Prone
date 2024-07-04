import { Head } from "@inertiajs/react";
import React from "react";
import FloodEditLayout from "@/Components/Layouts/FloodEditLayout";

export default function Edit({ auth, village = {}, csrf_token }) {
    const initialData = {
        alternative: village.alternative || "",
        village_code: village.village_code || "",
        name: village.name || "",
        id: village.id || null,
    };

    return (
        <FloodEditLayout
            auth={auth}
            title="Edit Village"
            csrf_token={csrf_token}
            initialData={initialData}
        >
            <Head title="Edit Village" />
        </FloodEditLayout>
    );
}
