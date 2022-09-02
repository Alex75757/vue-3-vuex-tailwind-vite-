<script setup>
 import {useStore} from 'vuex';
 import { computed, defineComponent } from "vue";
 import { Carousel, Navigation, Slide } from "vue3-carousel";
 import "vue3-carousel/dist/carousel.css"; 

  const store = useStore();
  const images = computed(() => {
  return store.state.images
})
  
//  const props = defineProps({
//       images: '',
      
//    });
</script>
<template>
   <Carousel v-show="!(images=='')">
    
     <Slide v-for="slide in images" :key="slide">
       <img class="carousel__item" :src="slide" >
     </Slide>
     
     <template #addons>
       <Navigation />
     </template>
   </Carousel>
 </template>
 
 <script>

 
 export default defineComponent({
   name: "Basic",
   components: {
     Carousel,
     Slide,
     Navigation,
   },
  

 });
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