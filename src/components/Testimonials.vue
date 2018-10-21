<template>
    <div class="testimonials">
        <div class="testimonials-overlay section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <!--<div class="owl-carousel owl-theme">-->
                        <tiny-slider :loop="true" :controls="false" :autoplay="true" :autoplayButtonOutput="false">

                            <div class="testimonial-item text-center" v-for="testimonial in testimonials">
                                <div class="icon">
                                    <!--<i class="fas fa-comments"></i>-->
                                    <font-awesome-icon icon="comments" size="3x" style="color: #ab2f52"></font-awesome-icon>
                                </div>
                                <!--<font-awesome-icon icon="comments" size="3x" style="color: #ab2f52"></font-awesome-icon>-->
                                <p class="m-auto">
                                    {{testimonial.comment}}
                                </p>
                                <div class="testimonial-author text-center">
                                    <h5>{{testimonial.name}}</h5>
                                    <h6>{{testimonial.role}}</h6>
                                </div>
                            </div>

                            <!--</div>-->
                        </tiny-slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import VueTinySlider from 'vue-tiny-slider'

  export default {
    name: "Testimonials",
    components: {
      'tiny-slider': VueTinySlider
    },
    data: function () {
     return {
       testimonials: [{
         name: 'Rup Jakhar',
         role: 'Web Desinger',
         comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.`
       }, {
         name: 'Yogesh Singh',
         role: 'Web Designer',
         comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.`
       }, {
         name: 'Vivek Singh',
         role: 'Web Designer',
         comment: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.`
       }]
     }
    }
  }
</script>

<style scoped>
    @import "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.3.5/tiny-slider.css";
    /* dirty hack */
    .tns-outer button {
        display: none;
    }

    .testimonials {
        background:url(../assets/images/bg1.jpg) no-repeat 0% 0% / 100% 100%;
        width:100%;
    }
    .testimonials-overlay {
        background: rgba(0,0,0,0.9);
    }
    .testimonials .testimonial-item p {
        max-width: 700px;
        color: #ffffff;
        margin-bottom: 30px !important;
    }
    /*.testimonials .icon i {
        color: #ab2f52;
        font-size: 47px;
        margin-bottom: 25px;
    }*/
    div.icon {
        margin-bottom: 25px;
    }

    .testimonials h5 {
        color:#ffaf53;
    }
    .testimonials h6 {
        color: #ffffff;
        margin-bottom: 10px !important;
    }
    .owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
        background: #ab2f52 !important;
    }
</style>