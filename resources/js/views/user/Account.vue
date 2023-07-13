<template>

    <div class="container-fluid account-page">
        <h2 class="mb-3">Анкета пользователя</h2>
    </div>

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
    </div>

    <div class="bg0 p-t-75 p-b-85">
        <div class="container">
            <div class="col-md-12">
                <h5>Ваши данные</h5>
                <div class="user-panel mb-3 mt-3 p-3">

                    <div v-if="user" class="col-md-12 mb-3">

                        <div class="row mb-3">
                            <label for="firstname" class="col-md-4 col-form-label text-md-end">Имя</label>

                            <div class="col-md-6">
                                <input id="firstname" v-model="firstname" type="text" class="form-control"
                                       name="firstname" required autocomplete="firstname" autofocus>
                                <span>{{ user.firstname }}</span>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="lastname" class="col-md-4 col-form-label text-md-end">Фамилия</label>

                            <div class="col-md-6">
                                <input id="lastname" v-model="lastname" type="text" class="form-control"
                                       name="lastname" autocomplete="lastname" autofocus>
                                <span>{{ user.lastname }}</span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">E-mail</label>

                            <div class="col-md-6">
                                <input id="email" v-model="email" type="email" class="form-control"
                                       name="email" required autocomplete="email" autofocus>
                                <span>{{ user.email }}</span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">Пароль</label>

                            <div class="col-md-6">
                                <input id="password" v-model="password" type="password" class="form-control"
                                       name="password" required autocomplete="password" autofocus>
                                <span>{{ user.password }}</span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="address" class="col-md-4 col-form-label text-md-end">Адрес</label>

                            <div class="col-md-6">
                                <input id="address" v-model="address" type="text" class="form-control"
                                       name="address" required autocomplete="address" autofocus>
                                <span>{{ user.address }}</span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="phone" class="col-md-4 col-form-label text-md-end">Телефон</label>

                            <div class="col-md-6">
                                <input id="phone" v-model="phone" type="tel" class="form-control"
                                       name="phone" required autocomplete="phone" autofocus>
                                <span>{{ user.phone }}</span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="gender" class="col-md-4 col-form-label text-md-end">Пол</label>

                            <div class="col-md-6">
                                <select v-model="gender" class="select2-container--default" name="gender">
                                    <option disabled value="">Выберите пол</option>
                                    <option v-for="(key, value) in genders"
                                            :value="value"
                                            :selected="user.gender === value">
                                        {{ key }}
                                    </option>
                                </select>
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
        // $(document).trigger('changed')
        this.getUser()
        this.getGenders()
        this.setUserData()
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
            genders: null,
        }
    },

    methods: {
        async getUser() {
            this.user = JSON.parse(localStorage.getItem('user'));
        },
        setUserData() {
            if (this.user) {
                this.firstname = this.user.firstname;
                this.lastname = this.user.lastname;
                this.email = this.user.email;
                this.phone = this.user.phone;
                this.address = this.user.address;
            }
        },
        getGenders() {
            this.axios.get('/api/genders')
                .then(res => {
                    this.genders = res.data
                })
                .finally(v => {
                    $(document).trigger('changed')
                })
        },
        store() {
            api.post('/api/users/update', {
                firstname: this.firstname,
                email: this.email,
                password: this.password,
                lastname: this.lastname,
                address: this.address,
                phone: this.phone,
                gender: this.gender,
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
    border: 1px solid rgba(65, 61, 61, 0.44);
    border-radius: 5px;
}

.account-page {
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
