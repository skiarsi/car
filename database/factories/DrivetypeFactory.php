<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Drivetype>
 */
class DrivetypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // 4
        $drive = ['FWD','RWD','4WD','AWD'];
        $name = fake()->unique()->randomElement($drive);
        $slug = Str::slug($name);
        return [
            'drivetype_title' => $name,
            'drivetype_slug' => $slug,
            'drivetype_desc' => fake()->paragraph(1)
        ];
    }
}
