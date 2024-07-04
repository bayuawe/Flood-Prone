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
        Schema::create('floods', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('alternative_id'); // Pastikan tipe data sesuai
            $table->integer('flood_accident');
            $table->boolean('topography_village');
            $table->integer('building');
            $table->year('year');
            $table->timestamps();

            // Mengatur foreign key
            $table->foreign('alternative_id')->references('alternative')->on('villages')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('floods');
    }
};