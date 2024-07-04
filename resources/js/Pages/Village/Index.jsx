import VillageLayout from "@/Components/Layouts/VillageLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, villages }) {
    return (
        <VillageLayout auth={auth} data={villages}>
            <Head title="Village" />
        </VillageLayout>
    );
}
