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

  @action.bound
  setAppName(name) {
    this.appName = name;
  }

  @action.bound
  setDeveloperName(name) {
    this.developerName = name;
  }

  @action.bound
  setAppIsFree(value) {
    this.appIsFree = Boolean(value);
  }

  @action.bound
  setPrice(value) {
    this.price = value;
    console.log("price ", value);
  }

  @action.bound
  setCurrency(value) {
    this.currency = value;
    console.log("currency ", value);
  }

  @action.bound
  setOffersInApp(value) {
    this.offersInApp = Boolean(value);
  }

  @action.bound
  setAppDesc(value) {
    this.appDesc = value;
  }

  @action.bound
  setShortAppDesc(value) {
    this.shortAppDesc = value;
  }

  @action.bound
  setAppCategory(value) {
    this.appCategory = value;
  }

  @action.bound
  setAppRestrictions(value) {
    this.appRestrictions = value;
  }

  @action.bound
  setReleaseDate(date) {
    console.log("release date", date);
    this.releaseDate = date;
  }

  @action.bound
  setReleaseNotes(value) {
    this.releaseNotes = value;
  }

  @action.bound
  setAppSize(size) {
    this.appSize = size;
  }

  @action.bound
  setAppVersion(version) {
    this.appVersion = version;
  }

  @action.bound
  setUserRating(value) {
    this.userRating = value;
  }
}

export default NewExperimentStore;
