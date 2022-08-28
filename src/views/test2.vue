<template>
  <div class="wrap">
    <image-slider>
      <!-- <p>
        <a @click="prev">Previous</a> || <a @click="next">Next</a>
      </p> -->
      <!-- <div
        v-for="number in [currentNumber]">  -->
        <!-- <img
          :src="images[Math.abs(currentNumber) % images.length]"
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"
        /> -->
        <img
          v-for="img in images" :key="img"
          :src="img"
          class="img"
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
      img_width: 0,
      offset: 0,
    }
  },
  /* ready: function(){
    this.startRotation();
  }, */
  computed: {
    getImgWidth: () => {
      const imgWidth = document.querySelector('image-slider').offsetWidth;
      return imgWidth;
    }
  },
  mounted(){
    this.img_width = this.getImgWidth;
    this.img = document.querySelectorAll('.img');
    this.imgWrap = document.querySelector('image-slider');
    this.startRotation();
    this.cloneSlide();
    this.imgWrap.addEventListener('mousedown', this.mouseDown);
    this.imgWrap.addEventListener('mouseup', this.mouseUp);
  },
  methods: {
    startRotation(){
      this.timer = setInterval(this.next, 2500);
    },

    stopRotation(){
      clearTimeout(this.timer);
      this.timer = null;
    },

    cloneSlide(){
      const startSlide = this.img[0];
      const endSlide = this.img[this.images.length-1];
      const startEl = document.createElement(startSlide.tagName);
      const endEl = document.createElement(endSlide.tagName);

      /* endSlide.classList.forEach(c => endEl.classList.add(c));
      endEl.innerHTML = endSlide.innerHTML;
      startSlide.classList.forEach(c => startEl.classList.add(c));
      startEl.innerHTML = startSlide.innerHTML; */

      this.img[0].before(endEl);
      this.img[this.images.length-1].after(startEl);

      this.img = document.querySelectorAll('.img');
      this.offset = this.img_width*this.currentNumber;
      this.img.forEach(img => img.style.transform = `translateX(${-this.offset}px)`)
    },
    prev(){
      this.currentNumber --;
      if(this.currentNumber > 0){
        this.offset = this.img_width * (this.currentNumber - 1);
        this.img.forEach(img => {
          img.style.transform = `translateX(${-this.offset}px)`
        })
      }
    },
    next(){
      this.currentNumber ++;
      if(this.currentNumber < this.images.length+1){
        this.offset = this.img_width * (this.currentNumber - 1);
        this.img.forEach(img => {
          img.style.transform = `translateX(${-this.offset}px)`
        })
      }
    },

    
    
  }


}
</script>

<style>
.wrap{
  width: 100%;
  max-width: 767px;
  min-width: 390px;
  margin: 0 auto;
}
image-slider{
  max-width: 767px;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden

}
image-slider img{
  width: 100%;
  transition: all .4s;
  position: relative;
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