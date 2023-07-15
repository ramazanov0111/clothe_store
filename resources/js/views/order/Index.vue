<template>

    <div class="container-fluid order-page">
        <h2 class="mb-3">Ваши заказы</h2>
    </div>

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
    <div class="bg0 p-t-75 p-b-85">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-xl-7 m-lr-a uto m-b-50">
                    <div class="m-l-25 m-r--38 m-lr-0-xl">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Дата заказа</th>
                                <th>Дата доставки</th>
                                <th>Статус оплаты</th>
                                <th>Статус заказа</th>
                                <th>Сумма</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="order in orders">
                                <td>
                                    {{ order.order_date }}
                                </td>
                                <td>
                                    {{ order.delivery_date }}
                                </td>
                                <td>
                                    {{ order.payment_status }}
                                </td>
                                <td>
                                    {{ order.status }}
                                </td>
                                <td>{{ order.total }}₽</td>
                            </tr>
                            </tbody>
                        </table>
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
    </div>
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
                    this.orders.filter(order => {
                        this.totalPrice += order.total
                    })
                })
        },
    },
}
</script>

<style scoped>

.table {
    width: 100%;
    border: none;
    margin-bottom: 20px;
}

.table thead th {
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    background: #d8d8d8;
    font-size: 14px;
}

.table thead tr th:first-child {
    border-radius: 8px 0 0 8px;
}

.table thead tr th:last-child {
    border-radius: 0 8px 8px 0;
}

.table tbody td {
    text-align: left;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
}

.table tbody tr:nth-child(even) {
    background: #f3f3f3;
}

.table tbody tr td:first-child {
    border-radius: 8px 0 0 8px;
}

.table tbody tr td:last-child {
    border-radius: 0 8px 8px 0;
}

.order-page {
    -ms-flex-align: center;
    align-items: center;
    /*background-color: #e9ecef;*/
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    /*height: 100vh;*/
    -ms-flex-pack: center;
    justify-content: center;
    margin: 30px 0 0;
    padding-top: 30px;
}

</style>
