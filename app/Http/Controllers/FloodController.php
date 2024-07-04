<?php

namespace App\Http\Controllers;

use App\Models\Flood;
use App\Models\Village;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FloodController extends Controller
{
    public function index()
    {
        $floods = Flood::all();
        return Inertia::render('Flood/Index', ['floods' => $floods]);
    }

    public function create()
    {
        $alternatives = Village::all();
        return Inertia::render('Flood/Create', ['alternatives' => $alternatives]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'alternative_id' => 'required',
            'flood_accident' => 'required',
            'topography_village' => 'required',
            'building' => 'required',
            'year' => 'required',
        ]);

        Flood::create($request->all());

        return redirect()->route('flood.index');
    }

    public function edit(Flood $flood)
    {
        return Inertia::render('Flood/Edit', ['flood' => $flood]);
    }

    public function update(Request $request, Flood $flood)
    {
        $request->validate([
            'alternative_id' => 'required',
            'flood_accident' => 'required',
            'topography_village' => 'required',
            'building' => 'required',
            'year' => 'required',
        ]);

        $flood->update($request->all());

        return redirect()->route('flood.index');
    }

    public function destroy(Flood $flood)
    {
        $flood->delete();

        return redirect()->route('flood.index')->with('success', 'Flood data deleted successfully');
    }
}