@extends('layouts.main')

@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Заказ</h1>
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
                <div class="col-12">
                    <div class="card">
                        <div class="card-header d-flex p-3">
                            <div class="mr-3">
                                <a href="{{  route('order.edit', $order->id) }}" class="btn btn-primary">Редактировать</a>
                            </div>
                            <form action="{{ route('order.delete', $order->id) }}" method="post">
                                @csrf
                                @method('delete')
                                <input type="submit" class="btn btn-danger" value="Удалить">
                            </form>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <tbody>
                                <tr>
                                    <td>ID</td>
                                    <td>{{ $order->id }}</td>
                                </tr>
                                <tr>
                                    <td>Название</td>
                                    <td>{{ $product->title }}</td>
                                </tr>
                                <tr>
                                    <td>Цена</td>
                                    <td>{{ $product->price }}</td>
                                </tr>
                                <tr>
                                    <td>Категория</td>
                                    <td>{{ $product->categoryTitle }}</td>
                                </tr>
                                <tr>
                                    <td>Тип одежды</td>
                                    <td>{{ $product->clotheTypeTitle }}</td>
                                </tr>
                                <tr>
                                    <td>Описание</td>
                                    <td>{{ $product->description }}</td>
                                </tr>
                                <tr>
                                    <td>Slug</td>
                                    <td>{{ $product->slug }}</td>
                                </tr>
                                <tr>
                                    <td>Количество</td>
                                    <td>{{ $product->count }}</td>
                                </tr>
                                <tr>
                                    <td>Изображение</td>
                                    <td>
                                        <img src="{{ $product->imageUrl }}" alt="IMG-PRODUCT">
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection
