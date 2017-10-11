import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        data: {
            message: 'Hello vue.js with webpack',
            num: null,
            items: [
                {
                    num: 10
                },
                {
                    num: 20
                },
                {
                    num: 30
                },
            ],
        },
    });
});
