import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthComponent = defineStore("auth", () => {
  const authStatus = {
    login: Symbol("login"),
    regist: Symbol("regist"),
  };

  const showComponent = ref(authStatus.login);

  const changeStatus = (auth: symbol) => {
    if (authStatus.login || authStatus.regist) {
      showComponent.value = auth;
    }
  }

  const loginForm = ref({
      username: '',
      password: ''
})

  return { authStatus, showComponent, changeStatus, loginForm };
});
