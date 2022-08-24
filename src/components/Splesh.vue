<template>
    <div class="splash" :class="{ loader: true, fadeout: !isLoading }">
        <div class="contents">
            <img src="../assets/splesh/splash_img.png" alt="splash">
            <p>마음아지트</p>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: 'Splesh',
    props: ['isLoading'],
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

.hidden {
    display: none;
}

/* 모바일 수평 스크롤 금지 */
html,
body {
    max-width: 100%;
   /*  overflow-x: hidden; */

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
x   
/* //// 레이아웃 시작 //// */

body {
    width: 100%;
    z-index: 10;
    /* border: 1px solid #000; */
}

.splash {
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #FAFFFA;
    z-index: 10;
    top: 0;
}

.contents {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
}

.splash img {
    margin-bottom: 20px;
}

.splash p {
    font-size: 28px;
    font-weight: 600;
    color: #666;
    text-align: center;
}

.fadeout {
    animation: fadeout 2.5s forwards; /* forwards : 사라질때 2.5초 앞으로 */
}
@keyframes fadeout {
    to {
        opacity: 0;
        visibility: hidden;
    }
}
</style>