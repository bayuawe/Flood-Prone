import AuthenticatedLayout from "@/Components/Layouts/AuthenticatedLayout";
import CentroidLayout from "@/Components/Layouts/CentroidLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Index({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        year: "",
        x1: "",
        y1: "",
        z1: "",
        x2: "",
        y2: "",
        z2: "",
        x3: "",
        y3: "",
        z3: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("cluster.process"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Cluster
                </h2>
            }
        >
            <Head title="Cluster" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Cluster</div>
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="flex flex-col">
                                    <label className="mb-2 font-semibold">
                                        Mulai Perhitungan
                                    </label>
                                    <input
                                        type="text"
                                        value={data.year}
                                        onChange={(e) =>
                                            setData("year", e.target.value)
                                        }
                                        className="p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-2 font-semibold">
                                        C1
                                    </label>
                                    <CentroidLayout
                                        id={1}
                                        centroid={{
                                            x: data.x1,
                                            y: data.y1,
                                            z: data.z1,
                                        }}
                                        handleChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-2 font-semibold">
                                        C2
                                    </label>
                                    <CentroidLayout
                                        id={2}
                                        centroid={{
                                            x: data.x2,
                                            y: data.y2,
                                            z: data.z2,
                                        }}
                                        handleChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-2 font-semibold">
                                        C3
                                    </label>
                                    <CentroidLayout
                                        id={3}
                                        centroid={{
                                            x: data.x3,
                                            y: data.y3,
                                            z: data.z3,
                                        }}
                                        handleChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                                >
                                    Mulai Perhitungan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
