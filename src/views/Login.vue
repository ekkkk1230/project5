<template>
    <div class="wrap">
        <!-- //// 섹션 //// -->
        <section>
            <h1 class="hidden">마음아지트 로그인</h1>
            <h2>매 순간을 <br>마음아지트와 함께</h2>
            <div class="agit_img"></div>
            <!-- 버튼 모임 -->
            <ul class="join_btn_wrap">
                <li class="login">
                    <button>로그인</button>
                </li>
                <li class="join">
                    <button>회원가입</button>
                </li>
                <li>
                    <!-- sns 로그인 -->
                    <ul class="sns_login">
                        <li class="kakao" v-if="user.email==undefined"><a href="#none" @click="kakaoLogin">카카오</a></li>
                        <li class="kakao" v-else><a href="#none" @click="kakaoLogout">카카오</a></li>
                        <li class="naver"><a href="#none">네이버</a></li>
                        <li class="facebook"><a href="#none">페이스북</a></li>
                        <li class="google"><a href="#none">구글</a></li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'login',

    computed: {
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      kakaoLogin () {
        window.Kakao.Auth.login({
          scope: ' account_email, profile_nickname',
          success: this.getProfile
        })
      },
      getProfile (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          //웹 페이지에서 JavaScript SDK를 통해 카카오톡 메시지 API를 사용하려면 Kakao.API.request 함수를 사용해 REST API와 같은 URL로 요청
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            this.login(kakao_account);
            alert("로그인 성공!");

            this.$router.push({
            path: 'index'
            })

            
          },
        });
      },
      async login(kakao_account) {
        this.$store.commit('user', kakao_account)
      },
      kakaoLogout () {
        window.Kakao.Auth.logout((response) => {
          console.log(response)
          this.$store.commit('user', {}) // 변경된 사항 저장
          alert('로그아웃');
          this.$router.push({ path: '/' }) // 저장된거 서버에 업로드
        })
      },

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

/* 공통 */
.wrap{
    width: 100%;
    margin: 0 auto;
    /* border: 1px solid #000; */
}

/* //// 섹션 //// */
section{
    /*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    max-width: 767px;
    min-width: 425px;
    width: calc(100% - 40px);
    margin: 0 auto;
}

h2{
    /* !!!!(07.29) : 사이즈 */
    font-size: 25px;
    font-weight: 400;
    margin-top: 40px;
    width: 100%;
}

.agit_img{
    width: 100%;
    height: 300px;
    background: url("../assets/loginView/login_img.png") no-repeat center;
    background-size: contain;
}

/* 버튼 모임 */
.join_btn_wrap{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}

.login,
.join{
    width: 100%;
}

button{
    width: 100%;
    background-color: #68b39f;
    color: #fff;
    padding: 20px;
    border-radius: 15px;
    font-weight: 600;
    /* !!!!(07.29) : 사이즈 */
    font-size: 20px;
}

/* sns 로그인 */
.sns_login {
    display: flex;
    flex-flow: row nowrap;
    gap: 30px;
    justify-content: center;
    margin-bottom: 20px;
}
.sns_login a {
    display: block;
    text-indent: -99999px;
    width: 60px;
    height: 60px;
}

.kakao, .naver, .facebook, .google {
    border-radius: 50%;
}

.kakao {
    background-color: #fae100;
}

.naver {
    background-color: #2db400;
}

.facebook {
    background-color: #3b5998;
}

.google {
    border: 1px solid #ddd;
}

/* sns 로그인 배경이미지 */
.kakao a {
    background: url("../assets/loginView/kakao.png") no-repeat center;
}
.naver a {
    background: url("../assets/loginView/naver.png") no-repeat center;
}
.facebook a {
    background: url("../assets/loginView/facebook.png") no-repeat center;
}
.google a {
    background: url("../assets/loginView/google.png") no-repeat center;
}
</style>