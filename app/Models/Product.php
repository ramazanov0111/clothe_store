<?php

namespace App\Models;

use App\Models\Traits\Filterable;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

/**
 * Товары
 *
 * Class Product
 * @package App\Models
 *
 * @property int id
 * @property string title - Название
 * @property string slug - Ссылка
 * @property string preview_image
 * @property integer price - Цена
 * @property int category - Категория
 * @property int clothe_type - Тип одежды
 * @property int count - Количество товара
 * @property string|null description - Описание
 * @property boolean is_published
 * @property Carbon|null created_at - Дата создания
 * @property Carbon|null updated_at - Дата обновления
 *
 * @property-read Image|null gallery
 * @property-read Tag|null tags
 * @property-read Review|null reviews
 * @property-read Order|null orders
 *
 */
class Product extends Model
{
    use Filterable;

    public const TABLE = 'products';

    /** @var string */
    protected $table = self::TABLE;
    protected $guarded = false;

    protected $fillable = [
        'title',
        'slug',
        'price',
        'preview_image',
        'category',
        'clothe_type',
        'count',
        'description',
        'is_published',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'title' => 'string',
        'slug' => 'string',
        'price' => 'integer',
        'preview_image' => 'string',
        'category' => 'integer',
        'clothe_type' => 'integer',
        'count' => 'string',
        'description' => 'string',
        'is_published' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // категории товаров
    public const NON_PLAYER_TYPE = 'non-player';
    public const PLAYER_TYPE = 'player';

    // категории товаров
    public const NON_PLAYER_CODE = 1;
    public const PLAYER_CODE = 2;

    // статус публикации
    public const PUBLISHED = 'Опубликовано';
    public const UNPUBLISHED = 'Не опубликовано';

    // тип одежды
    public const HOODIE_TYPE = 'Худи';
    public const SWEATSHIRT_TYPE = 'Свитшот';
    public const T_SHIRT_PRINT_TYPE = 'Футболка';

    // стили принтов
    public const EMBROIDERY_PRINT_STYLE = 'Вышивка';
    public const SERIGRAPHY_PRINT_STYLE = 'Шелкография';
    public const OTK_PRINT_STYLE = 'ОТК-принт';

    // цвета товаров
    public const WHITE_COLOR = 'белый';
    public const BLACK_COLOR = 'черный';
    public const BLUE_COLOR = 'синий';
    public const YELLOW_COLOR = 'желтый';
    public const GREEN_COLOR = 'зеленый';
    public const RED_COLOR = 'красный';
    public const PURPLE_COLOR = 'фиолетовый';
    public const ORANGE_COLOR = 'оранжевый';
    public const AZURE_COLOR = 'голубой';
    public const PINK_COLOR = 'розовый';
    public const BEIGE_COLOR = 'бежевый';
    public const KHAKI_COLOR = 'хаки';
    public const GREY_COLOR = 'серый';
    public const BROWN_COLOR = 'коричневый';

    // размеры товаров
    public const XS_SIZE = 'XS';
    public const S_SIZE = 'S';
    public const M_SIZE = 'M';
    public const L_SIZE = 'L';
    public const XL_SIZE = 'XL';
    public const XXL_SIZE = 'XXL';
    public const XXXL_SIZE = '3XL';
    public const XXXXL_SIZE = '4XL';

    public const CATEGORIES = [
        [
            'name' => self::NON_PLAYER_TYPE,
            'code' => 1,
        ],
        [
            'name' => self::PLAYER_TYPE,
            'code' => 2,
        ],
    ];

    public const STATUSES = [
        [
            'name' => self::PUBLISHED,
            'code' => 1,
        ],
        [
            'name' => self::UNPUBLISHED,
            'code' => 2,
        ],
    ];

    public const CLOTHES_TYPES = [
        [
            'name' => self::HOODIE_TYPE,
            'code' => 1,
        ],
        [
            'name' => self::SWEATSHIRT_TYPE,
            'code' => 2,
        ],
        [
            'name' => self::T_SHIRT_PRINT_TYPE,
            'code' => 3,
        ],
    ];

    public const PRINT_STYLES = [
        [
            'name' => self::EMBROIDERY_PRINT_STYLE,
            'code' => 1,
        ],
        [
            'name' => self::SWEATSHIRT_TYPE,
            'code' => 2,
        ],
        [
            'name' => self::OTK_PRINT_STYLE,
            'code' => 3,
        ],
    ];

    public const SIZES = [
        [
            'name' => self::XS_SIZE,
            'code' => 1,
        ],
        [
            'name' => self::S_SIZE,
            'code' => 2,
        ],
        [
            'name' => self::M_SIZE,
            'code' => 3,
        ],
        [
            'name' => self::L_SIZE,
            'code' => 1,
        ],
        [
            'name' => self::XL_SIZE,
            'code' => 2,
        ],
        [
            'name' => self::XXL_SIZE,
            'code' => 3,
        ],
        [
            'name' => self::XXXL_SIZE,
            'code' => 3,
        ],
        [
            'name' => self::XXXXL_SIZE,
            'code' => 3,
        ],
    ];

    public const COLORS = [
        0 => [
            'name' => self::WHITE_COLOR,
            'code' => '#FFFFFF',
        ],
        1 => [
            'name' => self::BLACK_COLOR,
            'code' => '#000000',
        ],
        2 => [
            'name' => self::BLUE_COLOR,
            'code' => '#0000FF',
        ],
        3 => [
            'name' => self::YELLOW_COLOR,
            'code' => '#FFFF00',
        ],
        4 => [
            'name' => self::GREEN_COLOR,
            'code' => '#008000',
        ],
        5 => [
            'name' => self::RED_COLOR,
            'code' => '#FF0000',
        ],
        6 => [
            'name' => self::PURPLE_COLOR,
            'code' => '#9370DB',
        ],
        7 => [
            'name' => self::ORANGE_COLOR,
            'code' => '#FFA500',
        ],
        8 => [
            'name' => self::AZURE_COLOR,
            'code' => '#F0FFFF',
        ],
        9 => [
            'name' => self::PINK_COLOR,
            'code' => '#FFC0CB',
        ],
        10 => [
            'name' => self::BEIGE_COLOR,
            'code' => '#F5F5DC',
        ],
        11 => [
            'name' => self::KHAKI_COLOR,
            'code' => '#BDB76B',
        ],
        12 => [
            'name' => self::GREY_COLOR,
            'code' => '#808080',
        ],
        13 => [
            'name' => self::BROWN_COLOR,
            'code' => '#8B4513',
        ],
    ];

    /**
     * @return string
     */
    public function getCategoryTitleAttribute(): string
    {
        $curCategory = null;
        foreach (self::CATEGORIES as $item) {
            if ($item['code'] === $this->category) {
                $curCategory = $item['name'];
            }
        }
        return $curCategory;
    }

    /**
     * @return string
     */
    public function getClotheTypeTitleAttribute(): string
    {
        foreach (self::CLOTHES_TYPES as $clotheType) {
            if ($clotheType['code'] === $this->clothe_type) {
                return $clotheType['name'];
            }
        }
        return false;
    }

    /**
     * @return string
     */
    public function getImageUrlAttribute(): string
    {
        return url('storage/' . $this->preview_image);
    }

    // Mutators
    public function setSlugAttribute($value): void
    {
        $this->attributes['slug'] = Str::slug( mb_substr($this->title, 0, 40) . "-" . \Carbon\Carbon::now()->format('dmyHi'), '-');
    }

    /**
     * @return HasMany
     */
    public function gallery(): HasMany
    {
        return $this->hasMany(Image::class, 'product_id', 'id');
    }

    /**
     * @return BelongsToMany
     */
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'product_tag', 'product_id', 'tag_id');
    }

    /**
     * @return BelongsToMany
     */
    public function orders(): BelongsToMany
    {
        return $this->belongsToMany(Order::class, 'order_product', 'product_id', 'order_id');
    }

    /**
     * @return HasMany
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'product_id', 'id');
    }
}
