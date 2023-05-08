<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Отзывы пользователей о товаре
 *
 * @property int id
 * @property int user_id - ID заявки
 * @property int product_id - ID вопроса
 * @property string content - Текст ответа
 * @property Carbon|null created_at - Дата создания
 * @property Carbon|null updated_at - Дата обновления
 *
 * @property-read User|null user - Товар
 * @property-read Product|null product - Товар
 *
 */
class Review extends Model
{
    public const TABLE = 'reviews';

    /** @var string */
    protected $table = self::TABLE;
    protected $guarded = false;

    protected $fillable = [
        'user_id',
        'product_id',
        'content',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'product_id' => 'integer',
        'content' => 'string',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * @return belongsTo
     */
    public function product(): belongsTo
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    /**
     * @return belongsTo
     */
    public function user(): belongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
