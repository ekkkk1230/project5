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
                    <h2>{{nowMonth}}, {{nowYear}}</h2>
                    <p>{{today}}</p>
                </div>
                <!-- 날짜 선택 -->
                <ul class="select_date">
                    <li class="ago_2">
                        <p class="day_week">{{ago_2day}}</p>
                        <p class="date">{{ago_2date}}</p>
                    </li>
                    <li class="ago_1">
                        <p class="day_week">{{ago_1day}}</p>
                        <p class="date">{{ago_1date}}</p>
                    </li>
                    <li class="now_day">
                        <p class="day_week">{{now_day}}</p>
                        <p class="date">{{now_date}}</p>
                    </li>
                    <li class="next_1">
                        <p class="day_week">{{next_1day}}</p>
                        <p class="date">{{next_1date}}</p>
                    </li>
                    <li class="next_2">
                        <p class="day_week">{{next_2day}}</p>
                        <p class="date">{{next_2date}}</p>
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

<script>
export default {
    data(){
        return{
            nowMonth: '',
            nowYear: '',
            today: '',
            nowDate: '',
            
            
            ago_2day: '',
            ago_1day: '',
            now_day: '',
            next_1day: '',
            next_2day: '',

            ago_2date: '',
            ago_1date: '',
            now_date: '',
            next_1date: '',
            next_2date: '',

        }
    },
    mounted(){
        this.setNowTimes()
    },
    methods: {
        setNowTimes(){
            let nowDate = new Date();
            let yy = String(nowDate.getFullYear());
            let mm = nowDate.getMonth() + 1;
            let dd = String(nowDate.getDate() < 10 ? '0'+nowDate.getDate() : nowDate.getDate());

            this.today = yy+'.'+mm+'.'+dd;
            let month = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                        ];
            this.nowYear = nowDate.getFullYear();
            this.nowMonth = month[nowDate.getMonth()];

            console.log(nowDate)
            /* let nn = nowDate.split(' ');
            console.log(nn) */

            let week = {
                0: 'SUN',
                1: 'MON',
                2: 'TUE',
                3: 'WED',
                4: 'THU',
                5: 'FRI',
                6: 'SAT'
            }
            this.ago_2day = nowDate.getDay()/* week[nowDate.getDay()-2] */;
            /* this.ago_1day = week[nowDate.getDay()-1];
            this.now_day = week[nowDate.getDay()];
            this.next_1day = week[nowDate.getDay()+1];
            this.next_2day = week[nowDate.getDay()+2]; */

            this.ago_2date = nowDate.getDate()-2;
            this.ago_1date = nowDate.getDate()-1;
            this.now_date = nowDate.getDate();
            this.next_1date = nowDate.getDate()+1;
            this.next_2date = nowDate.getDate()+2;

        }
    }
}
</script>

<style scope>

</style>