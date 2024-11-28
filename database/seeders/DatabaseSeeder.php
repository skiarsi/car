<?php

namespace Database\Seeders;

use App\Models\Bodystyle;
use App\Models\Car;
use App\Models\Cardealers;
use App\Models\Carimage;
use App\Models\Carmake;
use App\Models\Carmodel;
use App\Models\Cartitle;
use App\Models\Drivetype;
use App\Models\Engine;
use App\Models\Fuletype;
use App\Models\Transmission;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(2000)->create();
        // Cardealers::factory(100)->create();

        // Carmake::factory(28)->create();
        // Carmodel::factory(3000)->create();

        // Bodystyle::factory(10)->create();
        // Cartitle::factory(12)->create();
        // Drivetype::factory(4)->create();
        // Engine::factory(9)->create();

        // Fuletype::factory(5)->create();
        // Transmission::factory(2)->create();

        Car::factory(15000)->create();
        Carimage::factory(42000)->create();

    }
}
