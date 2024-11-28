<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cartitle>
 */
class CartitleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // 12
        $title = ['Clear/clean','Lienholder','Electronic','Salvage','Junk','Bonded','Reconstructed','Affidavit','Rebuilt','Water damage','Odometer rollback','Dismantled'];
        $name = fake()->unique()->randomElement($title);
        $slug = Str::slug($name);

        return [
            'cartitle_title'=>$name,
            'cartitle_slug'=>$slug,
            'cartitle_desc'=>fake()->paragraph(1)
        ];
    }
}
