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
                    rand(1, 10), // Ganti dengan logika yang sesuai
                    rand(1, 4),
                    rand(1, 100),
                ];
            }
        }

        // Proses K-Means Clustering
        $clusters = $this->performClustering($floods, $centroids);

        return Inertia::render('Cluster/Result', [
            'clusters' => $clusters,
        ]);
    }

    private function performClustering($floods, $centroids)
    {
        $maxIterations = 100;
        $clusters = [];
        $previousCentroids = [];

        for ($i = 0; $i < $maxIterations; $i++) {
            // Assign points to the nearest centroid
            foreach ($floods as $flood) {
                $distances = array_map(function ($centroid) use ($flood) {
                    return sqrt(
                        pow($flood->flood_accident - $centroid[0], 2) +
                            pow($flood->topography_village - $centroid[1], 2) +
                            pow($flood->building - $centroid[2], 2)
                    );
                }, $centroids);

                $minDistanceIndex = array_keys($distances, min($distances))[0];
                $clusters[$minDistanceIndex][] = $flood;
            }

            // Calculate new centroids
            $newCentroids = [];
            foreach ($clusters as $index => $cluster) {
                $newCentroids[$index] = [
                    array_sum(array_column($cluster, 'flood_accident')) / count($cluster),
                    array_sum(array_column($cluster, 'topography_village')) / count($cluster),
                    array_sum(array_column($cluster, 'building')) / count($cluster),
                ];
            }

            // Check for convergence
            if ($newCentroids == $centroids) {
                break;
            }

            $centroids = $newCentroids;
            $clusters = [];
        }

        return $clusters;
    }
}
