<template>
    <div class="container-fluid register-page">
        <h2 class="mb-3">Регистрация</h2>
        <div class="w-25">
            <label class="mt-3" for="firstname">Firstname</label>
            <input type="text" v-model="firstname" name="firstname" class="form-control mb-3"
                   :class="{ 'is-invalid': submitted && !firstname }"/>
            <div v-show="submitted && !firstname" class="invalid-feedback">Firstname is required</div>
            <label for="email">E-mail</label>
            <input type="text" v-model="email" name="email" class="form-control mb-3"
                   :class="{ 'is-invalid': submitted && !email }"/>
            <div v-show="submitted && !email" class="invalid-feedback">e-mail is required</div>
            <label for="password">Password</label>
            <input type="password" v-model="password" name="password" class="form-control mb-3"
                   :class="{ 'is-invalid': submitted && !password }"/>
            <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            <label for="password_confirmation">Confirm password</label>
            <input type="password" v-model="password_confirmation" name="password_confirmation"
                   class="form-control mb-3"
                   :class="{ 'is-invalid': submitted && !password_confirmation }"/>
            <div v-show="submitted && !password_confirmation" class="invalid-feedback">Password is required</div>
            <input @click.prevent="store" type="submit" class="btn btn-primary" value="Зарегистрироваться">
        </div>
    </div>

</template>

<script>

import login from "./Login";

export default {
    name: "Registration",

    data() {
        return {
            firstname: null,
            email: null,
            password: null,
            password_confirmation: null,
            submitted: false,
        }
    },

    methods: {
        store() {
            axios.post('/api/users', {
                firstname: this.firstname,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
                .then( res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    window.location.href = '/account';
                })
        }
    }
}
</script>

<style scoped>

</style>
