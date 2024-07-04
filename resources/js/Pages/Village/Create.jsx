import FormVillageLayout from "@/Components/Layouts/CreateLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

export default function Create({ auth, villages = [] }) {
    const { data, setData, post, errors } = useForm({
        alternative: "",
        village_code: "",
        name: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("village.store"));
    };

    return (
        <FormVillageLayout auth={auth} title="Add New Village">
            <Head title="Village" />
        </FormVillageLayout>
    );
}
