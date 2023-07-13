<template>

    <!-- Слайдер категорий -->
    <section class="section-slide">
        <div class="wrap-slick1 rs2-slick1">
            <div class="slick1">

                <div class="item-slick1 bg-overlay1" style="background-image: url(/assets/images/slide-06.jpg);"
                     data-thumb="/assets/images/thumb-02.jpg" data-caption="Non-Player">
                    <div class="container h-full">
                        <div class="flex-col-c-m h-full p-t-100 p-b-60 respon5">

                            <div class="layer-slick1 animated visible-false" data-appear="lightSpeedIn"
                                 data-delay="800">
                                <h2 class="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                                    Non-player
                                </h2>
                            </div>

                            <div class="layer-slick1 animated visible-false scrollto" data-appear="slideInUp" data-delay="60">
                                <router-link to="/">
                                    <h3 class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        <a id="scroll" href="#scroll-content">Показать</a>
                                    </h3>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item-slick1 bg-overlay1" style="background-image: url(/assets/images/slide-07.jpg);"
                     data-thumb="/assets/images/thumb-03.jpg" data-caption="Player">
                    <div class="container h-full">
                        <div class="flex-col-c-m h-full p-t-100 p-b-60 respon5">

                            <div class="layer-slick1 animated visible-false" data-appear="lightSpeedIn"
                                 data-delay="3">
                                <h2 class="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                                    Player
                                </h2>
                            </div>

                            <div class="layer-slick1 animated visible-false scrollto" data-appear="slideInUp" data-delay="60">
                                <router-link to="/player" class="white">
                                    <h3 class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        <a id="scroll" href="#scroll-content">Показать</a>
                                    </h3>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wrap-slick1-dots p-lr-10"></div>
        </div>
    </section>
</template>

<script>

export default {
    name: "Slider",
}

</script>

<style scoped>

</style>
