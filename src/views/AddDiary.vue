<template>
    <div class="wrap">
        <h1 class="hidden">위시리스트</h1>
        <!-- //// 섹션 //// -->
        <section>
            <!-- 윗쪽 영역 -->
            <div class="top">
                <!-- 달력버튼 -->
                <router-link to="/DiaryMain" class="calendar">
                    <button>
                        <img src="../assets/listDairyView/dairy_bt.png" alt="달력버튼">
                    </button>
                </router-link>
                <!-- 오늘 날짜 -->
                <div class="today">
                    <h2>{{}}</h2>
                    <p>{{}}</p>
                </div>
                <!-- 날짜 선택 -->
                <ul class="select_date">
                    <li class="ago_2">
                        <p class="day_week"></p>
                        <p class="date"></p>
                    </li>
                    <li class="ago_1">
                        <p class="day_week"></p>
                        <p class="date"></p>
                    </li>
                    <li class="d_day">
                        <p class="day_week"></p>
                        <p class="date"></p>
                    </li>
                    <li class="next_1">
                        <p class="day_week"></p>
                        <p class="date"></p>
                    </li>
                    <li class="next_2">
                        <p class="day_week"></p>
                        <p class="date"></p>
                    </li>
                </ul>
            </div>
            <!-- 아래쪽 영역 -->
            <div class="list_bottom">
                <!-- 리스트 작성 묶음 -->
                <div class="diary_add">
                    <!-- 일기 추가 -->
                    <div class="section1">
                        <h3>{{title}}</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>