import { createStore } from "vuex";

export default createStore({
  state: {
    
    folder: 'what is your folder, teamlead:)',
    select: '',
    images: [],
    
  },
 
  mutations: {
    SetImages (state, images){
      state.images = images;
      
    },
    SetFolder (state, folder){
      state.folder = folder;
      localStorage.setItem('currentFolder', folder)
    },
    SetSelect (state, select){
      state.select = select;
      localStorage.setItem('currentSelect', select)
    },
    SetStoreFolder(state) {
      if (localStorage.getItem('currentFolder')){
        state.folder = localStorage.getItem('currentFolder')
      }
    },
    SetStoreSelect(state) {
      if (localStorage.getItem('currentSelect')){
        state.select = localStorage.getItem('currentSelect')
      }
    }
  },

  actions: {
    changeImages(data, payload){
      data.commit("SetImages", payload);
    },
    changeFolder(data, payload){
      data.commit("SetFolder", payload);
    },
    changeSelect(data, payload){
      data.commit("SetSelect", payload);
    },  
  },
  modules: {},
});
