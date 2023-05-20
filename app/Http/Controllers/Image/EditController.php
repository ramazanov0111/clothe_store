<?php

namespace App\Http\Controllers\Image;

use App\Http\Controllers\Controller;
use App\Models\Image;

class EditController extends Controller
{
    public function __invoke(Image $image)
    {
        return view('image.edit', compact('image'));
    }
}
