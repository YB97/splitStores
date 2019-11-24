import { observable, action } from "mobx";

class ExperimentsStore {
  @observable experiments = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  getExperimentsByAppId(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.experiments = getExpByAppId(id.toString());
        resolve();
      }, 300);
    });

    // try {
    //   const { data } = await axios.get(`/api/apps/${id}/experiments/`);
    //   runInAction(() => {
    //     this.experiments = data.experiments;
    //   });
    // } catch (e) {
    //   console.error(e);
    // }
  }
}

const getExpByAppId = id => {
  switch (id) {
    case "1":
      return [
        {
          experiment_id: 1,
          experiment_name: "Play For Game Exp1",
          variations_count: 2,
          visitors_count: 10,
          clicks_count: 33,
          creation_date: "2019-11-12T14:39:43+03:00"
        },
        {
          experiment_id: 2,
          experiment_name: "Play For Game Exp2",
          variations_count: 4,
          visitors_count: 8,
          clicks_count: 28,
          creation_date: "2019-11-14T14:39:43+03:00"
        },
        {
          experiment_id: 3,
          experiment_name: "Play For Game Exp3",
          variations_count: 2,
          visitors_count: 10,
          clicks_count: 43,
          creation_date: "2019-11-14T14:39:43+03:00"
        }
      ];
    case "2":
      return [
        {
          experiment_id: 2,
          experiment_name: "Super Arcade Exp2",
          variations_count: 4,
          visitors_count: 8,
          clicks_count: 28,
          creation_date: "2019-11-14T14:39:43+03:00"
        }
      ];
  }
};

export default ExperimentsStore;
