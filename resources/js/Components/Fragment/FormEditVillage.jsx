import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/Element/TextInput";
import PrimaryButton from "@/Components/Element/PrimaryButton";

const FormEditVillage = ({ csrf_token, initialData = {} }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        alternative: initialData.alternative || "",
        village_code: initialData.village_code || "",
        name: initialData.name || "",
    });

    useEffect(() => {
        reset({
            alternative: initialData.alternative || "",
            village_code: initialData.village_code || "",
            name: initialData.name || "",
        });
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("village.update", { id: initialData.id }));
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
            <PrimaryButton
                onClick={handleSubmit}
                className="bg-blue-500"
                disabled={processing}
            >
                Simpan Perubahan
            </PrimaryButton>
        </form>
    );
};

export default FormEditVillage;
