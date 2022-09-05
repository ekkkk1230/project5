<template>
    <div>
        <swiper :slides-per-view="2.5" :space-between="10" navigation>
            <swiper-slide v-for="(a,i) in {popularMedias}" :key="i">
                <div class="inside-wrapper">
                    <div class="img" :style="{ backgroundImage : `url(${{popularMedias}[i].img})`}">
                        <div class="title">{{a.content}}</div>
                        <div class="icon"><img src="../assets/indexView/main_contentsPlay_icon.png" alt="인기미디어-플레이"></div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
SwiperCore.use(Navigation);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        healingBanners: Array,
        popularMedias: Array,
        newMedias: Array,
        classBanners: Array
    },
    date(){
        return{

        }
    }
}
</script>