<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Заказы
 *
 * Class order
 * @package App\Models
 *
 * @property int id
 * @property int user_id - Пользователь
 * @property Carbon order_date - Дата заказа
 * @property float total - Сумма заказа (Итог)
 * @property int status - Статус заказа (Принято, Оформлен, На изготовлении, Собран, В пути, Получено, Отменен)
 * @property Carbon|null delivery_date - Дата доставки
 * @property int|null payment_status - Статус оплаты
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
        'payment_status',
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
        'payment_status' => 'integer',
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

    // коды статусов заказа
    public const ACCEPTED_STATUS_CODE = 1;
    public const DECORATED_STATUS_CODE = 2;
    public const IN_PRODUCTION_STATUS_CODE = 3;
    public const ASSEMBLED_STATUS_CODE = 4;
    public const ON_THE_WAY_STATUS_CODE = 5;
    public const RECEIVED_STATUS_CODE = 6;
    public const CANCELED_STATUS_CODE = 7;

    // коды статусов оплаты
    public const PAID_CODE = 1;
    public const NOT_PAID_CODE = 2;

    // статусы оплаты
    public const PAID = 'Оплачено';
    public const NOT_PAID = 'Не оплачено';

    public const STATUSES = [
        1 => self::ACCEPTED_STATUS,
        2 => self::DECORATED_STATUS,
        3 => self::IN_PRODUCTION_STATUS,
        4 => self::ASSEMBLED_STATUS,
        5 => self::ON_THE_WAY_STATUS,
        6 => self::RECEIVED_STATUS,
        7 => self::CANCELED_STATUS,
    ];

    public const PAYMENT_STATUSES = [
        1 => self::PAID,
        2 => self::NOT_PAID,
    ];

    /**
     * @return string
     */
    public function getStatus(): string
    {
        return self::STATUSES[$this->status];
    }

    /**
     * @return string
     */
    public function getPaymentStatus(): string
    {
        return self::PAYMENT_STATUSES[$this->payment_status];
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
