import axios from "axios";
import router from './router';

const api = axios.create();

// start request
api.interceptors.request.use(config => {

    if (localStorage.getItem('access_token')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }

    return config
}, error => {
    //Этот блок кода срабатывает только тогда, когда ошибка отправки запроса с фронта
    console.log(error)
});
// end request

// start response
api.interceptors.response.use(config => {

    if (localStorage.getItem('access_token')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }

    return config
}, error => {
    //Этот блок кода срабатывает когда прилетает ошибка с бэка

    if (error.response.data.message === 'Token has expired') {
        return axios.post('/api/auth/refresh', {}, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => {
                localStorage.setItem('access_token', res.data.access_token);

                //Делаем повторный запрос на получение данных с новым токеном
                //чтобы вручную не обновлять страницу
                error.headers.authorization = `Bearer ${res.data.access_token}`

                return api.request(error.config)
            })
    }

    // if (error.response.status === 401) {
    //     router.push('/login')
    // }
});
// end response

export default api
