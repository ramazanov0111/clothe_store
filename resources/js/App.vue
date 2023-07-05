<template>
    <!--  <div>-->
    <!-- Header -->
    <header class="header-v3">
        <!-- Header desktop -->
        <div class="container-menu-desktop trans-03">
            <div class="wrap-menu-desktop">
                <nav class="limiter-menu-desktop p-l-45">

                    <!-- Logo desktop -->
                    <router-link to="/" class="logo">
                        <img src="/assets/images/icons/logo-02.png" alt="IMG-LOGO">
                    </router-link>

                    <!-- Menu desktop -->
                    <div class="menu-desktop">
                        <ul class="main-menu">
                            <li>
                                <router-link to="/">Главная</router-link>
                            </li>
                            <li>
                                <router-link to="/catalog">Каталог</router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- Icon header -->
                    <div class="wrap-icon-header flex-w flex-r-m h-full">
                        <div class="flex-c-m h-full p-l-25 p-r-25 bor6">
                            <div class="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
                                 data-notify="2">
                                <i class="zmdi zmdi-shopping-cart"></i>
                            </div>
                        </div>

                        <div class="flex-c-m h-full p-l-25 p-r-25 bor6">
                            <router-link to="#"
                                         class="text-sm text-gray-700 dark:text-gray-500 underline dropdown-toggle"
                                         data-toggle="dropdown" aria-expanded="false">
                                <i class="zmdi zmdi-account"></i>
                            </router-link>
                            <ul v-if="accessToken" class="dropdown-menu text-small shadow" style="">
                                <li>
                                    <router-link class="dropdown-item" to="/account">Профиль</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/orders">Мои заказы</router-link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <a href="#" @click.prevent="logout" class="dropdown-item">Выйти</a>
                                </li>
                            </ul>
                            <ul v-else class="dropdown-menu text-small shadow" style="">
                                <li>
                                    <router-link class="dropdown-item" to="/login">Вход</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/registration">Регистрация</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        <!-- Header Mobile -->
        <div class="wrap-header-mobile">
            <!-- Logo moblie -->
            <div class="logo-mobile">
                <router-link to="/"><img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO"></router-link>
            </div>

            <!-- Icon header -->
            <div class="wrap-icon-header flex-w flex-r-m h-full m-r-15">
                <div class="flex-c-m h-full p-r-5">
                    <div class="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
                         data-notify="2">
                        <i class="zmdi zmdi-shopping-cart"></i>
                    </div>
                </div>
            </div>

            <!-- Button show menu -->
            <div class="btn-show-menu-mobile hamburger hamburger--squeeze">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
            </div>
        </div>


        <!-- Menu Mobile -->
        <div class="menu-mobile">
            <ul class="main-menu-m">
                <li>
                    <router-link to="/">Главная</router-link>
                </li>
                <li>
                    <router-link to="/catalog">Каталог</router-link>
                </li>
            </ul>
        </div>

        <!-- Modal Search -->
        <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
            <button class="flex-c-m btn-hide-modal-search trans-04">
                <i class="zmdi zmdi-close"></i>
            </button>

            <form class="container-search-header">
                <div class="wrap-search-header">
                    <input class="plh0" type="text" name="search" placeholder="Search...">

                    <button class="flex-c-m trans-04">
                        <i class="zmdi zmdi-search"></i>
                    </button>
                </div>
            </form>
        </div>
    </header>

    <!-- Корзина -->
    <div class="wrap-header-cart js-panel-cart">
        <div class="s-full js-hide-cart"></div>

        <div class="header-cart flex-col-l p-l-65 p-r-25">
            <div class="header-cart-title flex-w flex-sb-m p-b-8">
				<span class="mtext-103 cl2">
					Ваша корзина
				</span>

                <div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                    <i class="zmdi zmdi-close"></i>
                </div>
            </div>

            <div class="header-cart-content flex-w js-pscroll">
                <ul class="header-cart-wrapitem w-full">

                    <li v-for="cartProduct in cartProducts" class="header-cart-item flex-w flex-t m-b-12">
                        <div class="header-cart-item-img">
                            <img :src="cartProduct.image" alt="IMG">
                        </div>

                        <div class="header-cart-item-txt p-t-8">
                            <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                {{ cartProduct.title }}
                            </a>

                            <span class="header-cart-item-info">
								{{ cartProduct.qty }} x {{ cartProduct.price }}₽
							</span>
                        </div>
                    </li>
                </ul>

                <div class="w-full">
                    <div class="header-cart-total w-full p-tb-40">
                        Сумма: {{ total }}₽
                    </div>

                    <div class="header-cart-buttons flex-w w-full">
                        <router-link to="/cart"
                                     class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                            Показать корзину
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Слайдер категорий -->
    <section class="section-slide">
        <div class="wrap-slick1 rs2-slick1">
            <div class="slick1">

                <div class="item-slick1 bg-overlay1" style="background-image: url(/assets/images/slide-06.jpg);"
                     data-thumb="/assets/images/thumb-02.jpg" data-caption="Non-Player">
                    <div class="container h-full">
                        <div class="flex-col-c-m h-full p-t-100 p-b-60 respon5">
                            <div class="layer-slick1 animated visible-false" data-appear="rollIn" data-delay="0">
								<span class="ltext-202 txt-center cl0 respon2">
									Men New-Season
								</span>
                            </div>

                            <div class="layer-slick1 animated visible-false" data-appear="lightSpeedIn"
                                 data-delay="800">
                                <h2 class="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                                    Jackets & Coats
                                </h2>
                            </div>

                            <div class="layer-slick1 animated visible-false" data-appear="slideInUp" data-delay="1600">
                                <router-link to="/">
                                    <h3 class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        Показать
                                    </h3>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item-slick1 bg-overlay1" style="background-image: url(/assets/images/slide-07.jpg);"
                     data-thumb="/assets/images/thumb-03.jpg" data-caption="Player">
                    <div class="container h-full">
                        <div class="flex-col-c-m h-full p-t-100 p-b-60 respon5">
                            <div class="layer-slick1 animated visible-false" data-appear="rotateInDownLeft"
                                 data-delay="0">
								<span class="ltext-202 txt-center cl0 respon2">
									Men Collection 2018
								</span>
                            </div>

                            <div class="layer-slick1 animated visible-false" data-appear="rotateInUpRight"
                                 data-delay="800">
                                <h2 class="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                                    NEW SEASON
                                </h2>
                            </div>

                            <div class="layer-slick1 animated visible-false" data-appear="rotateIn" data-delay="1600">
                                <router-link to="/player" class="white">
                                    <h3 class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        Показать
                                    </h3>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wrap-slick1-dots p-lr-10"></div>
        </div>
    </section>

    <!-- Контент -->
    <router-view></router-view>

    <!-- Footer -->
    <footer class="bg3 p-t-75 p-b-32">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3 p-b-50">
                    <h4 class="stext-301 cl0 p-b-30">
                        Categories
                    </h4>

                    <ul>
                        <li class="p-b-10">
                            <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                Women
                            </a>
                        </li>

                        <li class="p-b-10">
                            <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                Men
                            </a>
                        </li>

                        <li class="p-b-10">
                            <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                Shoes
                            </a>
                        </li>

                        <li class="p-b-10">
                            <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                Watches
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-6 col-lg-3 p-b-50">
                    <h4 class="stext-301 cl0 p-b-30">
                        Help
                    </h4>

                    <ul>
                        <li class="p-b-10">
                            <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                Track Order
                            </a>
                        </li>

                        <li class="p-b-10">
                            <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                Returns
                            </a>
                        </li>

                        <li class="p-b-10">
                            <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                Shipping
                            </a>
                        </li>

                        <li class="p-b-10">
                            <a href="#" class="stext-107 cl7 hov-cl1 trans-04">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col-sm-6 col-lg-3 p-b-50">
                    <h4 class="stext-301 cl0 p-b-30">
                        GET IN TOUCH
                    </h4>

                    <p class="stext-107 cl7 size-201">
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us
                        on (+1) 96
                        716 6879
                    </p>

                    <div class="p-t-27">
                        <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <i class="fa fa-facebook"></i>
                        </a>

                        <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <i class="fa fa-instagram"></i>
                        </a>

                        <a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                            <i class="fa fa-pinterest-p"></i>
                        </a>
                    </div>
                </div>

                <div class="col-sm-6 col-lg-3 p-b-50">
                    <h4 class="stext-301 cl0 p-b-30">
                        Newsletter
                    </h4>

                    <form>
                        <div class="wrap-input1 w-full p-b-4">
                            <input class="input1 bg-none plh1 stext-107 cl7" type="text" name="email"
                                   placeholder="email@example.com">
                            <div class="focus-input1 trans-04"></div>
                        </div>

                        <div class="p-t-18">
                            <button class="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="p-t-40">
                <div class="flex-c-m flex-w p-b-18">
                    <a href="#" class="m-all-1">
                        <img src="/assets/images/icons/icon-pay-01.png" alt="ICON-PAY">
                    </a>

                    <a href="#" class="m-all-1">
                        <img src="/assets/images/icons/icon-pay-02.png" alt="ICON-PAY">
                    </a>

                    <a href="#" class="m-all-1">
                        <img src="/assets/images/icons/icon-pay-03.png" alt="ICON-PAY">
                    </a>

                    <a href="#" class="m-all-1">
                        <img src="/assets/images/icons/icon-pay-04.png" alt="ICON-PAY">
                    </a>

                    <a href="#" class="m-all-1">
                        <img src="/assets/images/icons/icon-pay-05.png" alt="ICON-PAY">
                    </a>
                </div>

            </div>
        </div>
    </footer>

    <!-- Стрелка наверх -->
    <div class="btn-back-to-top" id="myBtn">
		<span class="symbol-btn-back-to-top">
			<i class="zmdi zmdi-chevron-up"></i>
		</span>
    </div>

    <!--  </div>-->
</template>

<script>

import api from "./api";
import HeaderComponent from './components/Header'

export default {
    name: 'App',
    components: {HeaderComponent},

    mounted() {
        $(document).trigger('changed')
        this.getCartProducts()
        this.getAccessToken()
    },
    updated() {
        this.getAccessToken()
        this.getAuthUser()
    },

    data() {
        return {
            cartProducts: [],
            total: 0,
            user: null,
            accessToken: null
        }
    },

    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },
        async getAuthUser() {
            await api.post('/api/auth/me')
                .then(res => {
                    this.user = res.data
                    localStorage.setItem('user', JSON.stringify(res.data))
                })
        },
        logout() {
            localStorage.removeItem('access_token');
            window.location.href = '/';
        },
        getCartProducts() {
            this.cartProducts = JSON.parse(localStorage.getItem('cart'))
            if (this.cartProducts) {
                this.cartProducts.forEach(product => {
                    this.total += Number(product.price * product.qty)
                })
            }
        },
    },
}

$(document).ready(function () {
    $('body').on('click', '.number-minus, .number-plus', function () {
        var $row = $(this).closest('.number');
        var $input = $row.find('.number-text');
        var step = $row.data('step');
        var val = parseFloat($input.val());
        if ($(this).hasClass('number-minus')) {
            val -= step;
        } else {
            val += step;
        }
        $input.val(val);
        $input.change();
        return false;
    });

    $('body').on('change', '.number-text', function () {
        var $input = $(this);
        var $row = $input.closest('.number');
        var step = $row.data('step');
        var min = parseInt($row.data('min'));
        var max = parseInt($row.data('max'));
        var val = parseFloat($input.val());
        if (isNaN(val)) {
            val = step;
        } else if (min && val < min) {
            val = min;
        } else if (max && val > max) {
            val = max;
        }
        $input.val(val);
    });
});
</script>

<style>

i.zmdi-account {
    font-size: 24px;
}

</style>
