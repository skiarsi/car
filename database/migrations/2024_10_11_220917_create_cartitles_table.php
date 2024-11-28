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
        Schema::create('cartitles', function (Blueprint $table) {
            $table->id();
            $table->string('cartitle_title')->unique();
            $table->string('cartitle_slug')->unique()->index();
            $table->string('cartitle_desc')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cartitles');
    }
};
