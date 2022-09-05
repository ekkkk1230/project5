<template>
    <footer>
        <div class="footer_all">
            <router-link to="Healing">
                <div class="healing">
                    <img src="../assets/addListView/footer_healing.png" width="30" alt="healing">
                    <p class="f_title">힐링</p>
                </div>
            </router-link>
            <router-link to="/DiaryMain">
                <div class="daily">
                    <img src="../assets/addListView/footer_daily.png" width="30" alt="daily">
                    <p class="f_title">일지</p>
                </div>
            </router-link>
            <router-link to="/index">
                <div class="home">
                    <img src="../assets/addListView/footer_home.png" width="80" alt="home">
                </div>
            </router-link>
            <router-link to="/Shop">
                <div class="store">
                    <img src="../assets/addListView/footer_store.png" width="30" alt="store">
                    <p class="f_title">상점</p>
                </div>
            </router-link>
            <router-link to="/SettingMain">
                <div class="mypage">
                    <img src="../assets/addListView/footer_mypage.png" width="30" alt="mypage">
                    <p class="f_title">마이페이지</p>
                </div>
            </router-link>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer',
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

/* //// 푸터 //// */
footer{
    width: 100%;
    min-width: 425px;
    max-width: 767px;
    height: 46px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;
}
footer .footer_all {
    background-color: #68b39f;
    padding: 20px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
}
footer .footer_all div{
    width: 100%;
    height: 35px;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

}
.f_title{
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    width: 100%;
    height: 30px;
}
footer .home{
    padding-bottom: 30px;
}
</style>