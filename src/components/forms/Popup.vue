<script setup>
import { defineProps, onMounted, computed } from 'vue';
import { ref } from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const props = defineProps({
  city: { type: String},
  isOpen: ref()
});

let fio = ref()
let phone = ref()
let email = ref()
let city = ref(props.city)



function findCity (city){
      let a= store.state.towns.filter((item) => item.name == city);
      return a[0].id
}

function formClean(){
        this.email="";
        this.fio="";
        this.city=this.props.city;
        this.phone="";
}

function sendServer(city){
    if (this.phone.length == 18) {
        this.phone = "+" + Array.from(this.phone.match(/\d/g)).join('');
    
        let id = findCity(city);
        
        let payload = {
            'name': this.fio,
            'phone' : this.phone,
            'email' : this.email,
            'city_id': id
        }
        // reverse order payload and data=context
            store.dispatch("fetchServer", payload, 'data');
    } else {
        console.log(this.phone.length)
        alert("Телефон введен неверно, данные не отправлены");
    }
    console.log("phone",this.phone)
}

</script>

<template>
 <div v-show="props.isOpen" id="modal" class="fixed left-0 right-0 top-0 bottom-0 z-50 bg-gray-500/75 flex flex-col items-center justify-center ">
    <div class="relative w-full max-w-4xl h-auto">
       
       <div class="flex flex-col justify-end bg-white rounded-lg">
           <!-- Modal header    -->
           <div class="flex items-start justify-between p-5">
                  <h3 class="text-2xl font-semibold text-gray-900 lg:text-2xl">
                     Заказать звонок
                  </h3>
                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="default-modal"
                 
                   @click="$store.commit('toggleShow', props.city)">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                  </button>
           </div>
           <!-- Modal body -->
           <form class="flex flex-col items-stretch justify-items-stretch justify-end md:flex-row md:flex-wrap " action="#" method="POST">
                <div class="grow rounded-md px-2 pb-4">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-500">Имя
                    </span>
                    <input id="fios" v-model="fio" name="fio" type="text" required="true" class="peer block w-full px-3 py-2 
                            border border-gray-300 placeholder-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                            " placeholder="Иван Иванов" />
                    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Обязательное поле
                    </p>
                </div>
                <div class="grow rounded-md px-2 pb-4">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Телефон
                    </span>
                    <!--  v-mask="'+7 (###) ###-##-##'" -->
                    <input id="phone" v-model="phone" name="phone" type="tel"  autocomplete="on" v-mask="'+7 (###) ###-##-##'" required="true" pattern="+7 (\d{3}) \d{3}-{d2}-{d2}" 
                            class="peer appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500" 
                            placeholder="+7(_ _ _)-_ _ _-_ _-_ _" 
                            />
                    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Обязательное поле
                    </p>
                </div>
                <div class="grow rounded-md px-2 pb-4">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">E-mail
                    </span>
                    <label for="email"></label>
                    <input id="email-address" v-model="email" name="email" type="email" autocomplete="on" required="true" pattern="^\S+@\S+[.][\S][\S]+$" 
                            class="peer appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500" 
                            placeholder="you@email.com" 
                            />
                    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Обязательное поле
                    </p>
                </div>
        
                  <div class="grow rounded-md px-2 pb-4">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Город
                    </span>
                    <select name="city"   v-model="city" :placeholder="city" type="text" required="true" 
                            class="peer-focus appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            > 
                         
                        <option 
                            v-for="(town,i) in $store.state.towns" 
                                    :key="i"
                                    class="max-w-7xl mx-auto sm:px-6 lg:px-8"
                        >
                            {{town.name}}
                        </option>
                    </select>
                    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Обязательное поле
                    </p>
                  </div>
                 <!-- Modal footer  -->
                  <div class="md:self-end px-2 py-4">
                    <button data-modal-toggle="default-modal" type="submit" 
                            class="peer w-full text-white bg-green-600 hover:bg-green-light-800 focus:ring-4 focus:ring-green-light-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                           
                            @click.prevent="
                                            sendServer(city);
                                            $store.commit('toggleShow', props.city);
                                            formClean();
                                            "
                            >Send form data
                    </button>
                    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                        Заполните поля правильно
                    </p>
                  </div>
     
           </form>
     
       </div>
 
    </div>
 </div>
</template>
