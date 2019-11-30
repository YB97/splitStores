import { observable, action } from "mobx";

class NewExperimentStore {
  @observable isValid = false;
  @observable appName;
  @observable appStore;
  @observable device;
  @observable testPage;
  @observable elementForTest;
  @observable customLink;
  @observable experimentName;
  @observable actionOnInstall;
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
  @observable reviewsCount;
  @observable downloadsCount;
  @observable androidRewiewsCount = 0;
  @observable iosRewiewsCount = 0;
  @observable oneStarsCount = 0;
  @observable twoStarsCount = 0;
  @observable threeStarsCount = 0;
  @observable fourStarsCount = 0;
  @observable fiveStarsCount = 0;
  @observable screenshots = [];
  @observable variations = [
    {
      id: 1,
      name: "Variation 1",
      uploadedIcon: {},
      uploadedScreenshots: {},
      appName: "",
      description: ""
    },
    {
      id: 2,
      name: "Variation 2",
      uploadedIcon: {},
      uploadedScreenshots: {},
      appName: "",
      description: ""
    }
  ];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  setIsValid(val) {
    this.isValid = val;
  }

  @action.bound
  setAppStore(store) {
    this.appStore = store;
  }

  @action.bound
  setVariationName(name, id) {
    this.variations[id].name = name;
  }

  @action.bound
  setDescriptionVariant(desc, id) {
    this.variations[id].description = desc;
  }

  @action.bound
  setAppNameVariant(name, id) {
    this.variations[id].appName = name;
  }

  @action.bound
  addNewVariation() {
    const lastVariation = this.variations[this.variations.length - 1];
    const id = lastVariation ? lastVariation.id + 1 : 1;
    this.variations.push({
      id,
      name: `Variation ${id}`,
      uploadedIcon: {}
    });
  }

  @action.bound
  setCustomLink(link) {
    this.customLink = link;
  }

  @action.bound
  deleteVariation(id) {
    const idx = this.variations.findIndex(variation => variation.id === id);
    this.variations.splice(idx, 1);
  }

  @action.bound
  setAppName(name) {
    this.appName = name;
  }

  @action.bound
  setDevice(name) {
    this.device = name;
  }

  @action.bound
  setTestPage(value) {
    this.testPage = value;
  }

  @action.bound
  setElementForTest(value) {
    this.elementForTest = value;
  }

  @action.bound
  setReviewsCount(value) {
    if (value >= 0) {
      this.reviewsCount = value;
    }
  }

  @action.bound
  setExperimentName(value) {
    this.experimentName = value;
  }

  @action.bound
  setActionOnInstall(value) {
    this.actionOnInstall = value;
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
  }

  @action.bound
  setCurrency(value) {
    this.currency = value;
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
    if (value >= 0) {
      this.userRating = value > 5 ? 5 : value;
    }
  }

  @action.bound
  setDownloadsCount(num) {
    if (num >= 0) {
      this.downloadsCount = num;
    }
  }

  @action.bound
  setAndroidRewiewsCount(num) {
    this.androidRewiewsCount = num;
  }

  @action.bound
  setIosRewiewsCount(num) {
    this.iosRewiewsCount = num;
  }

  @action.bound
  setOneStarsCount(num) {
    if (num >= 0) {
      this.oneStarsCount = num;
    }
  }

  @action.bound
  setTwoStarsCount(num) {
    if (num >= 0) {
      this.twoStarsCount = num;
    }
  }

  @action.bound
  setThreeStarsCount(num) {
    if (num >= 0) {
      this.threeStarsCount = num;
    }
  }

  @action.bound
  setFourStarsCount(num) {
    if (num >= 0) {
      this.fourStarsCount = num;
    }
  }

  @action.bound
  setFiveStarsCount(num) {
    if (num >= 0) {
      this.fiveStarsCount = num;
    }
  }

  @action.bound
  setScreenshots(screenshots) {
    if (screenshots.length > 0) {
      this.screenshots = screenshots;
    }
  }
}

export default NewExperimentStore;
