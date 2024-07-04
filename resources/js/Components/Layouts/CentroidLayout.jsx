import TextInput from "@/Components/Elements/TextInput";

export default function CentroidLayout({
    id,
    centroid,
    handleChange,
    onSubmit,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(centroid);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label
                        htmlFor={`x${id}`}
                        className="block text-sm font-medium text-gray-700"
                    >
                        X{id}
                    </label>
                    <div className="mt-1">
                        <TextInput
                            id={`x${id}`}
                            name={`x${id}`}
                            type="number"
                            value={centroid.x}
                            onChange={handleChange}
                            className="block w-full"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor={`y${id}`}
                        className="block text-sm font-medium text-gray-700"
                    >
                        Y{id}
                    </label>
                    <div className="mt-1">
                        <TextInput
                            id={`y${id}`}
                            name={`y${id}`}
                            type="number"
                            value={centroid.y}
                            onChange={handleChange}
                            className="block w-full"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor={`z${id}`}
                        className="block text-sm font-medium text-gray-700"
                    >
                        Z{id}
                    </label>
                    <div className="mt-1">
                        <TextInput
                            id={`z${id}`}
                            name={`z${id}`}
                            type="number"
                            value={centroid.z}
                            onChange={handleChange}
                            className="block w-full"
                            required
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}
