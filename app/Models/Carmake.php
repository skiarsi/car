<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Carmake extends Model
{
    /** @use HasFactory<\Database\Factories\CarmakeFactory> */
    use HasFactory;

    protected $primaryKey= 'slug';
    protected $keyType= 'string';


    public function carmodels() : HasMany {
        return $this->hasMany(Carmodel::class,'make_slug');
    }
}
