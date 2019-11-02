import { observable, action } from "mobx";

class LoginStore {
  @observable email = "";
  @observable password = "";

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
}

export default LoginStore;
