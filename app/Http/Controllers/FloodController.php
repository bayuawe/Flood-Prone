<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FloodController extends Controller
{
    public function index()
    {
        return Inertia::render('Flood/Index');
    }
}