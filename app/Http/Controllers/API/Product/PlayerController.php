<?php

namespace App\Http\Controllers\API\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductResource;
use App\Models\GeneratedImage;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;

class PlayerController extends Controller
{
    public function actionGetPlayerProduct(Request $request): ProductResource
    {
        $clotheType = (int)$request->get('clotheType');

        if ($clotheType) {
            $product = (new Product)->query()
                ->where('category', Product::PLAYER_CODE)
                ->where('clothe_type', $clotheType)
                ->first();

            if (!$product) {
                $product = (new Product)->query()
                    ->where('category', Product::PLAYER_CODE)
                    ->first();
            }
        } else {
            $product = (new Product)->query()
                ->where('category', Product::PLAYER_CODE)
                ->first();
        }

        return new ProductResource($product);
    }

    public function actionGenerateImage(Request $request): JsonResponse
    {
        $prompt = $request->get('prompt');

        $payload = [
            "key" => "NrT0QnoCMnvSTlb3VxNA4r8kFwVGtvAqPUmHf4yswlasS1jwzamTk1YT4nt4",
            "prompt" => $prompt,
            "negative_prompt" => null,
            "width" => "512",
            "height" => "512",
            "samples" => "1",
            "num_inference_steps" => "20",
            "seed" => null,
            "guidance_scale" => 7.5,
            "safety_checker" => "yes",
            "multi_lingual" => "no",
            "panorama" => "no",
            "self_attention" => "no",
            "upscale" => "no",
            "embeddings_model" => "embeddings_model_id",
            "webhook" => null,
            "track_id" => null
        ];

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://stablediffusionapi.com/api/v3/text2img',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => json_encode($payload, JSON_THROW_ON_ERROR),
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json'
            ),
        ));

        $response = curl_exec($curl);
        $response = json_decode($response);

        if ($response->status === 'success') {
//            $imagePath = Storage::disk('public')->put('/generated', $response->output[0]);
//
//            $image = GeneratedImage::query()->create([
//                'filename' => $imagePath,
//            ]);
            $data = $response;
        } else {
            $data = [
                'error' => Response::HTTP_BAD_REQUEST,
                'message' => 'Не удалось сгенерировать изображение!'
            ];
        }

        curl_close($curl);

//        dd($data);

        return new JsonResponse($data);
    }
}
