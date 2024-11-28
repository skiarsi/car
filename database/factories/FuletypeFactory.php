<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fuletype>
 */
class FuletypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // 5
        $fuel = ['Gasoline','Flexible-Fuel','Diesel','Hybrid','Electric'];
        $name = fake()->unique()->randomElement($fuel);
        $slug = Str::slug($name);
        
        return [
            'fueltype_title'=>$name,
            'fueltype_slug'=> $slug,
            'fueltype_desc'=>fake()->paragraph(1)
        ];
    }
}
