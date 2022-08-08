<script setup>
import Button from './components/forms/Button.vue';
import Popup from './components/forms/Popup.vue';
import PopupShow from './components/forms/PopupServerReply.vue';
import PopupError from './components/forms/PopupError.vue';
import { computed } from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const towns = computed(() => {
  return store.state.towns
})
const reply = computed(() => {
  return store.state.reply
})

const error = computed(() => {
  return store.state.error
})


function goStore(state, payload){
 store.dispatch(state,payload);
}

</script>

<template>
    <div>
      <main class="flex flex-col items-start md:flex-row">
        <div  v-for="(town,i) in towns" 
                  :key="i"
                  class="px-2.5 pt-2.5 w-full sm:max-w-fit"
        > 
         
            <Button  v-if="town.name == 'Москва'" @click="goStore('toggleShow', town.name)"
                  text="Заказать в Москву"
                  class="bg-blue-500"
            />
          
           
            <Button v-if=" town.name == 'Санкт-Петербург'" @click=" $store.commit('toggleShow', town.name)"
                  text="Заказать в Санкт-Петербург"
                  class="bg-teal-600"
            />
          
          <Popup  :city="town.name" :isOpen="town.show"
                  
          />
       </div>
         <PopupError v-if="!!error"   :error="error" class="bg-red-500"  />
         <PopupShow v-if="reply" :isOpen="reply"   :error="error" class="bg-red-500"  />
      </main>
    </div>
</template>
<script>
</script>