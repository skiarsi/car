<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fuletypes', function (Blueprint $table) {
            $table->id();
            $table->string('fueltype_title')->unique();
            $table->string('fueltype_slug')->unique()->index();
            $table->string('fueltype_desc')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fuletypes');
    }
};
