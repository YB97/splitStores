import { observable, action, runInAction } from "mobx";
// import axios from "axios";

class AppStore {
  @observable app = {
    name: "",
    store: ""
  };

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  getAppById(id) {
    // Запрос к беку
    // try {
    // const { data } = await axios.get(`/api/apps/${id}`);
    const { data } = getApp(id);

    this.app = data.app;
    // runInAction(() => {
    //   this.app = data.app;
    //   console.log("this", this.app);
    // });
    // } catch (e) {
    //   console.error(e);
    // }

    // console.log('getAppById');
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     const app = this.appsList.find(a => a.id === parseInt(id));
    //     resolve(app);
    //   }, 700);
    // });
  }

  @action.bound
  setAppName(name) {
    this.app.name = name;
  }

  @action.bound
  setAppStore(store) {
    this.app.store = store;
  }

  @action.bound
  save() {
    console.log('saved!');
    // try {
    //   await axios.patch(`/api/apps/${this.app.id}`, {
    //     app: {
    //       ...this.app
    //     },
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  }
}

export default AppStore;

const getApp = id => {
  switch (id) {
    case "1":
      return {
        data: {
          app: {
            id: "1",
            name: "Play For Game",
            link_store: "https://google.com",
            store_category: "Games",
            store: "Google Play",
            icon: "../../../static/images/apps/facebook.png",
            creation_date: "2019-11-11T11:39:43+03:00",
            experiments_count: 1
          }
        }
      };
    case "2":
      return {
        data: {
          app: {
            id: "2",
            name: "Super Arcade",
            link_store: "https://appstore.com",
            store_category: "Educational",
            store: "App Store",
            icon: "../../../static/images/apps/clash-royale.jpg",
            creation_date: "2019-09-11T11:39:43+03:00",
            experiments_count: 4
          }
        }
      };
  }
};
