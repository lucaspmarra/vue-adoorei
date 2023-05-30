import { defineStore } from 'pinia';
import axios from 'axios';

export const useHttpStore = defineStore('http', {
  state: () => ({ 
    users: [],
    error: null,
  }),
  getters: {
    getUsers(state){
      return state.users;
    }
  },
  actions: {
    async fetchUsers(){
      try {
        const data = await axios.get('https://fakestoreapi.com/users');
        console.log(data.data);
        this.users = data.data;
      }
      catch (error) {
        this.error = error;
      }
    }
  }
});
