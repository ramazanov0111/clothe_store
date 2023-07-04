<template>
    <!-- breadcrumb -->
    <div class="container">
        <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <router-link to="/" class="stext-109 cl8 hov-cl1 trans-04">
                Главная
                <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
            </router-link>

            <span class="stext-109 cl4">
				Мои заказы
			</span>
        </div>
    </div>


    <!-- Shoping Cart -->
    <form class="bg0 p-t-75 p-b-85">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-xl-7 m-lr-a uto m-b-50">
                    <div class="m-l-25 m-r--38 m-lr-0-xl">
                        <div class="wrap-table-shopping-cart">
                            <table class="table-shopping-cart">
                                <tr class="table_head">
                                    <th class="column-1">Дата заказа</th>
                                    <th class="column-2">Дата доставки</th>
                                    <th class="column-3">Статус оплаты</th>
                                    <th class="column-4">Статус заказа</th>
                                    <th class="column-5">Сумма</th>
                                </tr>

                                <tr v-for="order in orders" class="table_row">
                                    <td class="column-1">
                                        {{ order.order_date }}
                                    </td>
                                    <td class="column-2">
<!--                                        <router-link :to="{name: 'product.show', params:{slug: product.slug}}"-->
<!--                                                     class="stext-106 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">-->
                                            {{ order.delivery_date }}
<!--                                        </router-link>-->
                                    </td>
                                    <td class="column-3">
                                        {{ order.payment_status }}
                                    </td>
                                    <td class="column-4">
                                       {{ order.status }}
                                    </td>
                                    <td class="column-5">{{ order.total }}₽</td>
                                </tr>

                            </table>
                        </div>

                    </div>
                </div>

                <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                    <div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                        <h4 class="mtext-109 cl2 p-b-30">
                            Сумма заказов
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

                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import api from "../../api";

export default {
    name: "Index",
    mounted() {
        $(document).trigger('changed')
        this.getUser()
        this.userOrders()
    },

    data() {
        return {
            orders: [],
            totalPrice: 0,
            user: null,
        }
    },

    methods: {
        async getUser() {
            this.user = localStorage.getItem('user');
        },
        async userOrders() {
            await api.get('/api/auth/orders')
                .then(res => {
                    this.orders = res.data.data
                    // localStorage.setItem('user', res.data)
                })
        },
    },
}
</script>

<style scoped>

</style>
