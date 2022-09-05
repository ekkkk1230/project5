<!--
  * 앱제작 팀프로젝트(4조_박소윤, 이주현, 김시온, 송은경) : 마음아지트

    * 메인 페이지(index)
    * 작성자 : 이주현
    * 작성일 : 2022.07.20
    * 업데이트 : 2022.07.27 (수정 : 이주현, 박소윤, 송은경)
    
    //// : 시멘틱 영역표시
    ???? : 해결해야할 부분
    !!!! : 수정사항
 -->

 <template>
    <div class="wrap indexWrap">
        <h1 class="hidden">마음아지트 메인</h1>
        <!-- //// 헤더 //// -->
        <header>
            <!-- 글로벌 네비 -->
            <div class="global_nav">
                <div class="GNV_relative">
                    <div class="btns">
                        <a href="#none" class="plus_bt"><img src="../assets/indexView/main_plus_bt.png" alt="글로벌네비게이션 더보기"></a>
                        <div class="plus_touch_show">
                            <a href="#none" class="refresh_bt"><img src="../assets/indexView/main_refresh_bt.png" alt="새로고침"></a>
                            <a href="#none" class="share_bt"><img src="../assets/indexView/main_share_bt.png" alt="공유하기"></a>
                            <a href="#none" class="setting_bt"><img src="../assets/indexView/main_setting_bt.png" alt="설정"></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 프로필 영역 -->
            <div id="profile_field">
                <div class="profile_info">
                    <p class="login_date">
                        <span>1</span>일째
                    </p>
                    <p class="hello">안녕하세요 <br>
                        <span>만성피로맨</span>님
                    </p>
                    <div class="phraseWrap">
                        <p class="phrase_title">{{goodWords[num].sentence}}</p>
                        <p class="phrase">{{goodWords[num].ko}}</p>
                    </div>
                </div>
                <div class="profile_img">
                    <img src="../assets/indexView/main_profile_img.png" alt="프로필사진">
                </div>
            </div>
        </header>

        <!-- //// 섹션 //// -->
        <section>
            <!-- 힐링상품 배너 -->
            <div class="healing_banner"
           @mouseover="stopRotation"
           @mouseout="startRotation">
                <!-- <h2>Healing product</h2> -->
                <div class="slide_container">
                    <div class="slide_img" v-for="(a,i) in healingBanners" :key="i">
                        <img :src="healingBanners[i].img" alt="힐링상품 배너" draggable="false">
                        <p>{{ healingBanners[i].content }}</p>
                    </div>
                </div>
            </div>

            <!-- 인기 미디어 목록 -->
            <div class="popular">
                <h2>Popular meditation</h2>
                <swiper :slides-per-view="2.5" :space-between="10" navigation>
                    <swiper-slide v-for="(a,i) in popularMedias" :key="i">
                        <div class="inside-wrapper">
                            <div class="img" :style="{ backgroundImage : `url(${popularMedias[i].img})`}">
                                <div class="title">{{a.content}}</div>
                                <div class="icon"><img src="../assets/indexView/main_contentsPlay_icon.png" alt="인기미디어-플레이"></div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <!-- 새로운 미디어 목록 -->
            <div class="new">
                <h2>New meditation</h2>
                <swiper :slides-per-view="2.5" :space-between="10" navigation>
                    <swiper-slide v-for="(a,i) in newMedias" :key="i">
                        <div class="inside-wrapper">
                            <div class="img">
                                <div class="title">{{a.content}}</div>
                                <div class="icon"><img src="../assets/indexView/main_contentsPlay_icon.png" alt="인기미디어-플레이"></div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <!-- 힐링클래스 배너 -->
            <div class="class_banner">
                <h2 class="class">Class</h2>
                <div class="class_banner_slide"
                @mouseover="stopRotation2"
                @mouseout="startRotation2"
                >
                    <div class="slide_container">
                        <div class="slide_img" v-for="(a,i) in classBanners" :key="i">
                            <div class="text_field">
                                <p class="title">OFFLINE CLASS 1<span>기 모집중</span></p>
                                <p class="content">{{ classBanners[i].content }}</p>
                            </div>
                            <img :src="classBanners[i].img" alt="힐링클래스-배너" draggable="false">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- //// 푸터 //// -->
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import Footer from '../components/Footer.vue';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
SwiperCore.use(Navigation);

import goodWords from '../data/goodWord.js';
import healingBanners from '../data/healingBanner.js';
import popularMedias from '../data/popularMedia.js';
import newMedias from '../data/newMedia.js';
import classBanners from '../data/classBanner.js';

export default {
    data() {
        return {
            intro : true,
            goodWords,
            healingBanners,
            popularMedias,
            newMedias,
            classBanners,
            num: '0',

            itemIdx: 1,
            timer: null,
            itemWidth: 0,
            itemOffset: 0,

            classIdx: 1,
            class_timer: null,
            classWidth: 0,
            classOffset: 0,
        }
    },
    components: {
        Footer : Footer,
        Swiper,
        SwiperSlide,
    },
    computed: {
        getItemWidth: () => {
            const item_width = document.querySelector('.healing_banner').offsetWidth;
            return item_width;
        },
        getClassWidth: () => {
            const item_width = document.querySelector('.class_banner_slide').offsetWidth;
            return item_width;
        }
    },
    mounted() {
        setTimeout (()=> { 
            this.intro = false;
        }, 1000);

        this.random();

        this.itemWidth = this.getItemWidth;
        this.itemImg = document.querySelectorAll('.healing_banner .slide_img');
        this.itemWrap = document.querySelector('.healing_banner .slide_container');

        
        this.classWidth = this.getClassWidth;
        this.classImg = document.querySelectorAll('.class_banner_slide .slide_img');
        this.classWrap = document.querySelector('.class_banner_slide .slide_container');

        this.startRotation();
        this.cloneItem(this.itemImg, this.healingBanners, this.itemOffset, this.itemWidth, this.itemIdx); 
        this.startRotation2();
        this.cloneItem2(this.classImg, this.classBanners, this.classOffset, this.classWidth, this.classIdx); 

    },
    methods: {
        random(){
            let randomNum = Math.floor(Math.random() * 10 + 1);
            this.num = randomNum
        },

        startRotation(){
            this.timer = setInterval(this.next, 2500);
        },
        stopRotation(){
            clearInterval(this.timer);
            this.timer = null;
        },
        startRotation2(){
            this.class_timer = setInterval(this.next2, 2500);
        },
        stopRotation2(){
            clearInterval(this.class_timer);
            this.class_timer = null;
        },

        cloneItem(img, count, offset, width, idx){
            const startSlide = img[0];
            const endSlide = img[count.length-1];
            const startEl = document.createElement(startSlide.tagName);
            const endEl = document.createElement(endSlide.tagName);

            endSlide.classList.forEach(c => endEl.classList.add(c));
            endEl.innerHTML = endSlide.innerHTML;   

            startSlide.classList.forEach(c => startEl.classList.add(c));
            startEl.innerHTML = startSlide.innerHTML;

            img[0].before(endEl);
            img[count.length-1].after(startEl);

            img = document.querySelectorAll('.healing_banner .slide_img');
            offset = width*idx;
            img.forEach(item => item.setAttribute('style', `left: -${offset}px`))
        },
        cloneItem2(img, count, offset, width, idx){
            const startSlide = img[0];
            const endSlide = img[count.length-1];
            const startEl = document.createElement(startSlide.tagName);
            const endEl = document.createElement(endSlide.tagName);

            endSlide.classList.forEach(c => endEl.classList.add(c));
            endEl.innerHTML = endSlide.innerHTML;   

            startSlide.classList.forEach(c => startEl.classList.add(c));
            startEl.innerHTML = startSlide.innerHTML;

            img[0].before(endEl);
            img[count.length-1].after(startEl);

            img = document.querySelectorAll('.class_banner_slide .slide_img');
            offset = width*idx;
            img.forEach(item => item.setAttribute('style', `left: -${offset}px`))
        },
        prev(){
            this.itemIdx --;
            if(this.itemIdx > 0){
                this.itemOffset = this.itemWidth*(this.itemIdx - 1);
                this.itemImg.forEach(item => item.setAttribute('style', `left: -${this.itemOffset}px`))
            }
        },
        next(){
            this.itemIdx ++;
            if(this.itemIdx <= this.healingBanners.length){
                this.itemOffset = this.itemWidth * (this.itemIdx);
                this.itemImg.forEach(item => {
                item.setAttribute('style', `left: -${this.itemOffset}px`)
                })
            }else{
                this.itemIdx = 0;
                this.itemOffset = this.itemWidth*this.itemIdx;
                this.itemImg.forEach(item => item.setAttribute('style', `transition: ${0}s; left: -${this.itemOffset}px`))

                this.itemIdx ++;
                this.itemOffset = this.itemWidth*this.itemIdx;

                setTimeout(()=>{
                this.itemImg.forEach(item => item.setAttribute('style',`transition: ${.4}s; left: -${this.itemOffset}px`))
                }, 0)
            }
        },

        next2(){
            this.classIdx ++;
            if(this.classIdx <= this.classBanners.length){
                this.classOffset = this.classWidth * (this.classIdx);
                this.classImg.forEach(c_item => {
                c_item.setAttribute('style', `left: -${this.classOffset}px`)
                })
            }else{
                this.classIdx = 0;
                this.classOffset = this.classWidth*this.classIdx;
                this.classImg.forEach(c_item => c_item.setAttribute('style', `transition: ${0}s; left: -${this.classOffset}px`))

                this.classIdx ++;
                this.classOffset = this.classWidth*this.classIdx;

                setTimeout(()=>{
                this.classImg.forEach(c_item => c_item.setAttribute('style',`transition: ${.4}s; left: -${this.classOffset}px`))
                }, 0)
            }
        },


    }
}
</script>

<style>


@charset "utf-8";

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", Avenir, Helvetica, Arial, sans-serif;
    color: #333;
}

a {
    text-decoration: none;
    color: #333;
}

ul,li {
    list-style: none;
}

.cf::after {
    content: '';
    display: block;
    clear: both;
}

.hidden {
    display: none;
}

/* 모바일 수평 스크롤 금지 */
html,
body {
    max-width: 100%;
    overflow-x: hidden;

    /* y축 스크롤바 숨기기(작동o) */
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

/* y축 스크롤바 숨기기(작동o) */
.html,
body::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Opera*/
}

/* //// 레이아웃 시작 //// */

/* 스플래쉬 애니메이션 */
/* modal_transition_01_CSS */
.aniStart {opacity: 0;  transition: all 1s;}
.aniEnd {opacity: 1;}

/* modal_transition_02_모달창 퇴장 애니메이션 : 작명-enter-from/active/to */
.fadeOut-leave-from {opacity: 1;} /* 시작 */
.fadeOut-leave-active {transition: all 1s;}
.fadeOut-leave-to {opacity: 0;} /* 끝 */


h2 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 25px;
    text-align: center;
}

.indexWrap {
    max-width: 767px;
    min-width: 385px;
    width: calc(100% - 40px);
    position: relative;
    left: 50%;
    transform: translate(-50%);
    overflow: hidden;
}

/* //// 헤더 //// */
header {
    width: 100%;
    margin: 0 auto;
    height: 317px;
    padding-top: 1px;
    border-radius: 0 0 0 35px;
    background-color: #ecf4eb;
    position: relative;
    overflow: hidden;
}

/* 글로벌 네비 */
.global_nav {
    width: 160px;
    height: 50px;
    background-color: #68b39f;
    border-radius: 26px 0 0 26px;
    position: absolute;
    top: 40px;
    right: -80px;
}

.GNV_relative {
    position: relative;
    width: 100%;
    height: 100%;
}

.btns {
    width: 160px;
    height: 50px;
    margin-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.plus_bt {
    display: block;
    width: 40px;
    height: 40px;
    margin-top: 2px;
    position: absolute;
    left: 6px;
}

.plus_touch_show {
    width: 85%;
    height: 40px;
    display: flex;
    margin-top: 2px;
    margin-right: 12px;
    justify-content: space-between;
    display: none;
}

.plus_touch_show a {
    display: block;
    width: 40px;
    height: 40px;
}

/* 프로필 영역 */
#profile_field {
    width: 85%;
    height: 70%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.profile_info {
    width: 78%;
    height: 100%;
}

/* 접속일 */
.login_date span {
    font-size: 35px;
    font-weight: 600;
    color: #68b39f;
    display: inline-block;
    margin-bottom: 20px;
}

/* 일째 */
.login_date {
    font-size: 20px;
}

/* 안녕하세요 */
.hello {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
}

/* 닉네임 */
.hello span {
    font-size: 28px;
    font-weight: 600;
}

/* 오늘의 명언 타이틀 */
p.phrase_title {
    font-size: 1.15em;
    font-weight: 600;
    color: #2d6974;
    margin-bottom: 10px;
}

/* 명언 */
.phraseWrap{
    height: 120px;
    overflow: hidden;
}
.phrase {
    font-size: 0.9em;
    letter-spacing: -1px;
    line-height: 1.5em;
}

/* 프로필 이미지 */
.profile_img {
    width: 100px;
    height: 100px;
}

.profile_img img {
    width: 100%;
}

/* //// 섹션 //// */
section {
    width: 100%;
    height: auto;
    margin: 0 auto 66px;
}

/* 힐링배너 */
.healing_banner {
    width: 100%;
    overflow: hidden;
    margin: 50px auto;
}

.healing_banner .slide_container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden
}

.healing_banner .slide_img {
    width: 100%;
    flex-shrink: 0;
    position: relative;
    left: 0;
    transition: all .4s
}

.healing_banner .slide_img img {
    width: 100%;
}

.healing_banner p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 22px;
    color: #333;
    letter-spacing: -1px;
}

.healing_banner p span {
    font-size: 24px;
    font-weight: 800;
}

/* 인기 미디어 목록 */
.popular {
    height: auto;
    margin: 50px auto;
}
.popular .swiper-button-next, .swiper-button-prev{
    width: 0;
}
.popular .inside-wrapper {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: relative;
}
.popular .inside-wrapper .img{
    width: 100%;
    height: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    position: relative;
}
.popular .inside-wrapper .img .title{
    color: #ffffff;
    position: absolute;
    top: 15px;
    left: 15px;
    width: 80%;
}
.popular .inside-wrapper .img .icon{
    position: absolute;
    bottom: 15px;
    right: 15px;
}
.popular .swiper-slide:nth-child(1) .inside-wrapper{
    background: url(../assets/indexView/main_contentsPlay_icon.png) center no-repeat;
    background-size: contain;
}
.popular .swiper-slide:nth-child(2) .inside-wrapper{
    background: url(../assets/indexView/main_contentsPlay_icon.png) center no-repeat;
    background-size: contain;
}
.popular .swiper-slide:nth-child(3) .inside-wrapper{
    background: url(../assets/indexView/main_contentsPlay_icon.png) center no-repeat;
    background-size: contain;
}
.popular .swiper-container {
  max-width: 100%;
  overflow: hidden;
  margin: 2rem auto;
}
.popular .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.popular .swiper-wrapper {
  width: max-content;
  display: flex;
}

.popular .inside-wrapper .item_info{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background-color: #CEDFCC;
    border-radius: 0 0 30px 30px;
    text-align: center;
}

/* 새로운 미디어 목록 */
.new {
    height: auto;
    margin: 50px auto;
}

.new .inside-wrapper {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: relative;
}
.new .inside-wrapper .img{
    width: 100%;
    height: 90%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
    position: relative;
}
.new .inside-wrapper .img .title{
    color: #ffffff;
    position: absolute;
    top: 15px;
    left: 15px;
    width: 80%;
}
.new .inside-wrapper .img .icon{
    position: absolute;
    bottom: 15px;
    right: 15px;
}
.new .swiper-slide:nth-child(1) .inside-wrapper{
    background: url(../assets/indexView/main_new_00.jpg) center no-repeat;
    background-size: cover;
}
.new .swiper-slide:nth-child(2) .inside-wrapper{
    background: url(../assets/indexView/main_new_01.jpg) center no-repeat;
    background-size: cover;
}
.new .swiper-slide:nth-child(3) .inside-wrapper{
    background: url(../assets/indexView/main_new_02.jpg) center no-repeat;
    background-size: cover;
}
.new .swiper-container {
  max-width: 100%;
  overflow: hidden;
  margin: 2rem auto;
}
.new .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.new .swiper-wrapper {
  width: max-content;
  display: flex;
}

.new .inside-wrapper .item_info{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background-color: #CEDFCC;
    border-radius: 0 0 30px 30px;
    text-align: center;
}


/* 힐링클래스 배너 */
.class_banner {
    width: 100%;
    margin: 0 auto 50px;
    padding: 50px 0px;
    background-color: #ecf4eb;
}

.class_banner_slide {
    width: 100%;
    height: auto;
    overflow: hidden;
}

.class_banner .slide_container {
    width: 100%;
    display: flex;
    
}

.class_banner .slide_img {
    width: 100%;
    flex-shrink: 0;
    position: relative;
    left: 0;
    transition: all .4s;
    overflow: hidden;
}

.class_banner img {
    width: 90%;
    height: 100%;
    border-radius: 25px;
    overflow: hidden;
    display: block;
    margin: 0 auto;
}

.class_banner .text_field {

    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    letter-spacing: -1px;
    line-height: 40px;
}

/* 배너타이틀 */
.class_banner .title {
    font-size: 23px;
    font-weight: 600;
}

/* 배너타이틀 한글부분 */
.class_banner .title span {
    font-weight: 800;
}

.class_banner .content {
    font-size: 18px;
}


</style>