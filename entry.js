import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        data: {
            message: 'Hello vue.js with webpack',
        },
    });
});
