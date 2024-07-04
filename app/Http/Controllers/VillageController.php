<?php

namespace App\Http\Controllers;

use App\Models\Village;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VillageController extends Controller
{
    public function index()
    {
        $villages = Village::all();
        return Inertia::render('Village/Index', ['villages' => $villages]);
    }

    public function create()
    {
        return Inertia::render('Village/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'alternative' => 'required|unique:villages',
            'village_code' => 'required|unique:villages',
            'name' => 'required',
        ]);

        Village::create($request->all());

        return redirect()->route('village.index');
    }

    public function edit(Village $village)
    {
        return Inertia::render('Village/Edit', ['village' => $village]);
    }

    public function update(Request $request, Village $village)
    {
        $request->validate([
            'alternative' => 'required|unique:villages,alternative,' . $village->id,
            'village_code' => 'required|unique:villages,village_code,' . $village->id,
            'name' => 'required',
        ]);

        $village->update($request->all());

        return redirect()->route('village.index');
    }

    public function destroy(Village $village)
    {
        $village->delete();

        return redirect()->route('village.index')->with('success', 'Desa berhasil dihapus');
    }
}
