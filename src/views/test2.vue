<template>
  <div class="wrap">
    <carousel :slides="slides"></carousel>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'

export default {
  name: 'test2',
  date: () => ({
    slides: [
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1151676383.jpg?w=2000",
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1151632343.jpg?w=2000",
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1429964489.jpg?w=2000",
    ]
  }),
  components: {
    Carousel
  },
}
</script>
