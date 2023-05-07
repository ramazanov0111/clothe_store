<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Заказы
 *
 * Class Order
 * @package App\Models
 *
 * @property int id
 * @property int user_id - Пользователь
 * @property Carbon order_date - Дата заказа
 * @property float total - Сумма заказа (Итог)
 * @property int status - Статус заказа (Принято, Оформлен, На изготовлении, Собран, В пути, Получено, Отменен)
 * @property Carbon|null delivery_date - Дата доставки
 * @property Carbon|null created_at - Дата создания
 * @property Carbon|null updated_at - Дата обновления
 *
 * @property-read User|null user
 * @property-read Product|null products
 *
 */
class Order extends Model
{
    public const TABLE = 'orders';

    /** @var string */
    protected $table = self::TABLE;
    protected $guarded = false;

    protected $fillable = [
        'user_id',
        'order_date',
        'total',
        'status',
        'delivery_date',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'order_date' => 'datetime',
        'total' => 'float',
        'status' => 'integer',
        'delivery_date' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // статусы заказа
    public const ACCEPTED_STATUS = 'Принято';
    public const DECORATED_STATUS = 'Оформлен';
    public const IN_PRODUCTION_STATUS = 'В производстве';
    public const ASSEMBLED_STATUS = 'Собран';
    public const ON_THE_WAY_STATUS = 'В пути';
    public const RECEIVED_STATUS = 'Получено';
    public const CANCELED_STATUS = 'Отменен';

    public const STATUSES = [
        0 => self::ACCEPTED_STATUS,
        1 => self::DECORATED_STATUS,
        2 => self::IN_PRODUCTION_STATUS,
        3 => self::ASSEMBLED_STATUS,
        4 => self::ON_THE_WAY_STATUS,
        5 => self::RECEIVED_STATUS,
        6 => self::CANCELED_STATUS,
    ];

    /**
     * @return string
     */
    public function getStatus(): string
    {
        return self::STATUSES[$this->status];
    }

    /**
     * @return BelongsToMany
     */
    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'order_product', 'order_id', 'product_id');
    }

    /**
     * @return belongsTo
     */
    public function user(): belongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
