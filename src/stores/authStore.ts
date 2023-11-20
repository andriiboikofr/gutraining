import {makeAutoObservable} from 'mobx';

class AuthStore {
  isAuthenticated: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }
}

const authStore = new AuthStore();
export default authStore;
