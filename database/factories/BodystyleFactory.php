<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bodystyle>
 */
class BodystyleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        //10
        $type = ['Pickup','Suv','Sedan','Coupe','Van','Convertible','chassis','Hatchback','Minivan','Wagon'];
        $name = fake()->unique()->randomElement($type);
        $slug = Str::slug($name);

        return [
            'bodystyle_title'   => $name,
            'bodystyle_slug'    => $slug,
            'bodystyle_desc'    => fake()->paragraph()
        ];
    }
}
