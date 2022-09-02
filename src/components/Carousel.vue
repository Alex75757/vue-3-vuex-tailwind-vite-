<script setup>
 import {useStore} from 'vuex';
 import { computed } from "vue";
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';


  const store = useStore();
  const images = computed(() => {
  return store.state.images
})
  

</script>
<template v-show="!(images=='')">
  <swiper
    :slides-per-view="1"
    :space-between="1"
    navigation
   
  >
    <swiper-slide
          v-for="slide in images" :key="slide"
          >
          <img class="carousel__item" :src="slide" >
    </swiper-slide>
  </swiper>
 </template>
 
 <script>

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
 </script>
 
 <style>
 img{
   height: auto ;
   width: auto;
 }  
 .carousel__item {
   min-height: 200px;
   height: 100%;
   width: 100%;
   font-size: 20px;
   border-radius: 8px;
   display: flex;
 }
 
 .carousel__slide, .carousel__track  {

   justify-content: baseline;
   align-items: baseline;
   flex-grow: 100%;
   height: 100%;
   width: 100%;
 }

 .carousel__viewport{
   width: 100%;
   height: 100%;
 }
 
 .carousel__prev,
 .carousel__next {
   box-sizing: content-box;
   border: 5px solid rgb(226, 78, 78);
   background-color: rgb(226, 78, 78);
 }
.button, [type='button']{
   background-color: rgb(226, 78, 78) !important;

 }
 </style>