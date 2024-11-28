<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Carmake>
 */
class CarmakeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // 28
        $brands = ["Audi","BMW","Bugatti","Cadillac","Chevrolet","Dodge","DS","Ferrari","Fiat","Ford","Honda","Hyundai",
                    "Jeep","Kia","Land Rover","Lexus","Mazda","McLaren","Mercedes-Benz","MG","Mini","Mitsubishi",
                    "Morgan","Nissan","Suzuki","Tesla","Toyota","Volvo"
        ];

        $name = fake()->unique()->randomElement($brands);
        $slug = Str::slug($name);
        return [
            'name' => $name,
            'slug' => $slug,
            'description' => fake()->paragraphs(3,true)
        ];
    }
}
