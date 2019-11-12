import { observable, action } from "mobx";

class NewExperimentStore {
  @observable appName;
  @observable developerName;
  @observable appIsFree = true;
  @observable price = 0;
  @observable currency = "USD";
  @observable offersInApp = false;
  @observable appDesc;
  @observable shortAppDesc;
  @observable appCategory;
  @observable appRestrictions;
  @observable releaseDate;
  @observable releaseNotes;
  @observable appSize;
  @observable appVersion;
  @observable userRating;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  setAppName(name) {
    this.appName = name;
  }

  @action
  setDeveloperName(name) {
    this.developerName = name;
  }

  @action
  setAppIsFree(value) {
    this.appIsFree = Boolean(value);
  }

  @action
  setPrice(value) {
    this.price = value;
  }

  @action
  setCurrency(value) {
    this.currency = value;
  }

  @action
  setOffersInApp(value) {
    this.offersInApp = Boolean(value);
  }

  @action
  setAppDesc(value) {
    this.appDesc = value;
  }

  @action
  setShortAppDesc(value) {
    this.shortAppDesc = value;
  }

  @action
  setAppCategory(value) {
    this.appCategory = value;
  }

  @action
  setAppRestrictions(value) {
    this.appRestrictions = value;
  }

  @action
  setReleaseDate(date) {
    this.releaseDate = date;
  }

  @action
  setAppSize(size) {
    this.appSize = size;
  }

  @action
  setAppVersion(version) {
    this.appVersion = version;
  }

  @action
  setUserRating(value) {
    this.userRating = value;
  }
}

export default NewExperimentStore;
