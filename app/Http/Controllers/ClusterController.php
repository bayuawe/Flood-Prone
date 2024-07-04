<?php

namespace App\Http\Controllers;

use App\Models\Flood;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClusterController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Cluster/Index');
    }

    public function cluster(Request $request)
    {
        $year = $request->input('year');
        $floods = Flood::where('year', $year)->get();

        // Ambil nilai centroid awal
        $centroids = [
            [$request->input('x1'), $request->input('y1'), $request->input('z1')],
            [$request->input('x2'), $request->input('y2'), $request->input('z2')],
            [$request->input('x3'), $request->input('y3'), $request->input('z3')],
        ];

        // Jika centroid kosong, generate otomatis
        foreach ($centroids as &$centroid) {
            if (empty($centroid[0]) && empty($centroid[1]) && empty($centroid[2])) {
                $centroid = [
                    rand(1, 100), // Ganti dengan logika yang sesuai
                    rand(1, 100),
                    rand(1, 100),
                ];
            }
        }

        // Proses K-Means Clustering
        // ...

        return Inertia::render('Cluster/Result', [
            'clusters' => $clusters,
        ]);
    }

    private function performClustering($floods)
    {
        // Implementasi K-Means Clustering
        // ...
        return $clusters;
    }
}
