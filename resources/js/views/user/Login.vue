<template>
    <div class="container-fluid login-page">
        <h2 class="mb-3">Вход</h2>
        <div class="w-25">
            <label class="mt-3" for="email">E-mail</label>
            <input type="text" v-model="email" name="email" class="form-control mb-3"
                   :class="{ 'is-invalid': submitted && !email }"/>
            <div v-show="submitted && !email" class="invalid-feedback">e-mail is required</div>
            <label for="password">Password</label>
            <input type="password" v-model="password" name="password" class="form-control mb-3"
                   :class="{ 'is-invalid': submitted && !password }"/>
            <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            <input @click.prevent="login" type="submit" class="btn btn-primary" value="Войти">
        </div>
    </div>

</template>

<script>

export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
            submitted: false,
        }
    },
    methods: {
        login() {
            axios.post('/api/auth/login', {
                email: this.email,
                password: this.password
            })
                .then(res => {
                    localStorage.access_token = res.data.access_token
                })

            window.location.href = '/account';
        }
    }
}
</script>

<style scoped>

</style>
