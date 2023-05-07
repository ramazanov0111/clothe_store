@extends('layouts.main')

@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Редактировать товар</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item active">Главная</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">
                <form action="{{ route('product.update', $product->id) }}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('patch')
                    <div class="form-group">
                        <input type="text" name="title" value="{{ $product->title }}" class="form-control" placeholder="Название">
                    </div>
                    <div class="form-group">
                        <input type="text" value="{{ $product->description ?? old('description') }}" name="description" class="form-control" placeholder="Описание">
                    </div>
                    <div class="form-group">
                        <input type="text" value="{{ $product->price ?? old('price') }}" name="price" class="form-control" placeholder="Цена">
                    </div>
                    <div class="form-group">
                        <input type="text" value="{{ $product->slug }}" name="slug" class="form-control" placeholder="Автоматическая генерация" readonly="">
                    </div>
                    <div class="form-group">
                        <input type="text" value="{{ $product->count ?? old('count') }}" name="count" class="form-control" placeholder="Количество">
                    </div>

                    <div class="form-group">
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" name="preview_image" class="custom-file-input" id="preview_image"
                                value="{{ $product->preview_image ?? '' }}">
                                <label class="custom-file-label" for="preview_image">Выберите файл</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <select name="category" class="form-control select2" style="width: 100%;">
                            <option disabled selected="selected">Выберите категорию</option>
                            @foreach($categories as $category)
                                <option {{ $product->category === $category['code'] ? ' selected' : '' }} value="{{ $category['code'] }}">{{ $category['name'] }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <select name="clothe_type" class="form-control select2" style="width: 100%;">
                            <option disabled selected="selected">Выберите тип одежды</option>
                            @foreach($clotheTypes as $clotheType)
                                <option {{ $product->clothe_type === $clotheType['code'] ? ' selected' : '' }} value="{{ $clotheType['code'] }}">{{ $clotheType['name'] }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <select name="tags[]" class="tags" multiple="multiple" data-placeholder="Выберите теги" style="width: 100%;">
                            @foreach($tags as $tag)
                                <option {{ in_array($tag->id, $productTags, true) ? ' selected' : '' }} value="{{ $tag->id }}">{{ $tag->title }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <select name="is_published" class="form-control select2" style="width: 100%;">
                            <option disabled selected="selected">Выберите статус публикации</option>
                            <option {{ $product->is_published ?? old('is_published') == 0 ? ' selected' : '' }} value="0">Не опубликовано</option>
                            <option {{ $product->is_published ?? old('is_published') == 1 ? ' selected' : '' }} value="1">Опубликовано</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Сохранить">
                    </div>
                </form>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection
