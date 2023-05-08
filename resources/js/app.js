import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import express from "express";

require('./bootstrap');

const app = createApp(App)

app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')
app.use(express.static('js'));
