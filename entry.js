import Vue from 'vue/dist/vue.esm'

import Materialize from 'materialize-css/dist/js/materialize.min.js'
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
        methods: {
            square: function(i) {
                Materialize.toast(i * i, 4000);
            },
            double: function(i) {
                Materialize.toast(i * 2, 4000);
            },
            squareRoot: function(i) {
                Materialize.toast(Math.sqrt(i), 4000);
            }
        },
    });
});
