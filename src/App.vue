<script setup>
import { ref} from 'vue';
import { computed, onMounted} from 'vue';
import {useStore} from 'vuex';
import Carousel from './components/Carousel.vue'

let files = ref([])
let imgs = ref([])

let options = [
  { value:'option-f',
    text: 'заполнить на весь экран'
  },
  { value:'option-h',
    text: 'вписать вертикально'
  },
  { value:'option-w',
    text: 'вписать горизонтально'
  },
  { value:'option-m',
    text: 'масштабировать'
  },
  { value:'option-n',
    text: '1:1'
  }
  ]

const store = useStore();

const myDir = computed(() => {
  return store.state.folder
})
const selected = computed(() => {
  return store.state.select
})

onMounted(() => {
  store.commit('SetStoreFolder');
  store.commit('SetStoreSelect');

})

function changeSelect(e){
  let select = e.target.value;
  console.log(select)
  store.dispatch('changeSelect', select)
}

function changeFolder(e) {
  let folder = e.target.files[0].webkitRelativePath.split("/")[0]
  store.dispatch('changeFolder',folder)
  files.value = e.target.files
//old school
  let i = 0
  for (let file of files.value) {
    if (file.type.match('image')) {
      imgs.value[i] = URL.createObjectURL(file);
      i = i+1;
    }
  }
  // imgs.value = URL.createObjectURL(files.value).filter((file) => file.type.match('image')) 
  store.dispatch('changeImages',imgs)
}

</script>

<template>
    <div class="w-screen h-screen m-auto overflow-hidden lg:w-4/5 lg:h-3/4 ">
          <label for="yourfolder"> {{myDir}}
            <input id="yourfolder" type="file" title="чего изволите" webkitdirectory multiple  @change="changeFolder" >
          </label>
          <select v-model="selected" @change="changeSelect" >
              <option v-for="(option,i) in options" 
                    :key="i"
                    :value="option.value"
                    class=" bg-gray-400"
              >
                {{option.text}}
              </option>
          </select>
          <main class="w-screen h-screen flex md:flex-row md:w-full md:h-full">
            <Carousel class="option"  :class="selected"/>
          </main>
    </div>
</template>

<style scoped>
label, select {
  display: inline-block;
  padding: 5px;
  background-color: #5ade84;
  height: 34px;
  border-radius: 5px;
  min-width: 100px;
  width: 50%;
  max-width: 100%;
  text-align: center;
  z-index: 10;
 
}
select{
  background-color: burlywood;
}
label > input[type=file] {
    display: none;
}

.option{
  width: inherit;
  height: inherit;
  object-fit: scale-down;
}

.option-h{
  height: 100vh;
  width: auto;
  object-fit:cover;
  
}
.option-w{
  height: auto;
  width: 100vw;
  object-fit:contain;
  
}

.option-f{
  height: 100vh;
  width: 100vw;
  object-fit:contain;
  
}

.option-m{
  height: initial;
  width: initial;
  object-fit:scale-down;
  
}

.option-n{
  height: initial;
  width: initial;
  object-fit:none;
  
}


@media (max-width: 400px){
  label, select{
    width: 100%;
  }
}
</style>
