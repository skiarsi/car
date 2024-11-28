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
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->char('car_make');
            $table->char('car_model');
            $table->foreignId('dealer')->constrained('cardealers')->cascadeOnDelete();

            $table->foreignId('car_title')->constrained('cartitles')->cascadeOnUpdate();
            $table->foreignId('body_type')->constrained('bodystyles')->cascadeOnUpdate();
            $table->foreignId('drive_type')->constrained('drivetypes')->cascadeOnUpdate();
            $table->foreignId('transmission_type')->constrained('transmissions')->cascadeOnUpdate();
            $table->foreignId('engin_type')->constrained('engines')->cascadeOnUpdate();
            $table->foreignId('fuel_type')->constrained('fuletypes')->cascadeOnUpdate();

            $table->text('title_description')->nullable();
            $table->text('dealer_description')->nullable();
            $table->text('description')->nullable();
            $table->string('interior_color');
            $table->string('exterior_color');
            $table->json('feature')->nullable();

            $table->integer('views')->default(0);

            $table->integer('price');
            $table->integer('year');
            $table->integer('mileage');


            // $table->foreign('car_make')->references('slug')->on('carmakes')->onDelete('cascade');
            // $table->foreign('car_model')->references('slug')->on('carmodels')->onDelete('cascade');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
