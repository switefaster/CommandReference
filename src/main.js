import Vue from 'vue'
import bootstrapVue from "bootstrap-vue"
import App from './app.vue'
import $ from 'jquery';

Vue.use(bootstrapVue)

$.get("https://raw.githubusercontent.com/pca006132/CommandReference/master/data.json", (result)=> {
    let data = JSON.parse(result);
    new Vue({
        el: '#app',
        render: h => h(App, {
            props: {
                version_min: data.version.min,
                version_max: data.version.max,
                tags: data.tags,
                threads: data.threads,
                words: data["common-words"],
                pics: data.adv
            }
        }),
        mounted() {
            this.$nextTick(function() {
                if (window.location.hash.length != 0) {
                    $('html, body').animate({
                        scrollTop: $(window.location.hash).offset().top
                    }, 50);
                }
            })
        }
    })
})

