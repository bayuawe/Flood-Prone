import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/Element/TextInput";
import PrimaryButton from "@/Components/Element/PrimaryButton";

const FormEditFlood = ({ csrf_token, initialData = {} }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        alternative_id: initialData.alternative_id || "",
        flood_accident: initialData.flood_accident || "",
        topography_village: initialData.topography_village || "",
        building: initialData.building || "",
        year: initialData.year || "",
    });

    useEffect(() => {
        reset({
            alternative_id: initialData.alternative_id || "",
            flood_accident: initialData.flood_accident || "",
            topography_village: initialData.topography_village || "",
            building: initialData.building || "",
            year: initialData.year || "",
        });
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("flood.update", { id: initialData.id }));
    };

    return (
        <form className="space-y-6 p-6" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="_token" value={csrf_token} />
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Alternative ID
                </label>
                <TextInput
                    type="text"
                    name="alternative_id"
                    value={data.alternative_id}
                    onChange={(e) => setData("alternative_id", e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Flood Accident
                </label>
                <TextInput
                    type="text"
                    name="flood_accident"
                    value={data.flood_accident}
                    onChange={(e) => setData("flood_accident", e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Topography Village
                </label>
                <TextInput
                    type="text"
                    name="topography_village"
                    value={data.topography_village}
                    onChange={(e) =>
                        setData("topography_village", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Building
                </label>
                <TextInput
                    type="text"
                    name="building"
                    value={data.building}
                    onChange={(e) => setData("building", e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Year
                </label>
                <TextInput
                    type="text"
                    name="year"
                    value={data.year}
                    onChange={(e) => setData("year", e.target.value)}
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

export default FormEditFlood;
