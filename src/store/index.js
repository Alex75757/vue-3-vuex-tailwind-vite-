import { createStore } from "vuex";
import axios from 'axios'

// Requirement: Load data from file
import initialState from "../assets/data.json";

export default createStore({
  state: {
    ...initialState,
    data: {},
    error: undefined,
    reply: false,
  },
 
  getters: {
    
  },  
  
  mutations: {
   
    SetError (state, error){
      state.error = error;
    },
    serverReplyClose(state, close){
      state.reply = close;
    }, 
    toggleShow (state, city) {
    let a= state.towns.filter((item) => item.name == city);
     a[0].show = !a[0].show;
    },
    saveServerData(state, data){
     state.data = data;
     console.log('myData received from server', state.data)
     state.reply = true;
    },
  },
  actions: {
    serverReplyClose(state, close){
      state.commit("serverReplyClose", close);
    },
    toggleShow(data, payload){
      data.commit("toggleShow", payload);
    },
    async fetchServer(context, payload) {
      // payload = JSON.stringify(payload);
      console.log('payload to send is', payload)
      try {
        const data = await axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/',payload)
          context.commit('saveServerData', data.data)
        }
        catch (error) {
           context.commit('SetError', error.message)
        }
        
    },
  },
  modules: {},
});
