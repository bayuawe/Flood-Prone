<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Village>
 */
class VillageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'alternative' => $this->faker->unique()->numberBetween(20191, 20241),
            'village_code' => $this->faker->unique()->bothify('20123123###'),
            'name' => $this->faker->city,
        ];
    }
}
