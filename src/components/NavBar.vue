<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand navbar-logo" href="#">
                <img src="../assets/images/logo-white.png" alt="logo" class="logo-1" v-if="white">
                <img src="../assets/images/logo-black.png" alt="logo" class="logo-1" v-if="!white">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="fas fa-bars"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="" v-scroll-to="'#section-0'">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" v-scroll-to="'#section-1'">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" v-scroll-to="'#section-2'">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" v-scroll-to="'#section-3'">Own Work</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" v-scroll-to="'#section-4'">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: "NavBar",
    data: function () {
      return {
        white: true
      }
    },
    methods: {
      handleScroll (event) {
        console.log(`Hi! We're scrolling... ${event}`)

        var bodyScroll = this.getVerticalPosition()
        var navbar = document.querySelector('.navbar')

        if (bodyScroll > 130) {
          navbar.classList.add('nav-scroll')
          // document.querySelector('.navbar-logo img').setAttribute('src', '../assets/images/logo-black.png')
          this.white = false
        } else {
          navbar.classList.remove('nav-scroll')
          // document.querySelector('.navbar-logo img').setAttribute('src', '../assets/images/logo-white.png')
          this.white = true
        }
      },
      /**
       * cross-browser implementation of JQuery's scrollTop()
       * https://stackoverflow.com/questions/11193453/find-the-vertical-position-of-scrollbar-without-jquery
       * @returns {number} distance from top of the screen to the scrollbar
       */
      getVerticalPosition () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        // var scrollLeft = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        var scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

        return scrollTop
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>

</style>