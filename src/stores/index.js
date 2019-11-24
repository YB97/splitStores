import LoginStore from "./login";
import ExperimentStore from "./experiment";
import ExperimentsStore from "./experiments";
import NewExperimentsStore from "./newExperiment";
import AppsStore from "./apps";
import AppStore from "./app";
import VariationStore from "./variation";
import { observable, action } from "mobx";

class RootStore {
  constructor() {
    this.login = new LoginStore(this);
    this.experiment = new ExperimentStore(this);
    this.experiments = new ExperimentsStore(this);
    this.newExperiments = new NewExperimentsStore(this);
    this.apps = new AppsStore(this);
    this.app = new AppStore(this);
    this.variations = new VariationStore(this);
  }
  @observable loading = false;

  @action.bound
  setLoading(value) {
    this.loading = value;
  }
}

export default new RootStore();
