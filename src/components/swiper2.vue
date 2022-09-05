<template>
    <div>
        <swiper :slides-per-view="1" :space-between="0" navigation>
            <swiper-slide v-for="(a,i) in healingBanners" :key="i">
                <img :src="healingBanners[i].img" alt="힐링상품 배너" draggable="false">
                <p>{{ healingBanners[i].content }}</p>
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
    },
}
</script>

<style scoped>
.swiper-button-next, .swiper-button-prev{
    display: none;
}
swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:  0 auto;
}
swiper-slide img{
    width: 100%;
}
p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 22px;
    color: #333;
    letter-spacing: -1px;
}
</style>