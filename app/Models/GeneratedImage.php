<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Изображение товара со сгенерированной пользователем картинкой (для товаров в корзине)
 *
 * @property int id
 * @property int|null user_id - ID пользователя
 * @property string filename - Название изображения
 * @property Carbon|null created_at - Дата создания
 * @property Carbon|null updated_at - Дата обновления
 *
 * @property-read User|null user
 *
 */
class GeneratedImage extends Model
{
    public const TABLE = 'generated_images';

    /** @var string */
    protected $table = self::TABLE;
    protected $guarded = false;

    protected $fillable = [
        'user_id',
        'filename',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'filename' => 'string',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * @return belongsTo
     */
    public function user(): belongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
