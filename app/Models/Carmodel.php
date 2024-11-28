<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Carmodel extends Model
{
    /** @use HasFactory<\Database\Factories\CarmodelFactory> */
    use HasFactory;

    protected $primaryKey= 'slug';
    protected $keyType= 'string';

    public function carmakes() : BelongsTo {
        return $this->belongsTo(Carmake::class,'make_slug');
    }
    
    /**
     * relation with cars
     * it's not working right now, because of fake datas
     */
    // public function cars() : HasMany {
    //     return $this->hasMany(Car::class,'car_model');
    // }
}
