<?php

namespace Database\Factories;

use App\Models\Village;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Flood>
 */
class FloodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'alternative_id' => Village::inRandomOrder()->first()->alternative,
            'flood_accident' => $this->faker->numberBetween(3, 10),
            'topography_village' => $this->faker->numberBetween(1, 4),
            'building' => $this->faker->numberBetween(20, 100),
            'year' => $this->faker->numberBetween(2019, 2024),
        ];
    }
}
