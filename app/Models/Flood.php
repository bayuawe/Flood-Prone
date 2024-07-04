<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flood extends Model
{
    use HasFactory;

    protected $table = 'flood_tables';

    protected $fillable = [
        'village_id',
        'total_flood_accident',
        'topography_village',
        'total_building',
        'year',
    ];

    public function village()
    {
        return $this->belongsTo(Village::class);
    }
}
