<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $guarded = [];

    public static $TYPES = [
        'training' => 0,
        'sa' => 1,
        'mcq' => 2
    ];

    public static $VALUES = [
        'training' => null,
        'wrong' => 0,
        'correct' => 1
    ];
}
