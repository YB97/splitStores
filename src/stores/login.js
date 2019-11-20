import { observable, action } from "mobx";

class LoginStore {
  @observable isAuth = true;
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
    this.isAuth = true;
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

export default LoginStore;
