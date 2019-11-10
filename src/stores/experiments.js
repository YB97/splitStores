import { observable, action } from "mobx";

class ExperimentsStore {
  @observable experiments = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

export default ExperimentsStore;
