<template>
    <div class="splash">
        <img src="../assets/splesh/splash_img.png" alt="splash">
        <p>마음아지트</p>
    </div>
</template>

<script>
export default {
    name: 'splesh',
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

/* //// 레이아웃 시작 //// */

body {
    width: 100%;
    max-width: 767px;
    min-width: 425px;
    position: fixed;
    z-index: 10;
    /* border: 1px solid #000; */
}

.splash {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: #FAFFFA;
    position: relative;
}
.splash img {
    position: absolute;
    transform: translate(-45%, -45%);
    top: 45%;
    left: 45%;
}
.splash p {
    width: 100%;
    position: absolute;
    text-align: center;
    bottom: 170px;
    font-size: 28px;
    font-weight: 600;
    color: #666;

}
</style>