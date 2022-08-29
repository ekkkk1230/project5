<!--
  * 앱제작 팀프로젝트(4조_박소윤, 이주현, 김시온, 송은경) : 마음아지트

    * 메인 페이지(index)
    * 작성자 : 김시온
    * 작성일 : 2022.07.20
    * 업데이트 : 2022.07.27 (수정 : 이주현, 박소윤, 송은경)
    
    //// : 시멘틱 영역표시
    ???? : 해결해야할 부분
    !!!! : 수정사항
 -->


<template>
    <div class="wrap">
        <!-- //// 헤더 //// -->
        <!-- //// 섹션 //// -->
        <section>
            <!-- 데일리루틴 -->
            <div class="section1">
                <h2>Daily Routine</h2>
                <p class="h2_p">바쁜 하루 속 하루 루틴을 시작해보세요!</p>
                <div class="daily_routine">
                    <div>
                        <a href="#none">
                            <img src="../assets/healingView/D_R_1.png" alt="하루루틴1" width="100" height="100">
                        </a>
                        <p class="time">7-10분</p>
                        <p class="place">Morning</p>
                    </div>
                    <div>
                        <a href="#none">
                            <img src="../assets/healingView/D_R_2.png" alt="하루루틴2" width="100" height="100">
                        </a>
                        <p class="time">7-10분</p>
                        <p class="place">To Work</p>
                    </div>
                    <div>
                        <a href="#none">
                            <img src="../assets/healingView/D_R_3.png" alt="하루루틴3" width="100" height="100">
                        </a>
                        <p class="time">7-10분</p>
                        <p class="place">To Home</p>
                    </div>
                    <div>
                        <a href="#none">
                            <img src="../assets/healingView/D_R_4.png" alt="하루루틴4" width="100" height="100">
                        </a>
                        <p class="time">7-10분</p>
                        <p class="place">At Sleep</p>
                    </div>
                </div>
            </div>
            <!-- 상황별 -->
            <div class="section2">
                <h2>상황별</h2>
                <p class="h2_p">일상 속 다양한 상황에서 아지트와 함께해보세요.</p>

                <div class="situation">
                    <!-- 상황별 - 위 -->
                    <a class="top" href="#">
                        <div class="contets_field">
                            <img class="play_icon" src="../assets/healingView/play_bt.png" alt="재생버튼" width="28" height="28">
                            <div class="text_field">
                                <p class="note">가볍게 듣는 명상 음악 ! 지금 시작해보세요</p>
                                <p class="title">Everyday <br>
                                    Meditation
                                </p>
                            </div>
                        </div>
                    </a>
                    <!-- 상황별 - 아래 -->
                    <a class="bottom bottom_01" href="#">
                        <div class="contets_field">
                            <img class="play_icon" src="../assets/healingView/play_bt.png" alt="재생버튼" width="28" height="28">
                            <div class="text_field">
                                <p class="title">Sleeping</p>
                                <p class="note">아지트가<br> 숙면을 도와드릴게요</p>
                            </div>
                        </div>
                    </a>
                    <a class="bottom bottom_02" href="#">
                        <div class="contets_field">
                            <img class="play_icon" src="../assets/healingView/play_bt.png" alt="재생버튼" width="28" height="28">
                            <div class="text_field">
                                <p class="title">Healing</p>
                                <p class="note">긍정 힘이 솟는<br> 음악을 들어보세요</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <!-- //// 푸터 //// -->
        <Footer></Footer>
    </div>

</template>

<script>
import Footer from '../components/Footer.vue';

export default {
    name: 'healing',
    components: {
        Footer : Footer,
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

h2{
    font-size: 25px;
    margin-bottom: 15px;
    text-align: left
}

p.h2_p{
    /* !!!!(02.29) : 글꼴 수정 */
    font-size: 16px;
    margin-bottom: 30px;
    letter-spacing: -0.5px;
}

.wrap {
    width: 100%;
    max-width: 767px;
    min-width: 385px;
    margin: 0 auto;
    overflow: hidden;
}

/* //// 섹션 //// */
section{
    width: calc(100% - 40px);
    margin: 40px auto 110px;
}

/* //// 헤더 //// */

/* 데일리루틴 */
.section1 {
    width: 100%;
    margin: 0px auto 50px;
}

.daily_routine{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 50px auto;
}

.daily_routine div{
    text-align: center;
    letter-spacing: -0.5px;
}

.daily_routine .time {
    margin-top: 20px;
    font-size: 14px;
}

.daily_routine .place {
    font-size: 16px;
    font-weight: 600;
}


/* 상황별 */
.section2 {
    width: 100%;
    margin: 50px auto 110px;
}

.situation {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}

.situation p {
    color: #fff;
    font-size: 16px;
    letter-spacing: -0.5px;
}

/* 상황별 - 위 */
.top {
    display: block;
    width: 100%;
    height: 240px;
    position: relative;
    background: url(../assets/healingView/situation1.png) no-repeat;
    background-size: cover;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
}

.top .contets_field,
.bottom .contets_field {
    position: relative;
    width: calc(100% - 35px);
    height: calc(100% - 35px);
}

.top .play_icon {
    position: absolute;
    top: 0%;
    right: 0;
}

.top .text_field {
    position: absolute;
    left: 0%;
    bottom: 20px;
}

.top .note {
    margin-bottom: 10px;
}

.top .title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
}

/* 상황별 - 아래쪽 */
.bottom {
    display: block;
    width: 47.5%;
    height: 180px;
    position: relative;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom_01 {
    background: url(../assets/healingView/situation2.png) no-repeat;
    background-size: cover;
}

.bottom_02 {
    background: url(../assets/healingView/situation3.png) no-repeat;
    background-size: cover;
}

.bottom .text_field {
    text-align: left;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.bottom .title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.bottom .note {
    margin-top: 80px;
}

.bottom .play_icon {
    position: absolute;
    top: 0;
    right: 0;
}



</style>