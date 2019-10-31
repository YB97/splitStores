import { observable } from "mobx";

class LoginStore {
  @observable email;
  @observable password;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  onSubmitHandler = (email, password) => {
    
  }
}
