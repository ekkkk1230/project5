import{
    createStore
} from 'vuex'

import persistedstate from 'vuex-persistedstate'

const store = createStore({
    state(){ //data
        return {
            user: {},

            nowMonth:'',
        }
    },
    getters: { //computed
        //함수형태로 입력
        /* timer: function(state){
            return state.nowMonth.length
        } 
        
        $store.getters.timer
        */
    },
    mutations: { //methods
        user (state, data) {
            state.user = data
        }
        /* 함수명: (state, payload) => {

        } 
        
        this.$store.commite('함수명', payload(인자))
        */
    },
    actions: {

    },
    plugins: [
        persistedstate({
            paths: ['user']
        })
    ]
})

export default store