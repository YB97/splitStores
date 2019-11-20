const API_DELAY = 700;

class SplitApi {
  _apps = getApps();
  _apiBase = "";
  _imageBase = "";

  // getResource = async url => {
  //   const res = await fetch(`${this._apiBase}${url}`);

  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
  //   }
  //   return await res.json();
  // };

  getAllApps = async () => {
    return this._apps;
  };

  getAppById = async id => {
    const app = this._apps.find(app => app.app_id === id);
    return app;
  };

  getExpsByAppId = async appId => {
    const app = this._apps.find(app => app.app_id === appId);
    return getExpByAppId(app.app_id);
  };
}

export default SplitApi;

function getApps() {
  return [
    {
      app_id: 1,
      app_name: "Facebook",
      link_store: "https://store-example.example",
      store_category: "Social",
      store: "Google",
      icon:
        "https://avatars.mds.yandex.net/get-zen_doc/1131118/pub_5b6c5d6914b36d00a91c0a7c_5b6c613a7ddf1100aaf26fa0/scale_2400",
      creation_date: "2019-11-11T11:39:43+03:00",
      experiments_count: "10"
    },
    {
      app_id: 2,
      app_name: "Clash of clans",
      link_store: "https://store-example.example",
      store_category: "Games",
      store: "Apple",
      icon:
        "https://img.mobigama.net/posts/2015-02/1423865158_clash_of_clans-1.png",
      creation_date: "2019-11-11T11:39:43+03:00",
      experiments_count: "2"
    },
    {
      app_id: 3,
      app_name: "DOTA2",
      link_store: "https://store-example.example",
      store_category: "Games",
      store: "Google",
      icon:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7vPwXvbxIHnNalwdyBaujl-cslGZ0Tmt6I5wBxm8-2xe2dNB&s",
      creation_date: "2019-11-11T11:39:43+03:00",
      experiments_count: "21"
    },
    {
      app_id: 4,
      app_name: "Super Arcade",
      link_store: "https://store-example.example",
      store_category: "Educational",
      store: "App Store",
      icon: "../../../static/images/apps/clash-royale.jpg",
      creation_date: "2019-09-11T11:39:43+03:00",
      experiments_count: "10"
    }
  ];
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
          experiment_name: "Play For Game Exp2",
          variations_count: 4,
          visitors_count: 8,
          clicks_count: 28,
          creation_date: "2019-11-14T14:39:43+03:00"
        }
      ];
    case "3":
      return [
        {
          experiment_id: 2,
          experiment_name: "Play For Game Exp2",
          variations_count: 4,
          visitors_count: 8,
          clicks_count: 28,
          creation_date: "2019-11-14T14:39:43+03:00"
        }
      ];
    case "4":
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
        }
      ];
  }
};
