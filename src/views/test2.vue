<template>
  <div class="wrap">
    <image-slider>
      <!-- <p>
        <a @click="prev">Previous</a> || <a @click="next">Next</a>
      </p> -->
      <!-- <div
        v-for="number in [currentNumber]">  -->
        <img
          :src="images[Math.abs(currentNumber) % images.length]"
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"
        />
      <!-- </div> -->
    </image-slider>
  </div>
</template>

<script>
export default {
  data(){
    return{
      images: [ 
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1151676383.jpg?w=2000",
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1151632343.jpg?w=2000",
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1429964489.jpg?w=2000",
      ],
      currentNumber: 0,
      timer: null,
    }
  },
  ready: function(){
    this.startRotation();
  },
  methods: {
    startRotation(){
      this.timer = setInterval(this.next, 2500);
    },

    stopRotation(){
      clearTimeout(this.timer);
      this.timer = null;
    },

    next(){
      this.currentNumber += 1;
    },
    prev(){
      this.currentNumber -= 1;
    }
  }


}
</script>

<style>
.wrap{
  width: 768px;
  margin: 0 auto;
}
image-slider{
  width: calc(100% - 40px);
  max-width: 768px;
}
image-slider img{
  width: 100%;
}
   /*  .fade-transition {
    transition: all 0.8s ease;
    overflow: hidden;
    visibility: visible;
    opacity: 1;
    position: absolute;
}
.fade-enter, .fade-leave {
    opacity: 0;
    visibility: hidden;
} */
    </style>