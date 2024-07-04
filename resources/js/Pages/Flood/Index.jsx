import React from "react";
import { Head } from "@inertiajs/react";
import FloodLayout from "@/Components/Layouts/FloodLayout";

export default function Index({ auth, floods = [] }) {
    return (
        <FloodLayout auth={auth} data={floods}>
            <Head title="Flood Data" />
        </FloodLayout>
    );
}
