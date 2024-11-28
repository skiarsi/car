<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Carmodel>
 */
class CarmodelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $make = DB::table('carmakes')->inRandomOrder()->value('slug');
        $name = $make.'-'.fake()->unique()->randomNumber().' '.fake()->word();
        $slug = Str::slug($name);

        return [
            'make_slug'=>$make,
            'name'  => $name,
            'slug'  => $slug,
            'description' => fake()->paragraphs(3, true)
        ];
    }
}
