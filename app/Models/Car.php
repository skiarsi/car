<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Car extends Model
{
    /** @use HasFactory<\Database\Factories\CarFactory> */
    use HasFactory;

    // relations


    // relation with images
    public function thumbnail() : HasMany {
        return $this->hasMany(Carimage::class)->where('isThumbnail',1);
    }


    // relation with title
    public function title() : BelongsTo {
        return $this->belongsTo(Cartitle::class,'car_title','id');
    }

    // relation with car make
    public function carmake() : BelongsTo {
        return $this->belongsTo(Carmake::class,'car_make','slug');
    }

    // relations with model
    public function carmodel() : BelongsTo {
        return $this->belongsTo(Carmodel::class,'car_model','slug');
    }

    // relations with drive type
    public function drivetype() : BelongsTo {
        return $this->belongsTo(Drivetype::class,'drive_type','id');
    }

    // relations with transmission
    public function transmission() : BelongsTo {
        return $this->belongsTo(Transmission::class,'transmission_type','id');
    }

    // relations with engin
    public function engintype() : BelongsTo {
        return $this->belongsTo(Engine::class,'engin_type','id');
    }

    // relations with fuel type
    public function fueltype() : BelongsTo {
        return $this->belongsTo(Fuletype::class,'fuel_type','id');
    }

    // relations with body type
    public function bodytype() : BelongsTo {
        return $this->belongsTo(Bodystyle::class,'body_type','id');
    }

    // relation with dealer
    public function dealersel() : BelongsTo {
        return $this->belongsTo(Cardealers::class,'dealer','id');
    }

    // relate with user like
    public function like() : BelongsToMany {
        // return $this->belongsToMany(User::class)->where('user_id', auth()->user()->id);
        return $this->belongsToMany(User::class);
    }





    // local scopes

    // by make
    public function scopeByMake($query, $value){
        if($value == '0' || $value == 'any')
            return $query->whereNotNull('car_make');

        return $query->where('car_make', $value);
    }

    // by model
    public function scopeByModel($query, $value) {
        if($value == '0' || $value == 'any')
            return $query->whereNotNull('car_model');

        return $query->where('car_model', $value);
    }


    // by year
    public function scopeByYear($query, $value) {
        if($value == '0' || $value == 'any')
            return $query->whereNotNull('year');

        return $query->where('year','>=', $value);
    }


    // by price
    public function scopeByPrice($query, $value)  {
        if($value == '0' || $value == 'any')
            return $query->whereNotNull('price');

        return $query->where('price','<=', $value);
    }

    public function scopeByMileage($query, $value) {
        if($value == '0' || $value == 'any')
            return $query->whereNotNull('mileage');

        return $query->where('mileage','<=', $value);
    }

    public function scopeByTitle($query, $value) {
        if($value == '0' || $value == 'any')
            return $query->whereNotNull('car_title');

        return $query->where('car_title', $value);
    }

    public function scopeByBody($query, $value) {
        if($value == '0' || $value == 'any')
            return $query->whereNotNull('body_type');

        return $query->where('body_type', $value);
    }

    public function scopeByDrive($query, $value) {
        if($value == '0' || $value == 'any')
            return $query->whereNotNull('drive_type');

        return $query->where('drive_type', $value);
    }


    public function scopeByEngine($query, $value) {
        if($value == '0' || $value == 'any')
            return $query->whereNotNull('engin_type');

        return $query->where('engin_type', $value);
    }

}
