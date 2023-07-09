<template>
    <!-- breadcrumb -->
    <div class="container">
        <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <router-link to="/" class="stext-109 cl8 hov-cl1 trans-04">
                Главная
                <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
            </router-link>

            <span class="stext-109 cl4">
				Корзина товаров
			</span>
        </div>
    </div>


    <!-- Shoping Cart -->
    <form class="bg0 p-t-75 p-b-85">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-7 col-lg-8 user-info">
                    <h4 class="mb-3">Информация о пользователе</h4>
                    <div class="row g-3">
                        <div class="col-8">
                            <label for="firstname" class="form-label">Имя</label>
                            <input type="text" v-model="firstname" class="form-control" id="firstname" placeholder="Имя"
                                   required="">
                            <div class="invalid-feedback">
                                Valid firstname is required.
                            </div>
                        </div>

                        <div class="col-8">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" v-model="email" class="form-control" id="email"
                                   placeholder="you@example.com" required="">
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div class="col-8">
                            <label for="address" class="form-label">Адрес</label>
                            <input type="text" v-model="address" class="form-control" id="address"
                                   placeholder="1234 Main St" required="">
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div class="col-8">
                            <label for="phone" class="form-label">Телефон</label>
                            <input type="text" v-model="phone" class="form-control" id="phone"
                                   placeholder="+7(***)-**-**" required="">
                        </div>
                    </div>
                    <h5 class="error mt-3 mb-3" v-if="errorMessage">
                        {{ errorMessage }}
                    </h5>
                    <hr class="col-8 my-4">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10 col-xl-7 m-lr-a uto m-b-50">
                    <div class="m-l-25 m-r--38 m-lr-0-xl">
                        <div class="wrap-table-shopping-cart">
                            <table class="table-shopping-cart">
                                <tr class="table_head">
                                    <th class="column-1">Товар</th>
                                    <th class="column-2"></th>
                                    <th class="column-3">Цена</th>
                                    <th class="column-4">Кол-во</th>
                                    <th class="column-5">Сумма</th>
                                </tr>

                                <tr v-for="product in cartProducts" class="table_row">
                                    <td class="column-1">
                                        <div class="how-itemcart1">
                                            <router-link :to="{name: 'product.show', params:{slug: product.slug}}"
                                                         class="stext-106 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                <img :src="product.image" alt="IMG">
                                            </router-link>
                                        </div>
                                    </td>
                                    <td class="column-2">
                                        <router-link :to="{name: 'product.show', params:{slug: product.slug}}"
                                                     class="stext-106 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            {{ product.title }}
                                        </router-link>
                                    </td>
                                    <td class="column-3">{{ product.price }}₽</td>
                                    <td class="column-4">
                                        <div class="wrap-num-product flex-w m-l-auto m-r-0">
                                            <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                <i @click="minusQty(product)" class="fs-16 zmdi zmdi-minus"></i>
                                            </div>

                                            <input id="num-product{{ product.id }}"
                                                   class="mtext-104 cl3 txt-center num-product" type="number"
                                                   name="num-product1" :value="product.qty">

                                            <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                <i @click="plusQty(product)" class="fs-16 zmdi zmdi-plus"></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="column-5">{{ product.qty * product.price }}₽</td>
                                </tr>

                            </table>
                        </div>

                        <!--                        <div class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">-->
                        <!--                            <div class="flex-w flex-m m-r-20 m-tb-5">-->
                        <!--                                <input class="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text" name="coupon" placeholder="Coupon Code">-->

                        <!--                                <div class="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">-->
                        <!--                                    Apply coupon-->
                        <!--                                </div>-->
                        <!--                            </div>-->

                        <!--                            <div class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">-->
                        <!--                                Update Cart-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                    </div>
                </div>

                <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                    <div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                        <h4 class="mtext-109 cl2 p-b-30">
                            Итоги корзины
                        </h4>

                        <div class="flex-w flex-t bor12 p-b-13">
                            <div class="size-208">
								<span class="stext-110 cl2">
									Сумма товаров:
								</span>
                            </div>

                            <div class="size-209">
								<span class="mtext-110 cl2">
									{{ totalPrice }} ₽
								</span>
                            </div>
                        </div>

                        <div class="flex-w flex-t bor12 p-t-15 p-b-30">
                            <div class="size-208 w-full-ssm">
								<span class="stext-110 cl2">
									Доставка:
								</span>
                            </div>

                            <div class="size-209 p-r-18 p-r-0-sm w-full-ssm">
                                <p class="stext-111 cl6 p-t-2">
                                    There are no shipping methods available. Please double check your address, or
                                    contact us if you need any help.
                                </p>

                                <div class="p-t-15">
									<span class="stext-112 cl8">
										Calculate Shipping
									</span>

                                    <div class="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                                        <select class="js-select2" name="time">
                                            <option>Select a country...</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                        </select>
                                        <div class="dropDownSelect2"></div>
                                    </div>

                                    <div class="bor8 bg0 m-b-12">
                                        <input class="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="state"
                                               placeholder="Город/Населенный пункт">
                                    </div>

                                    <div class="bor8 bg0 m-b-22">
                                        <input class="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="postcode"
                                               placeholder="Почтовый индекс">
                                    </div>

                                    <div class="flex-w">
                                        <div
                                            class="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                                            Обновить Итог
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="flex-w flex-t p-t-27 p-b-33">
                            <div class="size-208">
								<span class="mtext-101 cl2">
									Итого:
								</span>
                            </div>

                            <div class="size-209 p-t-1">
								<span class="mtext-110 cl2">
									{{ totalPrice }} ₽
								</span>
                            </div>
                        </div>

                        <button @click.prevent="storeOrder()"
                                class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                            Оформить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "Cart",
    mounted() {
        // $(document).trigger('changed')
        this.getCartProducts()
        this.getUser()
        this.setUserData()
    },

    data() {
        return {
            user: null,
            cartProducts: [],
            products: [],
            totalPrice: 0,
            firstname: '',
            email: '',
            phone: '',
            address: '',
            errorMessage: null,
        }
    },

    methods: {
        async getUser() {
            if (localStorage.getItem('access_token')) {
                this.user = JSON.parse(localStorage.getItem('user'));
            }
        },

        setUserData() {
            if (this.user) {
                this.firstname = this.user.firstname;
                this.email = this.user.email;
                this.phone = this.user.phone;
                this.address = this.user.address;
            }
        },

        storeOrder() {
            let authorized = !!this.user;
            this.axios.post('/api/orders', {
                'products': this.cartProducts,
                'firstname': this.firstname,
                'email': this.email,
                'phone': this.phone,
                'address': this.address,
                'total_price': this.totalPrice,
                'authorized': authorized,
            })
                .then((res) => {
                    if (res.data.error) {
                        this.errorMessage = res.data.error;
                    }
                    if (res.data.message) {
                        this.errorMessage = res.data.message;
                    }
                    if (res.data.success) {
                        if (this.user === null) {
                            localStorage.setItem('access_token', res.data.access_token)
                        }
                        window.location.href = '/orders';
                    }
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },

        getCartProducts() {
            this.cartProducts = JSON.parse(localStorage.getItem('cart'))
            this.cartProducts.forEach(product => {
                this.totalPrice += Number(product.price * product.qty)
            })
        },
        minusQty(product) {
            if (product.qty === 1) {
                this.removeProduct(product.id)
            } else {
                product.qty--
            }
            this.updateCart()
        },
        plusQty(product) {
            product.qty++
            this.updateCart()
        },
        removeProduct(id) {
            this.cartProducts = this.cartProducts.filter(product => {
                return product.id !== id
            })
            this.updateCart()
        },
        updateCart() {
            localStorage.setItem('cart', JSON.stringify(this.cartProducts))
            this.totalPrice = 0;
            this.cartProducts.forEach(product => {
                this.totalPrice += Number(product.price * product.qty)
            })
        },
    },
}
</script>

<style scoped>

.error {
    color: #932828;
}

</style>
