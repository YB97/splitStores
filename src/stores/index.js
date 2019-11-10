import LoginStore from "./login";
import ExperimentsStore from "./experiments";

class RootStore {
  constructor() {
    this.login = new LoginStore(this);
    this.experiments = new ExperimentsStore(this);
  }
}

export default new RootStore();
