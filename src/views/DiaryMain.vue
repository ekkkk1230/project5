<!--
  * 앱제작 팀프로젝트(4조_박소윤, 이주현, 김시온, 송은경) : 마음아지트

    * 다이어리 페이지(diary-main)
    * 작성자 : 박소윤
    * 작성일 : 2022.07.20
    * 업데이트 : 2022.07.27 (수정 : 이주현, 박소윤, 송은경)

    //// : 시멘틱 영역표시
    ???? : 해결해야할 부분
    !!!! : 수정사항
 -->

<template>
    <div class="wrap">
        <h1 class="hidden">마음아지트 일지 작성란</h1>
        <!-- //// section //// -->
        <section>
            <!-- 일지 윗부분 -->
            <div class="diary_top">
                <!-- 일지쓰기 버튼 -->
                <!-- !!!!(07.28) : 테스트용 추가 -->
                <!-- <a class="write_btn cf" href="#none"> -->
                <router-link to="/AddDiary" class="write_btn cf">
                    <img src="../assets/diaryMainView/write_btn.png" alt="write_btn">
                </router-link>
                
                <!-- 달력 -->
                <div class="calender">
                    <b class="monthYear">{{ $store.state.nowMonth }}, {{ nowYear }}</b>
                    <p class="allMonth"> {{ nowDate }} </p>
                    <table id="calendar">
                    <thead>
                        <tr>
                            <th v-for="day in week" :key="day">{{day}}</th>
                        </tr>
                    </thead>
                    <tr class="dateSelector">
                        <td><input type="button" value="<" @click="prevCalendar" ></td>
                        <th colspan="5" id="tbCalendarYM"></th>
                        <td><input type="button" value=">" @click="nextCalendar"></td>
                    </tr>
                </table>
                </div>
                


            </div>
            <!-- 일지 아래부분 -->
            <div class="diary_bottom" ref="bottom" @click="onClick">
                <div class="diary_bottom_title">
                    <h2>오늘의 기록</h2>
                    <img src="../assets/diaryMainView/delete_btn.png" width="25" alt="delete_btn" class="delete_btn">
                </div>
                <!-- 기록 내용 묶음 -->
                <div class="record_wrap">
                    <!-- 기록 내용 부분 -->
                    <div class="record_wrap_content">
                        <h3>{{nowDate}}</h3>
                        <!-- 기록 -->
                        <div class="content_wrap diary">
                            <div class="timeline">
                                <img src="../assets/diaryMainView/timeline_diary_01.png" width="19" alt="timeline">
                                <img src="../assets/diaryMainView/timeline_diary_02.png" width="1" alt="timeline">
                            </div>
                            <div class="category">
                                <p>Diary</p>
                                <img src="../assets/diaryMainView/sticker.png" alt="sticker" class="sticker">
                            </div>
                            <div class="content">
                                <p class="title">오늘은 칭찬을 받았다!</p>
                                <p class="note">
                                    칭찬받는건 너무 기분좋은 일이다. 어제보다 더 나은 내가 된 기분이다 :)
                                </p>
                            </div>
                        </div>
                        <div class="content_wrap list">
                            <div class="timeline">
                                <img src="../assets/diaryMainView/timeline_list_01.png" width="19" alt="timeline">
                                <img src="../assets/diaryMainView/timeline_list_02.png" width="1" alt="timeline">
                            </div>
                            <div class="category">
                                <p>List</p>
                            </div>
                            <div class="content">
                                <p class="title">뽀삐 쓰다듬기</p>
                            </div>
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


export default {
    name: 'diaryMain',
    data() {
        return {
            timer: null,
            nowYear: '',
            nowDate: '',
            nowTime: '',
            days:'',
            click: 1,

            week: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            monthNum: '',

            today: new Date(),
            date: new Date(),
        }
    },
    components: {
        Footer : Footer,
    },
    computed:{
        
    },
    mounted () {
        this.setNowTimes();
        this.buildCalendar();
    }, 
    methods: {
        setNowTimes(){
            let nowDate = new Date();
            let yy = String(nowDate.getFullYear());
            let mm = nowDate.getMonth()+1;
            let dd = String(nowDate.getDate() < 10? '0' + nowDate.getDate() : nowDate.getDate());
            this.nowDate = yy + '.' + mm + '.' + dd;

            let month = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                        ];
            this.$store.state.nowMonth = month[nowDate.getMonth()];
            this.monthNum = nowDate.getMonth() + 1;
            this.nowYear = yy;

            this.days = this.week[nowDate.getDay()];
        },
        onClick(){
            if(this.click === 1){
                this.$refs.bottom.style.bottom = "0"
                this.click = 0
            }else if(this.click === 0){
                this.$refs.bottom.style.bottom = "-40%"
                this.click = 1
            }
        },

        prevCalendar(){
            this.today = new Date(this.today.getFullYear(), this.today.getMonth() - 1, this.today.getDate());
            this.buildCalendar();
        },
        nextCalendar(){
            this.today = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate());
            this.buildCalendar();
        },
        buildCalendar(){
            let doMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1);

            let lastDate = new Date(this.today.getFullYear(), this.today.getMonth()+1,0);

            let tbCalendar = document.querySelector('#calendar');
            let tbCalendarYM = document.querySelector('#tbCalendarYM');
            tbCalendarYM.innerText = this.today.getFullYear()+'년 '+(this.today.getMonth()+1)+'월';

            while (tbCalendar.rows.length > 2) {
                  tbCalendar.deleteRow(tbCalendar.rows.length-1);
             }
             var row = null;
             row = tbCalendar.insertRow();
             row.style.display = 'flex'
             let cell = null;
             var cnt = 0;
             for (let i=0; i<doMonth.getDay(); i++) {
                  cell = row.insertCell();
                  row.style.display = 'flex'
                  cell.style.width = '14.2%';
                  cnt = cnt + 1;
             }
             for (let i=1; i<=lastDate.getDate(); i++) { 
                  cell = row.insertCell();
                  row.style.display = 'flex'
                  row.style.height = '60px'
                  cell.style.width = '14.2%';
                  cell.style.textAlign = 'center';
                  cell.style.fontWeight = '600';
                  cell.style.color = '#ffffff';
                  cell.innerHTML = i;
                  cnt = cnt + 1;
              if (cnt % 7 == 1) {
                cell.innerHTML = i
              }       
              if (cnt%7 == 0){
                  cell.innerHTML = i
                   row = calendar.insertRow();
              }
              if (this.today.getFullYear() == this.date.getFullYear()
                 && this.today.getMonth() == this.date.getMonth()
                 && i == this.date.getDate()) {
                cell.bgColor = "#3d6875";
                cell.style.borderRadius = "10px";
               }
             }

        }
    },
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

/* //// 레이아웃 시작 //// */

.wrap {
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
    width: calc(100%-40px);
    margin: 40px auto 110px;
}

/* 일지쓰기 버튼 */
.write_btn {
    position: relative;
    margin-top: 40px;
    margin-right: 20px;
    display: block;
    float: right;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
}

.write_btn img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

/* !!!!(07.29) : 수정 */
/* 일지 윗부분 */
.diary_top {
    width: 100%;
    max-width: 767px;
    min-width: 385px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #68B39F;
}

/* 달력 */
.calender {
    width: calc(100% - 40px);
    height: 650px;
    /* background-color: red; */
    /* !!!!(07.29) : 마진높이 수정 */
    margin: 110px auto;
    position: relative;
    /* background-color: rebeccapurple; */
}


/*========================== 달력 =====================*/
#single-date-picker {
  margin: auto;
}

h1 {
  color: #c7a3b5;
  background: linear-gradient(to right, #e0caca, #d4b8ca, #c7a3b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  font-weight: 300;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}


.calender b, .calender p {
    color: #fff;
}

/* !!!!(07.29) : 추가 */
.calender b {
    display: block;
    font-size: 29px;
    padding-bottom: 10px;
}

/* !!!!(07.29) : 추가 */
.calender p {
    font-size: 20px;
}

/* .calender_img {
    width: 90%;
    display: block;
    position: absolute;
    top: 100px;
    transform: translateX(-50%);
    left: 50%;
} */
table{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center
}
thead{
    width: 100%;
    /* border-bottom: 1px solid #ffffff; */
    margin: 10px auto;
    
}
thead tr{
    display: flex;
    justify-content: space-between;
}
thead th{
    flex: 1;
    text-align: center;
    font-size: 1.5em;
    color: #ffffff
}
thead th:nth-child(1){
    color: #ee817e
}
thead th:nth-child(7){
    color: #4a74f1
}
.dateSelector{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: 1.2em;
    margin: 15px 0 20px;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    padding: 10px;
}
.dateSelector input{
    background-color: transparent;
    font-size: 1.2em;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
}
.dateSelector th{
    color: #ffffff
}
/* table tr td{
    border: 1px solid #ffffff
} */

/* 일지 아래부분 */
.diary_bottom {
    width: 100%;
    height: auto;
    padding: 30px 0 110px;
    /* !!!!(07.29) : 굴곡 수정 */
    border-radius: 50px 50px 0 0;
    background-color: #fff;
    position: fixed;
    bottom: -40%;
    left: 50%;
    transform: translateX(-50%);
    transition: bottom .4s;
    /* 위치 조정(위로 슬라이드시 올라오게) */
}

.diary_bottom_title {
    width: calc(100% - 40px);
    margin: 0px auto 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #68B39F; */
}

h2 {
    font-size: 1.2em;
}

/* 기록 내용 묶음 */
.record_wrap {
    width: calc(100% - 40px);
    border-radius: 20px;
    margin: 0 auto;
    background: #E0ECDE;
    overflow: hidden;
    position: relative;
    /* background-color: aqua; */
}

.record_wrap h3 {
    width: calc(100% - 40px);
    margin: 0 auto 20px;
    font-size: 16px;
    color: #666;
}

.record_wrap_content {
    padding: 20px 0;
}

/* 기록 내용 부분 */
.content_wrap {
    width: calc(100% - 40px);
    height: auto;
    margin: 0px auto;
    right: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 5fr;
    color: #333;
    /* background-color: greenyellow; */
    /* border: 1px #333 solid; */
}

.diary {
    height: 130px;
}

.list {
    height: 50px;
}


.timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: yellow; */
    overflow: hidden;
    grid-column: 1/2;
}

.content_wrap .category {
    grid-column: 2/3;
    text-align: center;
    /* background-color: orange; */
}

.content_wrap .content {
    grid-column: 3/4;
    padding-left: 20px;
}

.sticker {
    display: inline-block;
}

.category p, .content .title {
    font-size: 1em;
    font-weight: 600;
    margin-bottom: 10px;
}

</style>