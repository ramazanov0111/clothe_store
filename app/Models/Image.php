<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Изображения товаров
 *
 * @property int id
 * @property int product_id - ID товара
 * @property string filename - Название изображения
 * @property Carbon|null created_at - Дата создания
 * @property Carbon|null updated_at - Дата обновления
 *
 * @property-read Product|null product - Товар
 *
 */
class Image extends Model
{
    public const TABLE = 'images';

    /** @var string */
    protected $table = self::TABLE;
    protected $guarded = false;

    protected $fillable = [
        'product_id',
        'filename',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'product_id' => 'integer',
        'filename' => 'string',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * @return string
     */
    public function getImageUrlAttribute(): string
    {
        return url('storage/' . $this->filename);
    }

    /**
     * @return belongsTo
     */
    public function product(): belongsTo
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
}
