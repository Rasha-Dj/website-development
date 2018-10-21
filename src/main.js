import Vue from 'vue'
import App from './App.vue'

// bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// font awesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faChartLine} from '@fortawesome/free-solid-svg-icons'
import {faBullhorn} from '@fortawesome/free-solid-svg-icons'
import {faMapMarked} from '@fortawesome/free-solid-svg-icons'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {faPaintBrush} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faPhone)
library.add(faComments)
library.add(faMapMarkerAlt)
library.add(faEnvelope)
library.add(faArrowRight)
library.add(faChartLine)
library.add(faBullhorn)
library.add(faMapMarked)
library.add(faBug)
library.add(faPaintBrush)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// custom stylings
import './assets/style.css'

// scroll animation
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  easing: 'swing',
  duration: 900
})

// jQuery
const $ = require('expose-loader?$!expose-loader?jQuery!jquery')
window.$ = $
require('./assets/jquery.fancybox.min')
require('isotope-layout/dist/isotope.pkgd.min')

$(window).on("load", function () {
  var $gallery = $('.gallery').isotope({});
  $('.gallery').isotope({

    // options
    itemSelector: '.item-img',
    transitionDuration: '0.5s',

  });


  $(".gallery .single-image").fancybox({
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn'   : 600,
    'speedOut'    : 200,
    'overlayShow' : false
  });


  /* filter items on button click
  -------------------------------------------------------*/
  $('.filtering').on( 'click', 'button', function() {

    var filterValue = $(this).attr('data-filter');

    $gallery.isotope({ filter: filterValue });

  });

  $('.filtering').on( 'click', 'button', function() {

    $(this).addClass('active').siblings().removeClass('active');

  });
})

// end import configuration

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.use(BootstrapVue)
