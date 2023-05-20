<?php

namespace App\Http\Controllers\Image;

use App\Http\Controllers\Controller;
use App\Models\Image;

class ShowController extends Controller
{
    public function __invoke(Image $image)
    {
        return view('image.show', compact('image'));
    }
}
