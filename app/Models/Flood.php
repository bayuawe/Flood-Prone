<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flood extends Model
{
    use HasFactory;

    protected $table = 'floods';

    protected $fillable = [
        'alternative_id',
        'flood_accident',
        'topography_village',
        'building',
        'year',
    ];

    public function village()
    {
        return $this->belongsTo(Village::class, 'alternative_id', 'alternative');
    }
}
