<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * Пользователи
 *
 * Class User
 * @package App\Models
 *
 * @property int id
 * @property string firstname
 * @property string email
 * @property string password
 * @property string|null lastname
 * @property Carbon|null birthday
 * @property string|null address
 * @property string|null phone
 * @property int|null gender
 * @property Carbon|null created_at - Дата создания
 * @property Carbon|null updated_at - Дата обновления
 *
 * @property-read Review|null reviews
 * @property-read Order|null orders
 *
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public const TABLE = 'users';


    /** @var string */
    protected $table = self::TABLE;
    protected $guarded = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname',
        'email',
        'password',
        'lastname',
        'birthday',
        'address',
        'phone',
        'gender',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public const MALE_GENDER = 'мужской';
    public const FEMALE_GENDER = 'женский';

    public const GENDERS = [
        1 => self::MALE_GENDER,
        2 => self::FEMALE_GENDER,
    ];

    public function getGenderTitleAttribute(): string
    {
        return self::GENDERS[$this->gender];
    }

    /**
     * @return HasMany
     */
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class,'user_id', 'id');
    }

    /**
     * @return HasMany
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'user_id', 'id');
    }
}
