<?php

namespace App\Http\Controllers\Image;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tag\UpdateRequest;
use App\Models\Image;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Image $image)
    {
        $data = $request->validated();
        $image->update($data);

        return view('image.show', compact('image'));
    }
}
