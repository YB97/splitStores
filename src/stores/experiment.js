import { observable, action } from "mobx";

class ExperimentStore {
  @observable experiment = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  getExperimentById(appId, id) {
    this.experiment = getExpById(appId.toString(), id.toString());

    console.log("get");
    // try {
    //   const { data } = await axios.get(`/api/apps/${appId}/experiments/${id}`);
    //   runInAction(() => {
    //     this.experiment = data.experiment;
    //   });
    // } catch (e) {
    //   console.error(e);
    // }
  }
}

export default ExperimentStore;

const getExpById = (appId, id) => {
  switch (appId) {
    case "1":
      switch (id) {
        case "1":
          return {
            experiment_id: 1,
            experiment_name: "Play For Game Exp1",
            variations_count: 2,
            visitors_count: 10,
            clicks_count: 33,
            creation_date: "2019-11-12T14:39:43+03:00",
            app_name: "Play For Game",
            traffic_link: "https://google.com",
            variations: [
              {
                variation_id: "2",
                name: "Play for game Var 1",
                icon: "",
                eng_rate: "90%",
                clicks_count: 4,
                visitors_count: 15,
                install_rate: "4%"
              },
              {
                variation_id: "5",
                name: "Play for game Var 2",
                icon: "",
                eng_rate: "100%",
                clicks_count: 19,
                visitors_count: 3,
                install_rate: "76%"
              },
              {
                variation_id: "3",
                name: "Play for game Var 3",
                icon: "",
                eng_rate: "30%",
                clicks_count: 9,
                visitors_count: 13,
                install_rate: "6%"
              }
            ]
          };
        case "2":
          return {
            experiment_id: 2,
            experiment_name: "Play For Game Exp2",
            variations_count: 4,
            visitors_count: 8,
            clicks_count: 28,
            creation_date: "2019-11-14T14:39:43+03:00",
            app_name: "Play For Game",
            traffic_link: "https://google.com",
            variations: [
              {
                variation_id: "2",
                name: "Play for game Exp 2 Var 1",
                icon: "",
                eng_rate: "30%",
                clicks_count: 4,
                visitors_count: 15,
                install_rate: "4%"
              }
            ]
          };
        case "3":
          return {
            experiment_id: 3,
            experiment_name: "Play For Game Exp3",
            variations_count: 2,
            visitors_count: 10,
            clicks_count: 43,
            creation_date: "2019-11-14T14:39:43+03:00",
            app_name: "Play For Game",
            traffic_link: "https://google.com",
            variations: [
              {
                variation_id: "6",
                name: "Play for game Var 1",
                icon: "",
                eng_rate: "60%",
                clicks_count: 4,
                visitors_count: 5,
                install_rate: "40%"
              },
              {
                variation_id: "8",
                name: "Play for game Var 2",
                icon: "",
                eng_rate: "30%",
                clicks_count: 4,
                visitors_count: 15,
                install_rate: "4%"
              }
            ]
          };
      }
      break;
    case "2":
      switch (id) {
        case "2":
          return {
            experiment_id: 2,
            experiment_name: "Super Arcade Exp2",
            variations_count: 4,
            visitors_count: 8,
            clicks_count: 28,
            creation_date: "2019-11-14T14:39:43+03:00",
            app_name: "Super Arcade",
            traffic_link: "https://google.com",
            variations: [
              {
                variation_id: "2",
                name: "Super Arcade Exp2 Var 1",
                icon: "",
                eng_rate: "60%",
                clicks_count: 4,
                visitors_count: 5,
                install_rate: "40%"
              }
            ]
          };
      }
  }
};
