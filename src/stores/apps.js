import { observable, action } from "mobx";

class AppsStore {
  @observable appsList = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  getAppById(id) {
    return this.appsList.find(a => a.id === parseInt(id));
  }

  @action.bound
  setAppName(id, name) {
    const item = this.getAppById(id);

    item.name = name;
  }

  @action.bound
  getAppByName(name) {
    return this.appsList.find(a => a.name === name);
  }

  @action.bound
  initialAppList() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.appsList = getApps();
        resolve();
      }, 3000);
    });
  }
}

export default AppsStore;

const getApps = () => {
  return [
    {
      id: 1,
      name: "Play For Game",
      link_store: "https://google.com",
      store_category: "Games",
      store: "Google Play",
      icon: "../../../static/images/apps/facebook.png",
      creation_date: "2019-11-11T11:39:43+03:00",
      experiments_count: 1
    },
    {
      id: 2,
      name: "Super Arcade",
      link_store: "https://appstore.com",
      store_category: "Educational",
      store: "App Store",
      icon: "../../../static/images/apps/clash-royale.jpg",
      creation_date: "2019-09-11T11:39:43+03:00",
      experiments_count: 4
    }
  ];
};
