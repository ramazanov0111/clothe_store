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
                            <div class="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 js-show-cart">
                                <i class="zmdi zmdi-shopping-cart"></i>
                            </div>
                        </div>

                        <div class="flex-c-m h-full p-l-25 p-r-25 bor6">
                            <router-link to="#"
                                         class="text-sm text-gray-700 dark:text-gray-500 underline dropdown-toggle"
                                         data-toggle="dropdown" aria-expanded="false">
                                <i class="zmdi zmdi-account"></i>
                            </router-link>
                            <ul v-if="user" class="dropdown-menu text-small shadow" style="">
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
            <div class="wrap-icon-header flex-w flex-r-m h-full m-r-10">
                <div class="flex-c-m h-full p-r-5">
                    <div class="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-cart">
                        <i class="zmdi zmdi-shopping-cart"></i>
                    </div>
                </div>
                <div class="flex-c-m h-full p-l-15 p-r-5 bor5">
                    <router-link to="#"
                                 class="text-sm text-gray-700 dark:text-gray-500 underline dropdown-toggle"
                                 data-toggle="dropdown" aria-expanded="false">
                        <i class="zmdi zmdi-account"></i>
                    </router-link>
                    <ul v-if="user" class="dropdown-menu text-small shadow" style="">
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
                <div class="flex-c-m h-full p-l-20">
                    <router-link to="#" class="text-sm text-gray-700 dark:text-gray-500 underline"
                                 data-toggle="dropdown" aria-expanded="false">
                    <span class="hamburger-box">
                         <span class="hamburger-inner"></span>
                    </span>
                    </router-link>
                    <ul class="dropdown-menu submenu">
                        <li>
                            <router-link class="dropdown-item" to="/">Главная</router-link>
                        </li>
                        <li>
                            <router-link class="dropdown-item" to="/catalog">Каталог</router-link>
                        </li>
                    </ul>
                </div>
            </div>
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
    <SliderComponent v-if="!pages.includes(this.$route.name)"></SliderComponent>

    <!-- Контент -->
    <div id="scroll-content" class="pt-5">
        <router-view></router-view>
    </div>

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
import SliderComponent from './components/Slider'

export default {
    name: 'App',
    components: {SliderComponent},

    mounted() {
        $(document).trigger('changed')
        // this.getCartProducts()
        this.getAccessToken()
        this.getAuthUser()
    },

    updated() {
        this.getAccessToken()
        // this.getAuthUser()
        this.getCartProducts()
    },

    data() {
        return {
            pages: ['login', 'registration', 'orders', 'account'],
            cartProducts: [],
            total: 0,
            user: null,
            accessToken: null,
        }
    },

    methods: {

        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },
        async getAuthUser() {
            if (this.accessToken) {
                await api.post('/api/auth/me')
                    .then(res => {
                        this.user = res.data
                        localStorage.setItem('user', JSON.stringify(res.data))
                    })
            }
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

$(document).on('click', 'a#scroll', function () {
    let element = document.getElementById("scroll-content");

    element.scrollIntoView({behavior: "smooth", block: "nearest"});
});

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

// $('.scrollto a .scroll').on('click', function() {
//
//     let element = document.getElementById("scroll-content");
//
//
//     console.log(element, href);
//     // element.scrollIntoView();
//
//
//     return false;
// });


</script>

<style>

i.zmdi-account {
    font-size: 24px;
}

.submenu {
    background: #273037;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    width: 100%;
    height: auto;
    font-size: 18px;
    /*opacity: 0;*/
    transform: scaleY(0);
    transform-origin: 0 0;
    transition: .5s ease-in-out;
    border: 1px solid #333;
}

.submenu a {
    color: white;
    text-align: left;
    padding: 12px 15px;
    /*font-size: 13px;*/
    border-bottom: 1px solid rgba(255, 255, 255, .1);
}

.submenu li:last-child a {
    border-bottom: none;
}

li:hover .submenu {
    opacity: 1;
    transform: scaleY(1);
}

/*---------------------------------------------*/
@media (max-width: 992px) {
    i.zmdi-account {
        color: #0b0b0b;
        font-size: 24px;
    }

    .hamburger-box {
        height: 20px;
    }
}

</style>
