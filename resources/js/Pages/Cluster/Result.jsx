import React from "react";
import { Head } from "@inertiajs/react";

export default function Result({ clusters }) {
    return (
        <div>
            <Head title="Hasil Pengelompokan Data Banjir" />
            <h1>Hasil Pengelompokan Data Banjir</h1>
            <div>
                {clusters.map((cluster, index) => (
                    <div key={index}>
                        <h2>Cluster {index + 1}</h2>
                        <ul>
                            {cluster.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
