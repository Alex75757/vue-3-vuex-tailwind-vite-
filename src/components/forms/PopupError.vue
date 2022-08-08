<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';


const props = defineProps({
  error: { type: String, required: true },
});

const   isOpen = ref(true)

</script>

<template>
 <div v-show="isOpen" id="modal" class="fixed left-0 right-0 top-0 bottom-0 z-50 bg-gray-500/75 flex flex-col items-center justify-center ">
    <div class="relative w-full max-w-4xl h-auto">
       
       <div class="flex flex-col justify-end bg-white rounded-lg">

           <div class="flex items-start justify-between p-5">
                  <h3 class="text-2xl font-semibold text-gray-900 lg:text-2xl ">
                     Данные не получены с сервера, ошибка:
                  </h3>
                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="default-modal"
                        @click="isOpen= !isOpen"
                        >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                  </button>
           </div>
           <!-- Modal body -->
                  <h3 class="flex justify-center py-5 text-xl font-semibold text-pink-500 lg:text-2xl">
                   {{props.error}}
                  </h3>
       </div>
    </div>
 </div>
</template>
