import { observable, action } from "mobx";

class LoginStore {
  @observable isAuth = getAuthFromLocalStorage();
  @observable email = "";
  @observable password = "";
  @observable name = "";
  @observable company = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  setEmail(value) {
    this.email = value;
  }

  @action.bound
  setPass(value) {
    this.password = value;
  }

  @action.bound
  setAuth() {
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem("isAuth", "1");
        this.isAuth = true;
        resolve();
      }, 1000);
    });
  }

  @action.bound
  logout() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setEmail("");
        this.setPass("");
        this.setCompany("");
        this.setName("");
        localStorage.setItem("isAuth", "0");
        this.isAuth = false;
        resolve();
      }, 1000);
    });
  }

  @action.bound
  setName(value) {
    this.name = value;
  }

  @action.bound
  setCompany(value) {
    this.company = value;
  }
}

function getAuthFromLocalStorage() {
  return Boolean(JSON.parse(localStorage.getItem("isAuth")));
}

export default LoginStore;
