<?php

namespace Database\Seeders;

use App\Models\Flood;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FloodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Flood::factory()->count(50)->create();
    }
}