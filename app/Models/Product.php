<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_path',
        'image_url',
        'title',
        'description',
        'brand',
        'price',
        'is_limited_edition',
        'is_low_stock',
        'is_promoted',
    ];
}
