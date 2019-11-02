import LoginStore from "./login";

class RootStore {
  constructor() {
    this.login = new LoginStore(this);
  }
}

export default new RootStore();
