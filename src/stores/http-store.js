import { defineStore } from 'pinia';
import axios from 'axios';


export const useHttpStore = defineStore('http', {
  state: () => ({
    users: [],
    loggedInUser: null,
    error: null
  }),
  getters: {
    getUsers (state) {
      return state.users;
    },
    getLoggedInUser (state) {
      return state.loggedInUser;
    },
    getError (state) {
      return state.error;
    }
  },
  actions: {
    async fetchUsers () {
      try {
        const data = await axios.get('https://fakestoreapi.com/users');
        
        this.users = data.data;
      }
      catch (error) {
        this.error = error;
      }
    },
    async login (username, password) {
      try {
        const { data } = await axios.post('https://fakestoreapi.com/auth/login', {
          username: username,
          password: password,
        });

        this.loggedInUser = data;

        localStorage.setItem('token', data.token);

        this.error = null;
      }
      catch (error) {
        const errorMessage = error?.data || 'nome de usuário ou senha incorretos';
        
        this.error = errorMessage;
      }
    },
    async create(userData) {
      try {
        await axios.post('https://fakestoreapi.com/users', userData);
      }
      catch (error) {
        const errorMessage = error.response?.data || 'Os dados estão incorretos';
        
        this.error = errorMessage;
      }
    }
  }
});
