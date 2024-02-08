<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deck extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function flashcards()
    {
        return $this->hasMany(Flashcard::class);
    }
}
