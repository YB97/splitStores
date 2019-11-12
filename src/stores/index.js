import LoginStore from "./login";
import ExperimentsStore from "./experiments";
import NewExperimentsStore from "./newExperiment";

class RootStore {
  constructor() {
    this.login = new LoginStore(this);
    this.experiments = new ExperimentsStore(this);
    this.newExperiments = new NewExperimentsStore(this);
  }
}

export default new RootStore();
