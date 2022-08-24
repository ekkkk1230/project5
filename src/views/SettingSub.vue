<!--
  * 앱제작 팀프로젝트(4조_박소윤, 이주현, 김시온, 송은경) : 마음아지트

    * 설정 페이지(setting)
    * 작성자 : 송은경
    * 작성일 : 2022.07.20
    * 업데이트 : 2022.07.27 (수정 : 이주현, 박소윤)

    //// : 시멘틱 영역표시
    ???? : 해결해야할 부분
    !!!! : 수정사항
 -->
<template>
    <div class="wrap">
        <h1 class="hidden">앱 설정</h1>
        <!-- //// 헤더 //// -->
        <header>
            <router-link to="/SettingMain" class="back_bt">
                <img src="../assets/settingSubview/back_bt.png" width="11" alt="뒤로가기"><span>앱 설정</span>
            </router-link>
        </header>
        <!-- //// 섹션 //// -->
        <section>
            <!-- !!!! : 너무 복잡해서 새로 짰음 -->
            <div class="setting">
                <h2 class="title"><span>설정</span></h2>
                <ul>
                    <li class="ar"><a href="#none"><span>알람</span><img src="../assets/settingSubview/btn.png" alt="알람"></a></li>
                    <li><a href="#none"><span>푸시 알림 설정</span><img src="../assets/settingSubview/btn.png" alt="알람"></a></li>
                    <li>
                        <a href="#none">
                            <span>앱 잠금</span>
                            <label for="toggle" class="toggleSwitch" @click="switchOn">
                                <span class="toggleButton"></span>
                            </label>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="info">
                <h2 class="title"><span>정보</span></h2>
                <ul>
                    <li><a href="#none"><span>서비스 이용약관</span><img src="../assets/settingSubview/btn.png" alt="알람"></a></li>
                    <li><a href="#none"><span>개인정보 처리방침</span><img src="../assets/settingSubview/btn.png" alt="알람"></a></li>
                </ul>
            </div>
            
            <!-- 하단ui 묶음 -->
            <div class="bottom_wrap">
                <!-- <button @click="kakaoLogout" class="logout_bt">로그아웃</button> -->
                <button @click="goLogin" class="logout_bt">로그아웃</button>
                <p class="version">App 버전 1.0</p>
            </div>
        </section>
        <!-- //// 푸터 //// -->
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
    name: 'settingSub',
    components: {
        Footer : Footer,
    },
    methods:{
        goLogin(){
            this.$router.push({
                path: 'Login'
            })
        },
        switchOn(){
            this.toggle = document.querySelector('.toggleSwitch');
            this.toggle.classList.toggle('active')
        }
    }
/*     computed: {
      user () {
        return this.$store.state.user
      }
    },
    methodes: {
        kakaoLogout () {
        window.Kakao.Auth.logout((response) => {
          console.log(response)
          this.$store.commit('user', {}) // 변경된 사항 저장
          alert('로그아웃');
          this.$router.push({ path: '/' }) // 저장된거 서버에 업로드
        
          this.$router.push({
            path: 'Login'
          })
        })
      },
    } */

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

/* 레이아웃 ---------------------------------------------------------- */

/* 공통 */
.wrap{
    width: 100%;
    max-width: 767px;
    min-width: 425px;
    margin: 0 auto;
    /* border: 1px solid #000; */
}

header{
    width: 100%;
    background: #e0ecde;
}

header .back_bt{
    display: block;
    width: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    line-height: 70px;
}

header span{
    /* !!!!(07.29) : 수정 */
    font-size: 23px;
    font-weight: 400;
    margin-left: 20px;
}

/* //// 섹션 //// */
section{
/*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: 100%;
    margin: 0 auto ;
}

/* 설정, 정보 - 타이틀 */
h2 {
    width: 100%;
    margin: 0 auto;
    background-color: #68B39F;
}

h2 span {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    line-height: 60px;
}
.toggleSwitch {
  width: 5rem;
  height: 2.5rem;
  display: block;
  position: relative;
  border-radius: 2rem;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
}

.toggleSwitch .toggleButton {
  width: 2.2rem;
  height: 2.2rem;
  position: absolute;
  top: 50%;
  left: .2rem;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #68b39f;
}

/* 체크박스가 체크되면 변경 이벤트 */
.toggleSwitch.active {
  background: #68b39f;
}

.toggleSwitch.active .toggleButton {
  left: calc(100% - 2.3rem);
  background: #fff;
}

.toggleSwitch, .toggleButton {
  transition: all 0.2s ease-in;
}
/* 설정, 정보 - 하위 */
.setting ul, .info ul {
    width: calc(100% - 40px);
    margin: 40px auto;
    background-color: #fff;
}

.setting ul a,
.info ul a {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
}

/* 하단ui 묶음 */
.bottom_wrap {
    width: calc(100% - 40px);
    margin: 150px auto 106px;
}

/* 하단ui 묶음 - 로그아웃 버튼 */
.bottom_wrap .logout_bt {
    width: 100%;
    height: 70px;
    background-color: #d9d9d9;
    border-radius: 40px;
    /* !!!!(07.29) : 사이즈 */
    font-size: 20px;
}

/* 하단ui 묶음 - 버전 정보 */
.bottom_wrap .version {
    /* !!!!(07.29) : 마진탑, 폰트사이즈 수정 */
    margin-top: 20px;
    font-size: 14px;
    color: #A9A9A9;
    text-align: center;
}


/* section .list_wrap{
    height: 100px;
    width: 100%;
    background-color: #68b39f;
    position: relative;
}

section .list_wrap > ul{
    width: calc(100% - 40px);
    height: 100%;
    line-height: 2;
    margin: 0 auto;
}

section .list_wrap > ul > li{
    color: #333;
}

section .list_wrap ul li{
    padding: 10px 0;
}

section .list_wrap .set_cont{
    position: absolute;
    width: 100%;
    left: 0;
    top: 50px;
    background-color: #fff;
}

section .list_wrap .set_cont li{
    width: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

section .list_wrap.info_list{
    margin-top: 80px;
}

section button{
    width: calc(100% - 40px);
    margin: 80px auto 0; 
    padding: 10px;
    background-color: #aeaeae;
    font-size: 1.1em;
    font-weight: 600;
    border-radius: 10px;
    color: #fff;
}

section p{
    width: calc(100% - 40px);
    margin: 0 auto;  
    text-align: center;
    font-size: 0.9em;
    color: #a9a9a9;
} */
</style>