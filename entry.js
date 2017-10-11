import Vue from 'vue/dist/vue.esm'

import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

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
        mounted: function() {
            $('.modal').modal();
        },
    });
});
