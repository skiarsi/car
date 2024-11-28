<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Engine>
 */
class EngineFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // 9
        $engins = ['3 Cyl','4 Cyl','5 Cyl','6 Cyl','8 Cyl','10 Cyl','12 Cyl','Electric','Rotary'];
        $name = fake()->unique()->randomElement($engins);
        $slug = Str::slug($name);
        
        return [
            'engine_title'  => $name,
            'engine_slug'   => $slug,
            'engine_desc'   => fake()->paragraph(1)
        ];
    }
}
