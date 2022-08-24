<!--
  * 앱제작 팀프로젝트(4조_박소윤, 이주현, 김시온, 송은경) : 마음아지트

    * 상점 페이지(shop)
    * 작성자 : 이주현
    * 작성일 : 2022.07.20
    * 업데이트 : 2022.07.27 (수정 : 이주현, 박소윤, 송은경)
    
    //// : 시멘틱 영역표시
    ???? : 해결해야할 부분
    !!!! : 수정사항
 -->

<template>
    <div class="wrap">
        <!-- 헤더 -->
<!--         <header>
            <div class="btns">
                <h1>SHOP</h1>
                <a class='cart_bt'><img src="../assets/shopView/shop_cart_bt.png" alt="장바구니"></a>
            </div>
        </header> -->
        <header>
            <div class="btns">
                <h1>SHOP</h1>
                <a class='cart_bt'><img src="../assets/shopView/shop_cart_bt.png" alt="장바구니"></a>
            </div>
        </header>
        <section>
            <!-- 검색창 -->
            <form class="search">
                <input type="search" class="input_search" name="input_search" placeholder="검색어를 입력하세요.">
                <button type="submit" class="input_submit"></button>
            </form>

            <!-- 인기상품 -->
            <div class="popular">
                <h2>Popular product</h2>
                <div class="popular_top">
                    <a class="view_all" href="#none">View all <img src="../assets/shopView/shop_viewAll_bt.png" alt="상품 전체보기"></a>
                </div>

                <swiper :slides-per-view="2.5" :space-between="25" navigation>
                    <swiper-slide v-for="(popularItem,i) in popularItems" :key="i">
                        <div class="inside-wrapper" :style="`background-image:url(${popularItems[i].img})`">
                            <div class="item_info">
                                <p class="name">{{popularItems[i].name}}</p>
                                <p class="price"><span>{{popularItems[i].price}}</span> {{popularItems[i].discount}}원</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <!-- <div class="slide_container">
                     상품 
                     !!!!(07.28) : cf추가 
                    <div class="silde_box cf">
                        <div class="product_img">
                            <img src="../assets/shopView/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="product_img">
                            <img src="../assets/shopView/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="product_img">
                            <img src="../assets/shopView/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="product_img">
                            <img src="../assets/shopView/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="product_img">
                            <img src="../assets/shopView/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                </div> -->
            </div>

            <!-- 새상품 -->
            <div class="new">
                <h2>New product</h2>
                <div class="new_top">
                    <a class="view_all" href="#none">View all <img src="../assets/shopView/shop_viewAll_bt.png" alt="상품 전체보기"></a>
                </div>
                <!-- 상품 -->
                <div class="product" v-for="(newItem,i) in newItems" :key=i>
                    <div class="product_img" :style="`background-image:url(${newItems[i].img})`"></div>
                    <div class="product_info">
                        <p class="name">{{newItems[i].name}}</p>
                        <p class="price"><span>{{newItems[i].price}}</span> {{newItems[i].discount}}원</p>
                    </div>
                </div>
                <!-- <div class="product">
                    <div class="product_img"><img src="../assets/shopView/shop_productImg_01.jpg" alt="상품이미지"></div>
                    <div class="product_info">
                        <p class="name">마음안정 디퓨저</p>
                        <p class="price"><span>28,000원</span> 14,000원</p>
                    </div>
                </div>
                <div class="product">
                    <div class="product_img"><img src="../assets/shopView/shop_productImg_01.jpg" alt="상품이미지"></div>
                    <div class="product_info">
                        <p class="name">마음안정 디퓨저</p>
                        <p class="price"><span>28,000원</span> 14,000원</p>
                    </div>
                </div>
                <div class="product">
                    <div class="product_img"><img src="../assets/shopView/shop_productImg_01.jpg" alt="상품이미지"></div>
                    <div class="product_info">
                        <p class="name">마음안정 디퓨저</p>
                        <p class="price"><span>28,000원</span> 14,000원</p>
                    </div>
                </div> -->
            </div>
        </section>
        <!-- //// 푸터 //// -->
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue';

import popularItems from '../data/popularItem.js';
import newItems from '../data/newItem.js';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
SwiperCore.use(Navigation);

export default {
    name: 'shop',
    data(){
        return{
            popularItems : popularItems,
            newItems : newItems
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    }

}
</script>

<style scoped>
@charset "utf-8";

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", Avenir, Helvetica, Arial, sans-serif;
    /* !!!!(07.28) : 추가 나머지 다 제거 */
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

.wrap {
    max-width: 767px;
    min-width: 425px;
    width: calc(100% - 40px);
    position: relative;
    left: 50%;
    transform: translate(-50%);

    /* border: 1px solid #000; */

    /* 개별추가 */

}

h1 {
    font-size: 33px;
    font-weight: 800;
    margin-bottom: 3px;
}

h2 {
    display: inline-block;
    font-size: 25px;
    font-weight: 600;
    padding: 10px 0;
    margin-bottom: 20px;
}

/* //// 헤더 //// */
header {
    display: inline-block; /* 마진상쇄 해결 */
    width: 100%;
    height: 80px;
    margin: 0 auto;
    margin-bottom: 50px;
    /* background-color: #CEDFCC; */
}

.btns {
    width: 100%;
    height: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto;
    /* background-color: yellow; */
}

/* 헤더 삭제한 부분 */
/* .cart_bt {
    width: 27px;
} */

/* //// 섹션 //// */
section{
/*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: 100%;
    /* !!!!(07.28 : 하단여백) */
    margin: 0 auto 106px;
}

/* 검색창 */
.search {
    position: relative;
    margin-bottom: 50px;
}

.search .input_search {
    width: 100%;
    height: 52px;
    border-radius: 30px;
    background-color: #E0ECDE;
    padding-left: 25px;
    font-size: 20px;
}

.search .input_submit {
    /* !!!!(07.28) : 폰트사이즈 없앰 */
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%); 
    background: url(../assets/shopView/shop_search_bt.png) no-repeat;
    background-size: cover;
}

/* placeholder스타일 */
::placeholder {
    font-size: 18px;
    font-weight: 400;
    opacity: 1; /* Firefox */
}

/* 인풋에 x버튼 안생기게하는 코드 */
input::-ms-clear,
input::-ms-reveal{
   display:none; width:0; height:0;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration{
   display:none;
}


/* 인기상품 */

.inside-wrapper {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: relative;
}
.swiper-slide:nth-child(1) .inside-wrapper{
    background: url(../assets/shopView/shop_productImg_01.jpg) center no-repeat;
    background-size: cover;
}
.swiper-slide:nth-child(2) .inside-wrapper{
    background: url(../assets/shopView/shop_productImg_01.jpg) center no-repeat;
    background-size: cover;
}
.swiper-slide:nth-child(3) .inside-wrapper{
    background: url(../assets/shopView/shop_productImg_01.jpg) center no-repeat;
    background-size: cover;
}
.swiper-slide:nth-child(4) .inside-wrapper{
    background: url(../assets/shopView/shop_productImg_01.jpg) center no-repeat;
    background-size: cover;
}
.swiper-slide:nth-child(5) .inside-wrapper{
    background: url(../assets/shopView/shop_productImg_01.jpg) center no-repeat;
    background-size: cover;
}
.swiper-container {
  max-width: 100%;
  overflow: hidden;
  margin: 2rem auto;
}
.swiper-slide {
  display: flex;
  /* flex: 0 0 170px; */
  justify-content: center;
  align-items: center;
}
.swiper-wrapper {
  width: max-content;
  display: flex;
}

.inside-wrapper .item_info{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background-color: #CEDFCC;
    border-radius: 0 0 30px 30px;
    text-align: center;
}

.popular {
    width: 100%;
    margin-bottom: 50px;
    /* !!!!(07.28 : 오버플로우삭제,추가부분) */
    /* height: 362px; */
    /* background-color: salmon; */
}

.popular_top {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 15px;
}

.popular .view_all img {
    width: 8px;
}

.popular .slide_container {
    width: 300vw;
    /* !!!!(07.28) : float으로 수정 */
    display: flex;
    justify-content: start;
}

/* 상품 */
.popular .silde_box {
    /* !!!!(07.28) : 너비,높이수정 */
    width: 160px;
    height: 220px;
    background-color: #CEDFCC;
    /* !!!!(07.28) : 마진R 수정 */
    margin-right: 20px;
    /* !!!!(07.28) : 모서리값수정 */
    border-radius: 25px;
    overflow: hidden;
    /* !!!!(07.28) : 추가 */
    letter-spacing: -1px;
    /* float: left; */
}

.popular .product_img {
    /* !!!!(07.28) : 너비수정 */
    width: 160px;
    height: 160px;
    overflow: hidden;
}

.popular .product_img img {
    width: 100%;
}

/* 상품정보 묶음 */
.popular .product_info {
    width: 90%;
    /* !!!!(07.28) : margin-top수정 */
    margin: 6px auto;
    text-align: center;
}

/* !!!!(07.28) : 수정 */
/* 상품-이름 */
.popular .name {
    font-size: 1em;
    font-weight: 800;
}

/* !!!!(07.28) : 수정 */
/* 상품-할인가격 */
.popular .price {
    font-size: 0.9em;
    font-weight: 600;
}

/* 상품-원래가격 */
.popular .price span {
    text-decoration: line-through red;
/* !!!!(07.28) : 글꼴수정 */
    font-size: 12px;
    font-weight: 600;
    color: #666;
}
/* 상품 */
.popular .silde_box {
    /* !!!!(07.28) : 너비,높이수정 */
    width: 160px;
    height: 220px;
    background-color: #CEDFCC;
    /* !!!!(07.28) : 마진R 수정 */
    margin-right: 20px;
    /* !!!!(07.28) : 모서리값수정 */
    border-radius: 25px;
    overflow: hidden;
    /* !!!!(07.28) : 추가 */
    letter-spacing: -1px;
    /* float: left; */
}

.popular .product_img {
    /* !!!!(07.28) : 너비수정 */
    width: 160px;
    height: 160px;
    overflow: hidden;
}

.popular .product_img img {
    width: 100%;
}

/* 상품정보 묶음 */
.popular .product_info {
    width: 90%;
    /* !!!!(07.28) : margin-top수정 */
    margin: 6px auto;
    text-align: center;
}

/* !!!!(07.28) : 수정 */
/* 상품-이름 */

/* !!!!(07.28) : 수정 */
/* 상품-할인가격 */


/* 상품-원래가격 */
.popular .price span {
    text-decoration: line-through red;
/* !!!!(07.28) : 글꼴수정 */
    font-size: 12px;
    font-weight: 600;
    color: #666;
}

/* 새상품 */
.new {
    width: 100%;
    margin-bottom: 50px;
}

.new_top {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 15px;
}

.new .view_all img {
    width: 8px;
}

.new .slide_container {
    width: 420px;
}

/* 상품 */
/* !!!!(07.28) : 수정 */
.new .product {
    width: 100%;
    height: 170px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.new .product_img {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 25px;
    background-size: cover;
}

/* .new .product {
    width: 100%;
    height: 120px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.new .product_img {
    width: 90px;
    height: 90px;
    overflow: hidden;
    border-radius: 20px;
}
 */
/* .new .product_img img {
    width: 100%;
} */

/* 상품정보 묶음 */
.new .product_info {
    width: 55%;
    /* background-color: rgba(0, 0, 0, .2); */
}

/* 상품-이름 */
.new .name {
    font-size: 20px;
    font-weight: 800;
}

/* 상품-할인가격 */
.new .price {
    /* !!!!(07.28) : 수정 */
    font-size: 17px;
    font-weight: 600;
}

/* 상품-원래가격 */
.new .price span {
    text-decoration: line-through red;
    /* !!!!(07.28) : 글꼴수정 */
    font-size: 12px;
    font-weight: 600;
    color: #666;
}

</style>