<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transmission>
 */
class TransmissionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->unique()->randomElement(['Automatic','Manuel']);
        return [
            'transmission_title'=>$name,
            'transmission_slug'=>Str::slug($name),
            'transmission_desc'=>fake()->paragraph(1)
        ];
    }
}
