<template>
  <div class="image-album">
    <div class="images">
      <img
        class="image"
        v-for="imageUrl in imageUrls"
        v-bind:key="imageUrl.index"
        v-bind:src="imageUrl"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "imageSlider",
  data() {
    return {
      curPos: 1,
      postion: 0,
      start_x: 0,
      move_x: 0,
      end_x: 0,
      IMAGE_WIDTH: 0,
      images: null,
      imageUrls: [
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1151676383.jpg?w=2000",
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1151632343.jpg?w=2000",
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1429964489.jpg?w=2000",
      ],
    };
  },
  computed: {
    getImageWidth: () => {
      const imgWidth = document.querySelector(".images").offsetWidth;
      return imgWidth;
    },
  },
  mounted() {
    this.IMAGE_WIDTH = this.getImageWidth;
    // console.log(this.IMAGE_WIDTH) 745
    this.image = document.querySelectorAll(".image");
    this.image_wrap = document.querySelector('.images');

    this.image_wrap.addEventListener("mousedown", this.mousedown);
    this.image_wrap.addEventListener("mouseup", this.mouseup);
    /* this.image_wrap.addEventListener("mousemove", this.mousemove); */
    
   /*    }).addEventListener("touchstart", this.touch_start);
    this.image.addEventListener("touchend", this.touch_end);
    this.image.addEventListener("mousedown", this.mousedown);
    this.image.addEventListener("mouseup", this.mouseup); */
  },
  methods: {
    prev() {
        this.curPos--;
      if (this.curPos > 0) {
        this.postion = this.IMAGE_WIDTH * (this.curPos-1);
        this.image.forEach(item => {
            item.style.transform = `translateX(${-this.postion}px)`
        });
      }/* else{
        this.curPos = this.imageUrls.length + 1;
        this.postion = this.IMAGE_WIDTH * this.curPos;
        this.image.forEach(item => {
            item.style.transform = `translateX(${-this.postion}px)`
        });
      } */
    },
    next() {
        this.curPos++;
      if (this.curPos <= this.imageUrls.length) {
        this.postion = this.IMAGE_WIDTH * (this.curPos-1);
        this.image.forEach(item => {
            item.style.transform = `translateX(${-this.postion}px)`
        });
        /* this.curPos = this.curPos + 1; */
      }/* else{
        this.curPos = 0;
        this.postion = this.IMAGE_WIDTH * this.curPos;
        this.image.forEach(item => {
            item.style.transform = `translateX(${-this.postion}px)`
        });
      } */
    },

/*     touch_start(event) {
      this.start_x = event.touches[0].pageX;
    },

    touch_end(event) {
      this.end_x = event.changedTouches[0].pageX;
      if (this.start_x > this.end_x) this.next();
      else this.prev();
    }, */

    mousedown(event) {
      this.start_x = event.pageX;
      console.log(this.start_x)
    },
    mouseup(event) {
      this.end_x = event.pageX;
      console.log(this.end_x)
      if (this.start_x > this.end_x) this.next();
      else this.prev();
    },
  },
};
</script>

<style scopped>
.image-album {
  width: 100%;
  height: auto;
  max-width: 745px;
  max-height: 2000px;
  overflow: hidden;
  margin: 0 auto;
}
.images {
  position: relative;
  display: flex;
  height: auto;
  position: relative;
  width: 100%;
  user-select: none;
  -webkit-user-select: none;
  -mos-user-select: none;
}
.image {
  width: 100%;
  height: auto;
  position: relative;
  left: 0;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  -mos-user-select: none;
}
</style>