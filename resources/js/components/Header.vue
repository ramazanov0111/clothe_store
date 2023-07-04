<template>
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
                                    <router-link class="dropdown-item" to="/">Выйти</router-link>
                                </li>
                            </ul>
                            <ul v-else class="dropdown-menu text-small shadow" style="">
                                <li>
                                    <router-link class="dropdown-item" to="/login">Войти</router-link>
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
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>
