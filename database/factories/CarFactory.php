<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $make = DB::table('carmakes')->inRandomOrder()->value('slug');
        return [
            'car_make'  => $make,
            'car_model'  => DB::table('carmodels')->where('make_slug',$make)->inRandomOrder()->value('slug'),
            'dealer'     => DB::table('cardealers')->inRandomOrder()->value('id'),

            'car_title' => DB::table('cartitles')->inRandomOrder()->value('id'),
            'body_type' => DB::table('bodystyles')->inRandomOrder()->value('id'),
            'drive_type' => DB::table('drivetypes')->inRandomOrder()->value('id'),
            'transmission_type' => DB::table('transmissions')->inRandomOrder()->value('id'),
            'engin_type' => DB::table('engines')->inRandomOrder()->value('id'),
            'fuel_type' => DB::table('fuletypes')->inRandomOrder()->value('id'),

            'title_description' => fake()->paragraph(1),
            'dealer_description' => fake()->paragraph(1),
            'description' => fake()->paragraph(1),

            'interior_color' => 'color '.fake()->word(),
            'exterior_color' => 'color '.fake()->word(),

            'feature' => '[{}]',
            'year'      => fake()->numberBetween(1980,2024),
            'price'      => fake()->numberBetween(1500,100000),
            'mileage'      => fake()->numberBetween(0,200000)
        ];
    }
}
