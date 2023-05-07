<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Товары в заказе
 *
 * Class OrderProduct
 * @package App\Models
 *
 * @property int id
 * @property int order_id - id заказа
 * @property int product_id - id товара
 * @property int count - Количество
 * @property float sum - Сумма по товару
 * @property int color - Цвет
 * @property int size - Размер
 * @property int print_style - Стиль принта
 * @property int image_id - id сгенерированного изображения
 *
 */
class OrderProduct extends Model
{
    public const TABLE = 'order_products';

    /** @var string */
    protected $table = self::TABLE;
    protected $guarded = false;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    protected $fillable = [
        'order_id',
        'product_id',
        'count',
        'sum',
        'color',
        'size',
        'print_style',
        'image_id',
    ];

    protected $casts = [
        'order_id' => 'integer',
        'product_id' => 'integer',
        'count' => 'integer',
        'sum' => 'float',
        'color' => 'integer',
        'size' => 'integer',
        'print_style' => 'integer',
        'image_id' => 'integer',
    ];
}
