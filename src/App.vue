<template>
  <div class="app">
    <isLoading :isLoading="isLoading"/>
    <router-view></router-view>
    <!-- <login></login> -->
    <Footer></Footer>
  </div>
</template>

<script>
import isLoading from './components/Splesh.vue';
import Login from './views/Login.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  data() {
    return {
      isLoading : true,
    }
  },
  components: {
    Login : Login,
    Footer : Footer,
    isLoading : isLoading,
  },
  methods: {
   
  },
  mounted() {
    setTimeout(()=>{
      this.isLoading=false;
    }, 2000)
  },
}

</script>

<style scoped>

</style>
