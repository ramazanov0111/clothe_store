<template>
    <!-- Каталог товаров -->
    <section class="bg0 p-t-23 p-b-130">
        <div class="container">
            <div class="p-b-10">
                <h3 class="ltext-103 cl5 m-tb-10">
                    Product Overview
                </h3>
            </div>

            <div class="flex-w flex-sb-m p-b-52">
                <!-- Search product -->
                <div class="dis-none panel-search w-full p-t-10 p-b-15">
                    <div class="bor8 dis-flex p-l-15">
                        <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                            <i class="zmdi zmdi-search"></i>
                        </button>

                        <input class="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product"
                               placeholder="Search">
                    </div>
                </div>

                <!-- Filter -->
                <div class="show-filter panel-filter w-full p-t-10">
                    <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                        <div class="filter-col1 p-r-15 p-b-27">
                            <div class="mtext-102 cl2 p-b-15">
                                Сортировать по
                            </div>

                            <ul>
                                <li class="p-b-6">
                                    <a href="#" class="filter-link stext-106 trans-04">
                                        По умолчанию
                                    </a>
                                </li>

                                <li class="p-b-6">
                                    <a href="#" class="filter-link stext-106 trans-04">
                                        Цена: по возрастанию
                                    </a>
                                </li>

                                <li class="p-b-6">
                                    <a href="#" class="filter-link stext-106 trans-04">
                                        Цена: по убыванию
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="filter-col2 p-r-15 p-b-27">
                            <div class="mtext-102 cl2 p-b-15">
                                Цена
                            </div>
                            <input type="number">
                            <input type="number">

                        </div>

                        <div class="filter-col4 p-b-27">
                            <div class="mtext-102 cl2 p-b-15">
                                Теги
                            </div>

                            <div class="flex-w p-t-4 m-r--5">
                                <a v-for="tag in filterList.tags" href="#"
                                   class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                    {{ tag.title }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row isotope-grid" style="height: auto">

                <div v-for="product in products"
                     class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men d-flex align-items-stretch">
                    <!-- Block2 -->
                    <div class="block2">
                        <div class="block2-pic hov-img0">
                            <img :src="product.imageUrl" alt="IMG-PRODUCT" style="height: 300px; width:270px">

                            <a href="#"
                               class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                               @click="getProduct(product.slug)">
                                Посмотреть
                            </a>
                        </div>

                        <div class="block2-txt flex-w flex-t p-t-14">
                            <div class="block2-txt-child1 flex-col-l">
                                <router-link :to="{name: 'product.show', params:{slug: product.slug}}" class="stext-106 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    {{ product.title }}
                                </router-link>

                                <span class="stext-106 cl3">
									{{ product.price }} руб.
								</span>
                            </div>

                            <div class="block2-txt-child2 flex-r p-t-3">
                                <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2" style="margin-right: 10px;">
                                    <img class="icon-heart1 dis-block trans-04"
                                         src="/assets/images/icons/icons8-heart-24-white.png"
                                         alt="ICON">
                                    <img class="icon-heart2 dis-block trans-04 ab-t-l"
                                         src="/assets/images/icons/icons8-heart-24.png"
                                         alt="ICON">
                                </a>
                                <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                                   @click.prevent="addToCart(product.id, true)">
                                    <img class="icon-heart1 dis-block trans-04"
                                         src="/assets/images/icons/icon-shopping-cart-1.png"
                                         alt="ICON">
                                    <img class="icon-heart2 dis-block trans-04 ab-t-l"
                                         src="/assets/images/icons/icon-shopping-cart-2.png"
                                         alt="ICON">
                                </a>
                            </div>
                        </div>

                        <!-- Modal1 -->
                        <div class="wrap-modal1 js-modal1 p-t-60 p-b-20">
                            <div class="overlay-modal1 js-hide-modal1"></div>

                            <div class="container">
                                <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                                    <button class="how-pos3 hov3 trans-04 js-hide-modal1">
                                        <img src="/assets/images/icons/icon-close.png" alt="CLOSE">
                                    </button>

                                    <div class="row">
                                        <div class="col-md-6 col-lg-7 p-b-30">
                                            <div class="p-l-25 p-r-30 p-lr-0-lg">
                                                <div class="wrap-slick3 flex-sb flex-w">
                                                    <div class="wrap-slick3-dots"></div>
                                                    <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                                    <div class="slick3 gallery-lb">

                                                        <div class="item-slick3" :data-thumb="currentProduct.imageUrl">
                                                            <div class="wrap-pic-w pos-relative">
                                                                <img :src="currentProduct.imageUrl" alt="IMG-PRODUCT">

                                                                <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                                   :href="currentProduct.imageUrl">
                                                                    <i class="fa fa-expand"></i>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div v-for="image in currentProduct.gallery" class="item-slick3"
                                                             :data-thumb="image.url">
                                                            <div class="wrap-pic-w pos-relative">
                                                                <img :src="image.url" alt="IMG-PRODUCT">

                                                                <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                                   :href="image.url">
                                                                    <i class="fa fa-expand"></i>
                                                                </a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-5 p-b-30">
                                            <div class="p-r-50 p-t-5 p-lr-0-lg">
                                                <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                                                    {{ currentProduct.title }}
                                                </h4>

                                                <span class="mtext-106 cl2">
                                                    {{ currentProduct.price }} руб.
                                                </span>

                                                <p class="stext-102 cl3 p-t-23">
                                                    {{ currentProduct.description }}
                                                </p>

                                                <!--  -->
                                                <div class="p-t-33">
                                                    <div class="flex-w flex-r-m p-b-10">
                                                        <div class="size-203 flex-c-m respon6">
                                                            Размер
                                                        </div>

                                                        <div class="size-204 respon6-next">
                                                            <div class="rs1-select2 bor8 bg0">
                                                                <select class="js-select2" name="time">
                                                                    <option>Выберите размер</option>
                                                                    <option v-for="size in sizes" :value="size.code">
                                                                        {{ size.name }}
                                                                    </option>
                                                                </select>
                                                                <div class="dropDownSelect2"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="flex-w flex-r-m p-b-10">
                                                        <div class="size-203 flex-c-m respon6">
                                                            Цвет
                                                        </div>

                                                        <div class="size-204 respon6-next">
                                                            <div class="rs1-select2 bor8 bg0">
                                                                <select class="js-select2" name="time">
                                                                    <option>Выберите цвет</option>
                                                                    <option v-for="color in colors" :value="color.code">
                                                                        {{ color.name }}
                                                                    </option>
                                                                </select>
                                                                <div class="dropDownSelect2"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="flex-w flex-r-m p-b-10">
                                                        <div class="size-204 flex-w flex-m respon6-next">
                                                            <div class="wrap-num-product flex-w m-r-20 m-tb-10">

<!--                                                                <div-->
<!--                                                                    class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">-->
<!--                                                                    <i class="fs-16 zmdi zmdi-minus"></i>-->
<!--                                                                </div>-->
<!--                                                                <input class="mtext-104 cl3 txt-center num-product"-->
<!--                                                                       type="number" name="num-product" value="1"/>-->
<!--                                                                <div-->
<!--                                                                    class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">-->
<!--                                                                    <i class="fs-16 zmdi zmdi-plus"></i>-->
<!--                                                                </div>-->

                                                                <div class="number" data-step="1" data-min="1" data-max="100">
                                                                    <input class="number-text" type="text" name="count" value="1">
                                                                    <a href="#" class="number-minus">−</a>
                                                                    <a href="#" class="number-plus">+</a>
                                                                </div>

                                                            </div>

                                                            <button @click.prevent="addToCart(currentProduct.id, false)"
                                                                    class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                                В корзину
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!--  -->
                                                <div class="flex-w flex-m p-l-100 p-t-40 respon7">
                                                    <div class="flex-m bor9 p-r-10 m-r-11">
                                                        <a href="#"
                                                           class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                                                           data-tooltip="Add to Wishlist">
                                                            <i class="zmdi zmdi-favorite"></i>
                                                        </a>
                                                    </div>

                                                    <a href="#"
                                                       class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                       data-tooltip="Facebook">
                                                        <i class="fa fa-facebook"></i>
                                                    </a>

                                                    <a href="#"
                                                       class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                       data-tooltip="Twitter">
                                                        <i class="fa fa-twitter"></i>
                                                    </a>

                                                    <a href="#"
                                                       class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                       data-tooltip="Google Plus">
                                                        <i class="fa fa-google-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <!-- Pagination -->
            <div class="flex-c-m flex-w w-full p-t-38">
                <a href="#" class="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1">
                    1
                </a>

                <a href="#" class="flex-c-m how-pagination1 trans-04 m-all-7">
                    2
                </a>
            </div>
        </div>
    </section>

</template>

<script>

export default {
    name: "Index",
    mounted() {
        $(document).trigger('changed')
        this.getProducts()
        this.getFilterList()
        this.getColors()
        this.getSizes()
    },

    data() {
        return {
            products: [],
            colors: [],
            sizes: [],
            currentProduct: [],
            filterList: [],
            num: null,
        }
    },

    methods: {
        addToCart(id, isSingle) {

            let qty = isSingle ? 1 : $('.number-text' ).val();
            let cart = localStorage.getItem('cart');
            $('.number-text' ).val(1);

            let newProduct = [
                {
                    'id': id,
                    'qty': qty,
                }
            ];

            if (!cart) {
                localStorage.setItem('cart', JSON.stringify(newProduct));
            } else {
                cart = JSON.parse(cart)
                cart.forEach(productInCart => {
                    if (productInCart.id === id) {
                        productInCart.qty = Number(productInCart.qty) + Number(qty)
                        newProduct = null
                    }
                })
                Array.prototype.push.apply(cart, newProduct)
                localStorage.setItem('cart', JSON.stringify(cart));
            }

        },

        getProducts() {
            this.axios.get('/api/products')
                .then(res => {
                    this.products = res.data.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },
        getColors() {
            this.axios.get('/api/colors')
                .then(res => {
                    this.colors = res.data.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },
        getSizes() {
            this.axios.get('/api/sizes')
                .then(res => {
                    this.sizes = res.data.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },
        getProduct(slug) {
            this.axios.get(`/api/products/${slug}`)
                .then(res => {
                    this.currentProduct = res.data.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },
        getFilterList() {
            this.axios.get('/api/products/filters')
                .then(res => {
                    this.filterList = res.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },
    },
}
</script>

<style scoped>

</style>
