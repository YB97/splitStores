import { observable, computed, action } from "mobx";

class VariationStore {
  @observable data = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  getVariationById(appId, expId, varId) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.data = getVariationById(appId, expId, varId);
        console.log(this.data);
        resolve();
      }, 300);
    });
    // try {
    //   const { data } = await axios.get(`/api/apps/${appId}/experiments/${expId}/variations/${varId}`);
    //   runInAction(() => {
    //     this.data = data.variations;
    //   });
    // } catch (e) {
    //   console.error(e);
    // }
  }

  @computed get avgRating() {
    if (!this.data.reviews) {
      return null;
    }
    const avgRating =
      this.data.reviews.reduce((total, statValue, index) => {
        total += statValue * (index + 1);
        return total;
      }, 0) / this.reviewsCount;
    return avgRating;
  }

  @computed get reviewsCount() {
    if (!this.data.reviews) {
      return null;
    }
    console.log("reviews");
    return this.data.reviews.reduce((total, statValue) => {
      total += statValue;
      return total;
    });
  }
}

export default VariationStore;

const getVariationById = (appId, expId, varId) => {
  switch (appId) {
    case "1":
      switch (expId) {
        case "1":
          switch (varId) {
            case "2":
              return {
                variation_id: "2",
                name: "Play for game Var 1",
                icon: "../../../static/images/apps/facebook.png",
                tags: ["Social", "Blog", "Game", "Some"],
                screenshots: ["../../../../../static/images/variations/1.jpg"],
                reviews: [10, 20, 40, 30, 100],
                developer: "My app developer",
                downloads_count: 10,
                rating: 3.2,
                age: "6+",
                description_preview: "My Vat 1 Description",
                description_text: `orem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
                soluta ipsum nisi fuga facere quaerat velit nemo, consequuntur
                consectetur numquam quos? Quaerat vel voluptates magni placeat natus
                Mollitia itaque, eveniet sapiente architecto nam nemo inventore
                reprehenderit, qui nesciunt iusto minima omnis, inventore
                repudiandae harum? Quasi sed debitis repellat voluptate possimus ab
                dolor maxime illo atque consequuntur quod veritatis impedit sint
                recusandae eaque, dolore neque eum eius numquam commodi qui
                accusamus doloribus odit sequi. Molestiae eius delectus a amet eum
                aliquam iste. Assumenda commodi laboriosam quisquam? Facilis, est
                nisi deserunt recusandae repellat officiis quasi sequi ex blanditiis
                neque cupiditate exercitationem voluptas qui aspernatur delectus
                dolores quia distinctio repellendus quod? Sapiente autem omnis
                voluptates ducimus impedit?`
              };
            case "5":
              return {
                variation_id: "5",
                name: "Play for game Var 2",
                icon: "../../../static/images/apps/facebook.png",
                tags: ["Social", "Blog", "Game"],
                screenshots: ["../../../../../static/images/variations/1.jpg"],
                reviews: [10, 20, 40, 30, 200],
                developer: "My app developer",
                downloads_count: 40,
                rating: 4.0,
                age: "4+",
                description_preview: "My Vat Description",
                description_text: `orem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
                soluta ipsum nisi fuga facere quaerat velit nemo, consequuntur
                consectetur numquam quos? Quaerat vel voluptates magni placeat natus
                Mollitia itaque, eveniet sapiente architecto nam nemo inventore
                reprehenderit, qui nesciunt iusto minima omnis, inventore
                repudiandae harum? Quasi sed debitis repellat voluptate possimus ab
                dolor maxime illo atque consequuntur quod veritatis impedit sint
                recusandae eaque, dolore neque eum eius numquam commodi qui
                accusamus doloribus odit sequi. Molestiae eius delectus a amet eum
                aliquam iste. Assumenda commodi laboriosam quisquam? Facilis, est
                nisi deserunt recusandae repellat officiis quasi sequi ex blanditiis
                neque cupiditate exercitationem voluptas qui aspernatur delectus
                dolores quia distinctio repellendus quod? Sapiente autem omnis
                voluptates ducimus impedit?`
              };
            case "3":
              return {
                variation_id: "3",
                name: "Play for game Var 3",
                icon: "../../../static/images/apps/facebook.png",
                tags: ["Social", "Blog", "Game"],
                screenshots: ["../../../../../static/images/variations/1.jpg"],
                reviews: [10, 20, 43, 30, 100],
                developer: "My app developer",
                downloads_count: 54,
                rating: 4.1,
                age: "3+",
                description_preview: "My Vat Description",
                description_text: `orem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
                soluta ipsum nisi fuga facere quaerat velit nemo, consequuntur
                consectetur numquam quos? Quaerat vel voluptates magni placeat natus
                Mollitia itaque, eveniet sapiente architecto nam nemo inventore
                reprehenderit, qui nesciunt iusto minima omnis, inventore
                repudiandae harum? Quasi sed debitis repellat voluptate possimus ab
                dolor maxime illo atque consequuntur quod veritatis impedit sint
                recusandae eaque, dolore neque eum eius numquam commodi qui
                accusamus doloribus odit sequi. Molestiae eius delectus a amet eum
                aliquam iste. Assumenda commodi laboriosam quisquam? Facilis, est
                nisi deserunt recusandae repellat officiis quasi sequi ex blanditiis
                neque cupiditate exercitationem voluptas qui aspernatur delectus
                dolores quia distinctio repellendus quod? Sapiente autem omnis
                voluptates ducimus impedit?`
              };
          }
        case "2":
          switch (varId) {
            case "2":
              return {
                variation_id: "2",
                name: "Play for game Exp 2 Var 1",
                icon: "../../../static/images/apps/facebook.png",
                tags: ["Blog", "Game"],
                screenshots: ["../../../../../static/images/variations/1.jpg"],
                reviews: [10, 21, 40, 30, 100],
                developer: "My app developer",
                downloads_count: 33,
                rating: 2.6,
                age: "18+",
                description_preview: "My Vat Description",
                description_text: `orem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
                soluta ipsum nisi fuga facere quaerat velit nemo, consequuntur
                consectetur numquam quos? Quaerat vel voluptates magni placeat natus
                Mollitia itaque, eveniet sapiente architecto nam nemo inventore
                reprehenderit, qui nesciunt iusto minima omnis, inventore
                repudiandae harum? Quasi sed debitis repellat voluptate possimus ab
                dolor maxime illo atque consequuntur quod veritatis impedit sint
                recusandae eaque, dolore neque eum eius numquam commodi qui
                accusamus doloribus odit sequi. Molestiae eius delectus a amet eum
                aliquam iste. Assumenda commodi laboriosam quisquam? Facilis, est
                nisi deserunt recusandae repellat officiis quasi sequi ex blanditiis
                neque cupiditate exercitationem voluptas qui aspernatur delectus
                dolores quia distinctio repellendus quod? Sapiente autem omnis
                voluptates ducimus impedit?`
              };
          }
        case "3":
          switch (varId) {
            case "6":
              return {
                variation_id: "6",
                name: "Play for game Var 1",
                icon: "../../../static/images/apps/facebook.png",
                tags: ["Blog", "Game"],
                screenshots: ["../../../../../static/images/variations/1.jpg"],
                reviews: [10, 20, 40, 3, 100],
                developer: "My app developer",
                downloads_count: 80,
                rating: 5.0,
                age: "2+",
                description_preview: "My Vat Description",
                description_text: `orem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
                soluta ipsum nisi fuga facere quaerat velit nemo, consequuntur
                consectetur numquam quos? Quaerat vel voluptates magni placeat natus
                Mollitia atque consequuntur quod veritatis impedit sint
                recusandae eaque, dolore neque eum eius numquam commodi qui
                accusamus doloribus odit sequi. Molestiae eius delectus a amet eum
                aliquam iste. Assumenda commodi laboriosam quisquam? Facilis, est
                nisi deserunt recusandae repellat officiis quasi sequi ex blanditiis
                neque cupiditate exercitationem voluptas qui aspernatur delectus
                dolores quia distinctio repellendus quod? Sapiente autem omnis
                voluptates ducimus impedit?`
              };
            case "8":
              return {
                variation_id: "8",
                name: "Play for game Var 2",
                icon: "../../../static/images/apps/facebook.png",
                screenshots: ["../../../../../static/images/variations/1.jpg"],
                reviews: [10, 20, 40, 30, 100],
                developer: "My app developer",
                downloads_count: 970,
                rating: 3.6,
                age: "3+",
                description_preview: "My Vat Description",
                description_text: `orem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
                soluta ipsum nisi fuga facere quaerat velit nemo, consequuntur
                consectetur numquam quos? Quaerat vel voluptates magni placeat natus
                Mollitia itaque, eveniet sapiente architecto nam nemo inventore
                reprehenderit, qui nesciunt iusto minima omnis, inventore
                repudiandae harum? Quasi sed debitis repellat voluptate possimus ab
                dolor maxime illo atque consequuntur quod veritatis impedit sint
                recusandae eaque, dolore neque eum eius numquam commodi qui
                accusamus doloribus odit sequi. Molestiae eius delectus a amet eum
                aliquam iste. Assumenda commodi laboriosam quisquam? Facilis, est
                nisi deserunt recusandae repellat officiis quasi sequi ex blanditiis
                neque cupiditate exercitationem voluptas qui aspernatur delectus
                dolores quia distinctio repellendus quod? Sapiente autem omnis
                voluptates ducimus impedit?`
              };
          }
      }
      break;
    case "2":
      switch (expId) {
        case "2":
          switch (varId) {
            case "2":
              return {
                variation_id: "2",
                name: "Super Arcade Exp2 Var 1",
                icon: "../../../static/images/apps/facebook.png",
                screenshots: ["../../../../../static/images/variations/1.jpg"],
                reviews: [10, 20, 43, 30, 100],
                developer: "My app developer",
                downloads_count: 415,
                rating: 4.6,
                age: "6+",
                description_preview: "My Vat Description",
                description_text: `orem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
                soluta ipsum nisi fuga facere quaerat velit nemo, consequuntur
                consectetur numquam quos? Quaerat vel voluptates magni placeat natus
                nam voluptatum quisquam doloremque, dolorum dolores, quidem maxime.
                Mollitia itaque, eveniet sapiente architecto nam nemo inventore
                atque asperiores! Vero, aliquam. Laudantium, repudiandae sit. Sequi
                minus harum labore voluptatibus ullam id, alias quibusdam aliquam ea
                molestias quas laudantium repudiandae quisquam expedita nemo animi
                enim minima pariatur ipsum, vitae rem non ipsa. Ipsum blanditiis
                nobis mollitia repellendus voluptatum est, ea officia perferendis
                quia maxime magnam earum? Voluptate veritatis ea officia.
                Praesentium sint quidem possimus blanditiis. Quas dignissimos illo
                ducimus saepe excepturi unde reprehenderit repellat eum et! Pariatur
                doloremque architecto velit ad praesentium ducimus debitis odio,
                reprehenderit, qui nesciunt iusto minima omnis, inventore
                repudiandae harum? Quasi sed debitis repellat voluptate possimus ab
                dolor maxime illo atque consequuntur quod veritatis impedit sint
                recusandae eaque, dolore neque eum eius numquam commodi qui
                accusamus doloribus odit sequi. Molestiae eius delectus a amet eum
                aliquam iste. Assumenda commodi laboriosam quisquam? Facilis, est
                nisi deserunt recusandae repellat officiis quasi sequi ex blanditiis
                neque cupiditate exercitationem voluptas qui aspernatur delectus
                dolores quia distinctio repellendus quod? Sapiente autem omnis
                voluptates ducimus impedit?`
              };
          }
      }
  }
};
