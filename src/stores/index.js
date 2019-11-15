import LoginStore from "./login";
import ExperimentsStore from "./experiments";
import NewExperimentsStore from "./newExperiment";
import AppsStore from "./apps";

class RootStore {
  constructor() {
    this.login = new LoginStore(this);
    this.experiments = new ExperimentsStore(this);
    this.newExperiments = new NewExperimentsStore(this);
    this.apps = new AppsStore(this);
  }
}

export default new RootStore();
