<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class ProductFilter extends AbstractFilter
{
    const PRICE = 'price';
    const TAGS = 'tags';

    protected function getCallbacks(): array
    {
        return [
            self::PRICE => [$this, 'price'],
            self::TAGS => [$this, 'tags'],
        ];
    }

    protected function tags(Builder $builder, $value) {
        $builder->whereHas('tags', function ($b) use ($value) {
            $b->whereIn('tag_id', $value);
        });
    }

    protected function price(Builder $builder, $value) {
        $builder->whereBetween($value['from'], $value['to']);
    }
}
