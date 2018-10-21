<template>
    <div class="services section-padding bg-grey" id="section-2">
        <div class="container">
            <div class="row">
                <div class="col-md-12 section-title text-center">
                    <h3>We Are Best At Our Service</h3>
                    <p>Vestibulum elementum dui tempus dolor gravida, vel mattis erat fermentum.</p>
                    <span class="section-title-line"></span>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-30" v-for="service in services">
                    <div class="service-box bg-white text-center">
                        <font-awesome-icon v-bind:icon="service.icon" color="#ffaf53" size="3x"></font-awesome-icon>
                        <div class="icon-text">
                            <h4 class="title-box">{{service.title}}</h4>
                            <p>{{service.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Services",
    data: function () {
      return {
        services: [{
          title: 'Chart Line',
          icon: 'chart-line',
          description: 'Sed malesuada, est eget condimentum iaculis, nisi ex facilisis metus.'
        }, {
          title: 'Quick Anouncement',
          icon: 'bullhorn',
          description: 'Sed malesuada, est eget condimentum iaculis, nisi ex facilisis metus.'
        }, {
          title: 'Mark Location',
          icon: 'map-marked',
          description: 'Sed malesuada, est eget condimentum iaculis, nisi ex facilisis metus.'
        }, {
          title: 'Bug Solution',
          icon: 'bug',
          description: 'Sed malesuada, est eget condimentum iaculis, nisi ex facilisis metus.'
        }, {
          title: 'Fast Communication',
          icon: 'comments',
          description: 'Sed malesuada, est eget condimentum iaculis, nisi ex facilisis metus.'
        }, {
          title: 'Clean Design',
          icon: 'paint-brush',
          description: 'Sed malesuada, est eget condimentum iaculis, nisi ex facilisis metus.'
        }]
      }
    }
  }
</script>

<style scoped>

</style>