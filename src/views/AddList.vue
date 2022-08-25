<!--
  * 앱제작 팀프로젝트(4조_박소윤, 이주현, 김시온, 송은경) : 마음아지트

    * 리스트작성 페이지(list-add)
    * 작성자 : 송은경
    * 작성일 : 2022.07.20
    * 업데이트 : 2022.08.01 (수정 : 이주현, 박소윤)

    //// : 시멘틱 영역표시
    ???? : 해결해야할 부분
    !!!! : 수정사항
 -->

<template>
    <div class="wrap">
        <h1 class="hidden">위시리스트</h1>
        <!-- //// 섹션 //// -->
        <section>
            <!-- 윗쪽 영역 -->
            <div class="list-top">
                <!-- 달력버튼 -->
                <div class="calendar">
                    <router-link to="/DiaryMain">
                    <button><img src="../assets/addListView/calendar.png" alt="달력에서선택" width="30"></button>
                    </router-link>

                </div>
                <!-- 오늘 날짜 -->
                <div class="today">
                    <h2>July, 2022</h2>
                    <p>2022.07.18</p>
                </div>
                <!-- 인접 날짜선택 -->
                <ul class="select-date">
                    <li>
                        <p class="day_week">SAT</p>
                        <p class="date">16</p>
                    </li>
                    <li>
                        <p class="day_week">SUN</p>
                        <p class="date">17</p>
                    </li>
                    <li class="select">
                        <p class="day_week">MON</p>
                        <p class="date">18</p>
                    </li>
                    <li>
                        <p class="day_week">TUE</p>
                        <p class="date">19</p>
                    </li>
                    <li>
                        <p class="day_week">WED</p>
                        <p class="date">20</p>
                    </li>
                </ul>
            </div>
            <!-- 리스트 작성란(아래쪽 영역) -->
            <div class="list-bottom">
                <!-- 리스트 작성 묶음 -->
                <div class="diary_add"> 
                    <!-- 리스트 추가 -->
                    <div class="section1">
                        <h3>리스트 추가</h3>
                        <!-- !!!!(07.29) : 시온이꺼 복붙 -->
                        <!-- ???? : 체크박스로 만들어서 중복체크 됨 -->
                        <form class="form_diary_radio">
                            <router-link to="ListDairy" class="checkbox">
                                <div class="checkbox">
                                    <input class="checkbox1" type="checkbox" id="checkbox1" value="일기" name="diary">
                                    <label for="checkbox1">일기</label>
                                </div>
                            </router-link>
                            <div class="checkbox">
                                <input class="checkbox2" type="checkbox" id="checkbox2" value="리스트" name="list">
                                <label for="checkbox2">리스트</label>
                            </div>
                        </form>
                    </div>
                    <!-- 알람설정 -->
                    <div class="section2">
                        <h4>알람설정</h4>
                        <div class="alarm">
                            <div class="time_set alarm-start"><span>12:00</span><span class="alarm_img"></span></div>
                            <div class="time_set alarm-end"><span>17:00</span><span class="alarm_img"></span ></div>
                        </div>
                    </div>
                    <!-- 리스트 내용 -->
                    <div class="section3">
                        <h4>리스트 내용</h4>
                        <textarea class="list_input_field" placeholder="리스트 내용을 작성하세요"></textarea>
                    </div>
                    <!-- 버튼 -->
                    <div class="section4">
                        <button class="cancel">취소</button>
                        <button class="save">저장</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- //// 푸터 //// -->
    <Footer></Footer>
</template>

<script scoped>
import Footer from '../components/Footer.vue';

export default {
    name: 'addList',
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
  /*   -ms-overflow-style: none; */
    /* IE and Edge */
 /*    scrollbar-width: none; */
    /* Firefox */
}

/* y축 스크롤바 숨기기(작동o) */
.html,
body::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Opera*/
}

/* 레이아웃 --------------------------------------------------------------- */

/* !!!!(07.28) : h태그 수정/추가 */
h3 {
    font-size: 25px;
    margin-bottom: 20px;
}

h4 {
    font-size: 23px;
    margin-bottom: 20px;
}

.wrap{
    width: 100%;
    max-width: 767px;
    min-width: 385px;
    margin: 0 auto;
    /* border: 1px solid #000; */
}

/* //// 섹션 //// */
section{
/*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: 100%;
    margin: 0 auto;

    /* 개별 추가 */
    background: #68b39f;
}

/* 위쪽 영역 */
.list-top{
    width: calc(100% - 40px);
    margin: 0 auto;
    height: 30%;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}

/* 달력버튼 */
.list-top .calendar{
    display: flex;
    justify-content: end;
    height: 50px;
    margin-top: 40px;
}
.list-top .calendar button{
    background: #fff;
    padding: 10px;
    border-radius: 10px;
}

/* 오늘 날짜 */
.today {
    margin-bottom: 15px;
    /* background-color: #CFD345; */
}

.today h2,
.today p{
    color: #fff;
    /* !!!!(07.28 : 패딩B수정) */
    padding-bottom: 10px;
}

.today h2 {
    font-size: 29px;
}

/* !!!!(07.28 : 추가) */
.today p {
    font-size: 20px;
}

/* 인접 날짜선택 */
.list-top .select-date{
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
}
.list-top .select-date li{
    flex: 1;
    height: 80px;
    background-color: #2d6974;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

.list-top .select-date .day_week,
.list-top .select-date .date{
    /* font-size: ; */
    line-height: 22px;
    color: #fff;
}

/* select된 날짜 */
.list-top .select-date li.select{
    background-color: #fff;
}
.list-top .select-date li.select p{
    color: #000
}

/* 리스트 작성란(아래쪽 영역) */
.list-bottom{
    width: 100%;
    background-color: #fff;
    border-radius: 50px 50px 0 0;
    margin: 50px auto 0;
    /* !!!! 수정 : 아래에 푸터가 붙을 여백 70px 추가함 */
    padding: 50px 0 120px;
}

.list-bottom .diary_add{
    width: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    /* !!!! : gap 여백 수정(디자인시안) */
    gap: 40px;
}

/* 리스트 추가 */
/* !!!!(07.29) : 시온이꺼 복붙 */
.section1 .form_diary_radio {
    display: flex;
    flex-flow: row nowrap;
    gap: 50px;
    font-weight: 800;
}

/* 일기 추가_input1 */
.checkbox1 + label{
    position: relative;
}
.checkbox input[type="checkbox"].checkbox1{
    display: none;
}
.checkbox input[type="checkbox"].checkbox1 + label:before { /* 체크박스 배경 */
    display: inline-block;
    content: '';
    width: 1.2em; 
    height: 1.2em;
    background-color: #CFD345;
    border-radius: 50%;
    margin: 0 7px -3px 0;
}
.checkbox input[type="checkbox"].checkbox1 + label:after { /* 체크 마크 */
    position: absolute;
    left: 3px;
    top: 3px;
    content: '✔';
    font-size: 0.9em;
    line-height: 0.8;
    color: #fff;
    transition: all .25s;
}
[type="checkbox"].checkbox1 + label:after { /* 기본 상태 - 투명에 크기 0 */
    opacity: 0;
    transform: scale(0);
}
[type="checkbox"]:checked.checkbox1 + label:after { /* 체크 상태 - 불투명에 크기 1 */
    opacity: 1;
    transform: scale(1);
}

/* 일기 추가_input2 */
.checkbox2 + label{
    position: relative;
}
.checkbox input[type="checkbox"].checkbox2{
    display: none;
}
.checkbox input[type="checkbox"].checkbox2 + label:before { /* 체크박스 배경 */
    display: inline-block;
    content: '';
    width: 1.2em; 
    height: 1.2em;
    background-color: #FDA769;
    border-radius: 50%;
    margin: 0 7px -3px 0;
}
.checkbox input[type="checkbox"].checkbox2 + label:after { /* 체크 마크 */
    position: absolute;
    left: 3px;
    top: 3px;
    content: '✔';
    font-size: 0.9em;
    line-height: 0.8;
    color: #fff;
    transition: all .25s;
}
[type="checkbox"].checkbox2 + label:after { /* 기본 상태 - 투명에 크기 0 */
    opacity: 0;
    transform: scale(0);
}
[type="checkbox"]:checked.checkbox2 + label:after { /* 체크 상태 - 불투명에 크기 1 */
    opacity: 1;
    transform: scale(1);
}
/* .list-bottom .section1{
    width: 100%;
    font-size: 1em;
}

.list-bottom .section1 .form_list_radio {
    display: flex;
    flex-flow: row nowrap;
    gap: 50px;
    font-weight: 800;
} */

/* 알람설정 */
.list-bottom .section2{
    width: 100%;
    /* !!!!(07.29) : 추가 */
    font-size: 20px;
}
.list-bottom .section2 .alarm{
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    gap: 20px;
}
.list-bottom .section2 .time_set{
    flex: 1;
    background-color: #e0ecde;
    padding: 15px;
    border-radius: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
}
.list-bottom .section2 .alarm_img{
    width: 25px;
    height: 25px;
    background: url("../assets/addListView/alarm.png") no-repeat center;
    background-size: cover;
}

/* 리스트 내용 */
.list-bottom .section3{
    width: 100%;
}
.list-bottom .section3 .list_input_field{
    width: 100%;
    height: 108px;
    padding: 20px;
    border-radius: 15px;
    background: #e0ecde;
    /* !!!!(07.29) : 추가 */
    font-size: 18px;
}

/* !!!!(07.29) : 추가 */
/* placeholder스타일 */
::placeholder {
    font-size: 18px;
    font-weight: 400;
    opacity: 1; /* Firefox */
}

/* 버튼 */
.list-bottom .section4{
    display: flex;
    flex-flow: row nowrap;
    justify-content: end;
    gap: 10px;
}

.list-bottom .section4 button{
    padding: 10px 25px;
    background-color: #fec868;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    font-size: 1em;
}

/* !!!! : 취소버튼 색을 바꾸어봄 */
.list-bottom .section4 .cancel {
    background-color: #d7d7d7;
}

/* //// 푸터 //// */
footer{
    /* !!!! : 위치지정 포지션 fixed로 수정 */
    position: fixed;
    left: 0;
    bottom: 20px;
    width: 100%;
    height: 46px;
/*     margin: 0 auto;
    margin-left: -20px; */
}
footer .footer_all{
    width: (100% - 40px);
    background-color: #68b39f;
    padding: 20px 0;
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    justify-content: space-between;
}
footer .footer_all div{
    width: 100px;
    height: 35px;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
}
footer .footer_all div p{
    font-size: 0.7em;
    font-weight: 600;
    color: #ffffff;
    width: 100%;
    height: 30px;
}
footer .home{
    padding-bottom: 30px;
}
</style>