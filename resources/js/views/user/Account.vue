<template>
    <!-- breadcrumb -->
    <div class="container">
        <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <router-link to="/" class="stext-109 cl8 hov-cl1 trans-04">
                Главная
                <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
            </router-link>
            <span class="stext-109 cl4">
				Профиль пользователя
			</span>
        </div>
        <div class="row justify-content-center mt-5">
            <div class="col-md-12">
                <h5>Ваши данные</h5>
                <div class="user-panel mb-3 mt-3 p-3">

                    <div v-if="user" class="col-md-12 mb-3">

                        <div class="row mb-3">
                            <label for="firstname" class="col-md-4 col-form-label text-md-end">Имя</label>

                            <div class="col-md-6">
                                <input id="firstname" v-model="firstname" type="text"
                                       :class="{ 'is-invalid': submitted && !firstname }" class="input_box"
                                       name="firstname" required autocomplete="firstname" autofocus>
                                <span>{{ user.firstname }}</span>

                                <span v-show="submitted && !firstname" class="invalid-feedback" role="alert">
                                    <strong>Имя обязательно</strong>
                                </span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="lastname" class="col-md-4 col-form-label text-md-end">Фамилия</label>

                            <div class="col-md-6">
                                <input id="lastname" v-model="lastname" type="text" class="input_box"
                                       name="lastname" autocomplete="lastname" autofocus>
                                <span>{{ user.lastname }}</span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">Пароль</label>

                            <div class="col-md-6">
                                <input id="password" v-model="password" type="password"
                                       :class="{ 'is-invalid': submitted && !password }" class="input_box"
                                       name="password" required autocomplete="password" autofocus>

                                <span v-show="submitted && !password" class="invalid-feedback" role="alert">
                                    <strong>Пароль обязателен</strong>
                                </span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">E-mail</label>

                            <div class="col-md-6">
                                <input id="email" v-model="email" type="email"
                                       :class="{ 'is-invalid': submitted && !email }" class="input_box"
                                       name="email" required autocomplete="email" autofocus>
                                <span>{{ user.email }}</span>

                                <span v-show="submitted && !email" class="invalid-feedback" role="alert">
                                    <strong>E-mail обязателен</strong>
                                </span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="address" class="col-md-4 col-form-label text-md-end">Адрес</label>

                            <div class="col-md-6">
                                <input id="address" v-model="address" type="text"
                                       :class="{ 'is-invalid': submitted && !address }" class="input_box"
                                       name="address" required autocomplete="address" autofocus>
                                <span>{{ user.address }}</span>

                                <span v-show="submitted && !address" class="invalid-feedback" role="alert">
                                    <strong>Адрес обязателен</strong>
                                </span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="phone" class="col-md-4 col-form-label text-md-end">Телефон</label>

                            <div class="col-md-6">
                                <input id="phone" v-model="phone" type="tel"
                                       :class="{ 'is-invalid': submitted && !phone }" class="input_box"
                                       name="phone" required autocomplete="phone" autofocus>
                                <span>{{ user.phone }}</span>

                                <span v-show="submitted && !phone" class="invalid-feedback" role="alert">
                                    <strong>Телефон обязателен</strong>
                                </span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="gender" class="col-md-4 col-form-label text-md-end">Пол</label>

                            <div class="col-md-6">
                                <input id="gender" v-model="gender" type="text"
                                       class="input_box" name="gender" autofocus>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <input @click.prevent="store" type="submit" class="btn btn-primary" value="Сохранить">
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
    name: "Account",

    mounted() {
        $(document).trigger('changed')
        this.getUser()
    },

    data() {
        return {
            user: null,
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            address: null,
            phone: null,
            gender: null,
            submitted: false,
        }
    },

    methods: {
        async getUser() {
            this.user = JSON.parse(localStorage.getItem('user'));
        },
        store() {
            axios.post('/api/users', {
                firstname: this.firstname,
                email: this.email,
                password: this.password,
                // password_confirmation: this.password_confirmation
            })
                .then(res => {
                    console.log(res);
                })
        }
    },
}
</script>

<style scoped>

.input_box {
    border: 1px solid #0707076F;
    border-radius: 3px;
    width: 100%;
}

.user-panel {
    border: 1px solid #0707076F;
    border-radius: 3px;
}

</style>
