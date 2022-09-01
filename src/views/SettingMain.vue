<!--
  * 앱제작 팀프로젝트(4조_박소윤, 이주현, 김시온, 송은경) : 마음아지트

    * 마이 페이지(setting-main)
    * 작성자 : 박소윤
    * 작성일 : 2022.07.20
    * 업데이트 : 2022.07.27 (수정 : 이주현, 박소윤, 송은경)

    //// : 시멘틱 영역표시
    ???? : 해결해야할 부분
    !!!! : 수정사항
 -->

<template>
    <div class="pop">
        <div class="pop_inner">
            <div class="pop_header">
                <div class="btn" @click="closePop">
                    <span class="fir"></span>
                    <span class="sec"></span>
                </div>
                <div class="title">
                    <p>마음이 편안해지는</p>
                    <p class="strong">마음아지트 컨텐츠 무제한으로 누리기</p>
                </div>
                <img src="../assets/settingMainView/settingmain_premium.png" alt="명상이미지">
            </div>
            <div class="pop_cont">
                <ul class="top_list">
                    <li>지친 마음을 위로해줄 다양한 힐링 콘텐츠</li>
                    <li>언제 어디서나 구애받지 않고 누리세요</li>
                    <li>숙면을 부르는 편안한 영상과 사운드</li>
                </ul>
                <div class="pay">
                    <p>신규회원 7일 무료체험 기간 중에는 결제되지 않습니다.</p>
                    <div class="price">
                        <div class="discount">
                            <h2 class="month">12개월</h2>
                            <p class="percent">50%할인</p>
                            <h2>35,000원</h2>
                            <p>&#40;약 월 2,900원&#41;</p>
                        </div>
                        <div class="original">
                            <h2 class="month">12개월</h2>
                            <h2>5,900원</h2>
                            <p>&#40;1개월마다&#41;</p>
                        </div>
                    </div>
                    <button>무료체험 및 구독 시작하기</button>
                    <p class="position">언제든 해지하실 수 있습니다.</p>
                </div>
                <ul class="bottom_list">
                    <li>프리미엄 이용권은 자동 갱신 구독 상품으로, 구독 기간동안 마음 아지트의 모든 콘텐츠와 기능을  무제한으로 이용하실 수 있습니다.</li>
                    <li>7일 무료 이용 기간이 끝난 후, 사용자의 플레이스토어 계정으로 매월 혹은 매년 동일한 날짜에 이용 요금이 자동 결제됩니다.</li>
                    <li>현재 구독 기간 종료 시점으로부터 최소 24시간 이내에 자동 갱신을 해지하지 않으면 사용자의 플레이스토어 계정으로 재결제가 이루어집니다.</li>
                    <li>플레이스토어 자동결제 예정일과 실제 프리미엄 이용권 시작일/종료일 표기는 결제시점, 구매 오류 후 구매 복원일, 시차 등으로 인하여 다를 수 있습니다.</li> 
                    <li>자동 결제의 관리 및 해지는 메뉴 > 내 계정 > 관리 혹은 플레이스토어의 메뉴 > 구독관리에서 이용기간 중 언제든 가능합니다</li>
                    <li>환불 및 기타 처리절차는 플레이스토어 규정을 따릅니다.</li>      
                    <li>구매 진행 시 서비스이용약관과 개인정보처리방침을 확인해 주세요.</li>                         
                </ul>
                <div class="button_wrap">
                    <button>서비스이용약관</button>
                    <button>개인정보방침</button>
                </div>
            </div>            
        </div>
    </div>
    <div class="setting_wrap">
        <h1 class="hidden">마이페이지 메인</h1>
        <!-- //// section //// -->
        <section>
            <div class="profile">
                <!-- 1. info 부분 -->
                <div class="setting_profile_info">
                    <!-- info 묶음 -->
                    <div class="info_wrap"> 
                        <!-- 프로필 이미지 -->
                        <img src="../assets/settingMainView/profile_user.png" width="100" alt="setting_img" class="profile_user">
                        <!-- 텍스트 영역 -->
                        <div class="text_field">
                            <p class="profile_title1"><span>만성피로맨</span>&nbsp;님</p>
                            <p class="profile_title2">일반회원</p>
                        </div>
                        <!-- 설정 톱니바퀴 -->
                        <router-link to="/SettingSub" class="setting">
                            <img src="../assets/settingMainView/setting_img.png" alt="setting_img">
                        </router-link>
                    </div>
                </div>
                <!-- 2. 3분할 상태창 -->
                <div class="profile_status">
                <div class="text_field">
                    <!-- 방문일수 -->
                    <div class="visit_date">
                        <p class="title">방문일수</p>
                        <span class="number">365</span>
                    </div>
                    <div class="line"></div>
                    <!-- 명상시간 -->
                    <div class="meditation_time">
                        <p class="title">명상시간 (시)</p>
                        <span class="number">365</span>
                    </div>
                    <div class="line"></div>
                    <!-- 포인트 -->
                    <div class="user_point">
                        <p class="title">포인트</p>
                        <span class="number">1,212</span><span>&nbsp;pt</span>
                    </div>
                </div>
                </div>
                <!-- 3. 구독 / 선물 -->
                <div class="premium_wrap">
                    <div class="premium_self" @click="premium">
                        <img src="../assets/settingMainView/premium_self.png" width="50" alt="premium_self">
                        <span>프리미엄 혜택 구독하기</span>
                    </div>
                    <div class="premium_other">
                        <img src="../assets/settingMainView/premium_other.png" width="50" alt="premium_other">
                        <span>선물하기</span>
                    </div>
                </div>
                <!-- 4. 설정 목록 부분 -->
                <ul class="account_list">
                    <li>
                        <div class="title">
                            <img src="../assets/settingMainView/account_list1.png" alt="account_list1">
                            <a href="#none">나의 명상 기록</a>
                        </div>
                        <img src="../assets/settingMainView/arrow.png" alt="arrow" class="arrow">
                    </li>
                    <li>
                        <div class="title">
                            <img src="../assets/settingMainView/account_list2.png" alt="account_list2">
                            <a href="#none">내 계정</a>
                        </div>
                        <img src="../assets/settingMainView/arrow.png" alt="arrow" class="arrow">
                    </li>
                    <li>
                        <div class="title">
                            <img src="../assets/settingMainView/account_list3.png" alt="account_list3">
                            <a href="#none">나의 구매 / 찜 내역</a>
                        </div>
                        <img src="../assets/settingMainView/arrow.png" alt="arrow" class="arrow">
                    </li>
                    <li>
                        <div class="title">
                            <img src="../assets/settingMainView/account_list4.png" alt="account_list4">
                            <a href="#none">고객센터</a>
                        </div>
                        <img src="../assets/settingMainView/arrow.png" alt="arrow" class="arrow">
                    </li>
                </ul>
                <!-- 5. 배너 부분 -->
                <div class="mypage_banner"
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
            </div>
        </section>
        <!-- //// 푸터 //// -->
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import healingBanners from '../data/healingBanner.js';

export default {
    name: 'settingMain',
    data(){
        return{
            healingBanners,

            itemIdx: 0,
            timer: null,
            itemWidth: 0,
            itemOffset: 0,
        }
    },
    components: {
        Footer : Footer,
    },
    computed: {
        getItemWidth: () => {
            const item_width = document.querySelector('.mypage_banner').offsetWidth;
            return item_width;
        }
    },
    mounted() {
        this.itemWidth = this.getItemWidth;
        this.itemImg = document.querySelectorAll('.mypage_banner .slide_img');
        this.itemWrap = document.querySelector('.mypage_banner .slide_container');
        this.startRotation();
        this.cloneItem(this.itemImg, this.healingBanners, this.itemOffset, this.itemWidth, this.itemIdx); 
    },
    methods: {
        startRotation(){
            this.timer = setInterval(this.next, 2500);
        },
        stopRotation(){
            clearInterval(this.timer);
            this.timer = null;
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

            img = document.querySelectorAll('.mypage_banner .slide_img');
            offset = width*idx+1;
            img.forEach(item => item.setAttribute('style', `left: -${offset}px`))
        },
        /* prev(){
            this.itemIdx --;
            if(this.itemIdx > 0){
                this.itemOffset = this.itemWidth*(this.itemIdx - 1);
                this.itemImg.forEach(item => item.setAttribute('style', `left: -${this.itemOffset}px`))
            }
        }, */
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
        premium(){
            document.querySelector('.pop').style.display = 'block'
        },
        closePop(){
            document.querySelector('.pop').style.display = 'none'
        }
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

/* 레이아웃 --------------------------------------------------------------- */
.pop{
    position: absolute;
    width: 100%;
    height: 1200px;
    max-width: 767px;
    min-width: 385px;
    margin: 0 auto;
    z-index: 5;
    background: #fff;
    left: 50%;
    transform: translate(-50%);
    display: none;
}
.pop_inner{
    width: calc(100% - 40px);
    margin: 0 auto;
}
.pop_header{
    position: absolute;
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    background: linear-gradient(to bottom, rgba(45, 105, 116, 1), rgba(104, 179, 159, 1));
    left: 0;
    border-radius: 0 0 50px 0;
}
.pop_header .btn{
    width: 25px;
    height: 25px;
    position: relative;
    top: 20px;
    left: 20px;
    cursor: pointer;
}
.pop_header .btn span{
    display: block;
    width: 100%;
    border: 1px solid #ffffff;
}
.pop_header .btn span.fir{
    transform: rotate(45deg);    
}
.pop_header .btn span.sec{
    transform: rotate(-45deg); 
    position: relative;
    top: -2px;   
}
.pop_header .title{
    margin-top: 30px;
    margin-left: 20px;
}
.pop_header .title p{
    color: #ffffff;
    font-size: 1.2em;
}
.pop_header .title p.strong{
    font-weight: 600;
}
.pop_header img{
    width: 140px;
    position: absolute;
    right: 30px;
    bottom: 10px;
}
.pop_cont{
    position: relative;
    top: 220px;
    display: flex;
    flex-flow: column;
    gap: 30px;
}

.top_list{
    font-size: 0.9em;
}
.top_list li{
    background: url(../assets/settingMainView/list-type.png) no-repeat left center;
    padding-left: 30px;
    margin: 5px 0;
}

.pay p{
    font-size: 0.8em;
    text-align: center;
}
.price{
    display: flex;
    justify-content: center;
    gap: 20px;
}
.price div{
    width: 40%;
    height: 180px;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 8px #333;
    margin: 30px 0;
}
.price div h2{
    margin: 15px 0;
}
.price div.discount{
    background: linear-gradient(to bottom, rgba(45, 105, 116, 1), rgba(104, 179, 159, 1));
}
.price div.discount h2{
    color: #fff;
}
.price div.discount p{
    color: #fff;
}
.price div.discount p.percent{
    padding: 3px 10px;
    position: relative;
    top: 15px;
    border-radius: 10px;
    background: rgba(255, 255, 255, .5);
}
.original .month{
    margin-bottom: 35px;
}
.pay button{
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 1.1em;
    padding: 15px 50px;
    border-radius: 30px;
    background-color: #FF922D;
    color: #fff;
    font-weight: 600;
    box-shadow: 0 0 4px #333;;
}
.pay .position{
    margin-top: 60px;
    font-size: 1em;
}

.bottom_list {
    width: 90%;
    margin: 0 auto;
}
.bottom_list li{
    color: #a9a9a9;
    margin: 10px 0;
}
.bottom_list li:before{
    content: '-';
    display: inline-block;
    position: relative;
    top: -3px;
    margin-right: 5px;
}
.button_wrap{
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-flow: row;
    gap: 10px;
}
button{
    background: transparent;
    font-size: 1em;
    width: 120px;
    color: #a9a9a9;
    border-bottom: 1px solid #a9a9a9;
}

.setting_wrap {
    width: 100%;
    max-width: 767px;
    min-width: 385px;
    margin: 0 auto;
    /* border: 1px solid #000; */
}

/* //// 섹션 //// */
section {
/*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: 100%;
    height: auto;
    margin: 0 auto 110px;
}

.profile {
    width: 100%;
    position: relative;
}

/* info 부분 */
.setting_profile_info {
    display: inline-block;
    width: 100%;
    height: 253px;
    background-color: #E0ECDE;
    border-radius: 0 0 0 50px;
    position: relative;
}

.info_wrap {
    width: calc(100% - 40px);
    /* border: 1px solid black; */
    height: 150px;
    margin: 0 auto;
    margin-top: 40px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* 텍스트 영역 */
.info_wrap .text_field {
    width: 55%;
    color: #2D6974;
    font-size: 1.3rem;
    line-height: 35px;
    /* background-color: olivedrab; */
}

.profile_title1 span {
    color: #333;
    font-weight: 600;
    font-size: 1.6rem;
}

.profile_title2 {
    font-size: 1.2rem;
    font-weight: 500;
}

/* 설정 톱니바퀴 이미지 */
.setting {
    align-self: flex-start;
}

/* 3분할 상태창 */
.profile_status {
    width: 90%;
    height: 119px;
    background-color: #68B39F;
    position: absolute;
    right: 0;
    top: 200px;
    border-radius: 45px 0 0 45px;
}

/* !!!!(07.29) : 추가 */
.profile_status span {
    color: #fff;
}

.profile_status .text_field {
    width: calc(100% - 60px);
    height: 119px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.profile_status > div{
    text-align: center;
    color: #fff;
}

.profile_status .title {
    color: rgba(255, 255, 255, 1);
    margin-bottom: 5px;
    /* !!!!(07.29) : 추가 */
    letter-spacing: -1px;
}

/* div 사이 막대 */
.line {
    width: 1px;
    height: 40px;
    background-color: rgba(255, 255, 255, .8);
}

.profile_status .number {
    font-size: 1.8rem;
    font-weight: 600;
}

/* 구독 / 선물 */
.premium_wrap {
    width: calc(100% - 40px);
    height: 180px;
    margin: 115px auto 50px;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    text-align: center;
}

.premium_wrap > div img {
    position: absolute;
    transform: translate(-50%, -50px);
    left: 50%;
    top: 50%;
}

.premium_self {
    grid-column: 1/2;
    background-color: #2D6974;
    border-radius: 40px;
    position: relative;
    cursor: pointer;
}

.premium_self span,
.premium_other span {
    display: inline-block;
    width: 120px;
    height: 50px;
    margin-top: 105px;
    /* background-color: rebeccapurple; */
    color: #fff;
    /* !!!!(07.29) : 사이즈 */
    font-size: 18px;
    line-height: 27px;
}

.premium_other span {
    line-height: 50px;
}

.premium_other {
    grid-column: 2/3;
    background-color: #68B39F ;
    border-radius: 40px;
    position: relative;
    cursor: pointer;
}

/* 설정 목록 부분 */
.account_list {
    width: calc(100% - 40px);
    margin: 50px auto;
    /* border: 1px solid black; */
}

.account_list li {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellowgreen; */
}

/* !!!!(07.29) : 추가 */
.account_list div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.account_list a {
    padding-left: 10px;
    font-size: 20px;
}

/* 힐링배너 */
.mypage_banner {
    width: 100%;
    overflow: hidden;
    margin: 50px auto;
}

.mypage_banner .slide_container {
    width: 100%;
    display: flex;
    transition: all .5px;
    /* transform: translateX(-100vw); */
}

.mypage_banner .slide_img {
    width: 100%;
    flex-shrink: 0;
    position: relative;
    left: 0;
    transition: all .4s;
}

.mypage_banner .slide_img img {
    width: 100%;
}

.mypage_banner p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* !!!!(07.28) : 글꼴스타일 추가 */
    font-size: 22px;
    color: #333;
    letter-spacing: -1px;
}

/* !!!!(07.28) : 글꼴스타일 추가 */
.mypage_banner p span {
    font-size: 24px;
    font-weight: 800;
}

</style>