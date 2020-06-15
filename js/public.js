axios.defaults.baseURL = 'https://developer.duyiedu.com/vue/bz';

axios.interceptors.response.use((response) => {
    if (response.status === 200) {
        if (response.config.url === response.config.baseURL + '/video') {
            return {
                data: response.data.data,
                count: response.data.count,
            };
        }
        return response.data.data;
    }
    return response;
});
