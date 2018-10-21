<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <NavBar></NavBar>
    <MainSection></MainSection>
    <About></About>
    <Services></Services>
    <Gallery></Gallery>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Footer,
    Contact,
    Testimonials,
    Gallery,
    Services,
    About,
    NavBar,
    MainSection,
    HelloWorld
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  @import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
</style>
