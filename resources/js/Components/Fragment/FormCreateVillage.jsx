import React from "react";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/Element/TextInput";
import PrimaryButton from "@/Components/Element/PrimaryButton";

const FormCreateVillage = ({ csrf_token, initialData = {} }) => {
    const { data, setData, post, processing, errors } = useForm({
        alternative: initialData.alternative || "",
        village_code: initialData.village_code || "",
        name: initialData.name || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("village.store"));
    };

    return (
        <form className="space-y-6 p-6" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="_token" value={csrf_token} />
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Alternative
                </label>
                <TextInput
                    type="text"
                    name="alternative"
                    value={data.alternative}
                    onChange={(e) => setData("alternative", e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Village Code
                </label>
                <TextInput
                    type="text"
                    name="village_code"
                    value={data.village_code}
                    onChange={(e) => setData("village_code", e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Name
                </label>
                <TextInput
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <PrimaryButton type="submit" disabled={processing}>
                Save
            </PrimaryButton>
        </form>
    );
};

export default FormCreateVillage;
