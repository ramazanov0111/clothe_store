<?php

namespace App\Http\Controllers\Image;

use App\Http\Controllers\Controller;
use App\Models\Image;

class IndexController extends Controller
{
    public function __invoke()
    {
        $images = Image::all();

        return view('image.index', compact('images'));
    }
}
