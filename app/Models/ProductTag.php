<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Теги товаров
 *
 * Class ProductTag
 * @package App\Models
 *
 * @property int id
 * @property int product_id - id товара
 * @property int tag_id - id тега
 *
 */
class ProductTag extends Model
{
    public const TABLE = 'product_tags';

    /** @var string */
    protected $table = self::TABLE;
    protected $guarded = false;

//    /**
//     * Indicates if the model should be timestamped.
//     *
//     * @var bool
//     */
//    public $timestamps = false;

    protected $fillable = [
        'product_id',
        'tag_id',
    ];

    protected $casts = [
        'product_id' => 'integer',
        'tag_id' => 'integer',
    ];
}
