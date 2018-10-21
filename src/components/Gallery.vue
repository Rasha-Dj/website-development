<template>
    <div class="portfolio section-padding" id="section-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 section-title text-center">
                    <h3>Check our recent works</h3>
                    <p>Vestibulum elementum dui tempus dolor gravida, vel mattis erat fermentum.</p>
                    <span class="section-title-line"></span> </div>
                <div class="filtering text-center mb-30">
                    <button type="button" data-filter='*' class="active">All</button>
                    <button type="button" data-filter='.summer'>Summer</button>
                    <button type="button" data-filter='.winter'>Winter</button>
                    <button type="button" data-filter='.rainy'>Rainy</button>
                    <button type="button" data-filter='.spring'>Spring</button>
                </div>
                <div class="gallery no-padding col-lg-12 col-sm-12">
                    <div class="col-lg-4 col-sm-6 spring no-padding">
                        <div class="item-img"> <a class="single-image" href="../assets/images/gall1.jpg"></a>
                            <div class="part-img"> <img src="../assets/images/gall1.jpg" alt="image">
                                <div class="overlay-img">
                                    <h4>Spring</h4>
                                    <h6>Autumn Leaves</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 spring no-padding">
                        <div class="item-img"> <a class="single-image" href="../assets/images/gall2.jpg"></a>
                            <div class="part-img"> <img src="../assets/images/gall2.jpg" alt="image">
                                <div class="overlay-img">
                                    <h4>Spring</h4>
                                    <h6>Flower Pot</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 spring no-padding">
                        <div class="item-img"> <a class="single-image" href="../assets/images/gall3.jpg"></a>
                            <div class="part-img"> <img src="../assets/images/gall3.jpg" alt="image">
                                <div class="overlay-img">
                                    <h4>Spring</h4>
                                    <h6>Bird with Flower</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 summer no-padding">
                        <div class="item-img"> <a class="single-image" href="../assets/images/gall4.jpg"></a>
                            <div class="part-img"> <img src="../assets/images/gall4.jpg" alt="image">
                                <div class="overlay-img">
                                    <h4>Summer</h4>
                                    <h6>Vacation Trip Van</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 winter no-padding">
                        <div class="item-img"> <a class="single-image" href="../assets/images/gall5.jpg"></a>
                            <div class="part-img"> <img src="../assets/images/gall5.jpg" alt="image">
                                <div class="overlay-img">
                                    <h4>Winter</h4>
                                    <h6>Girl in the snow</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 rainy no-padding">
                        <div class="item-img"> <a class="single-image" href="../assets/images/gall6.jpg"></a>
                            <div class="part-img"> <img src="../assets/images/gall6.jpg" alt="image">
                                <div class="overlay-img">
                                    <h4>Rainy</h4>
                                    <h6>Man with an Umberalla</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 summer no-padding">
                        <div class="item-img"> <a class="single-image" href="../assets/images/gall7.jpg"></a>
                            <div class="part-img"> <img src="../assets/images/gall7.jpg" alt="image">
                                <div class="overlay-img">
                                    <h4>Summer</h4>
                                    <h6>New Beginning</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 rainy no-padding">
                        <div class="item-img"> <a class="single-image" href="../assets/images/gall8.jpg"></a>
                            <div class="part-img"> <img src="../assets/images/gall8.jpg" alt="image">
                                <div class="overlay-img">
                                    <h4>Rainy</h4>
                                    <h6>Girl in the Rain</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 summer no-padding">
                        <div class="item-img"> <a class="single-image" href="../assets/images/gall9.jpg"></a>
                            <div class="part-img"> <img src="../assets/images/gall9.jpg" alt="image">
                                <div class="overlay-img">
                                    <h4>Summer</h4>
                                    <h6>Fun at the Seashores</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Gallery"
  }
</script>

<style scoped>
    @import "../assets/jquery.fancybox.min.css";
</style>