import React from "react";
import classes from "./overview.module.scss";

function Overview({
  screenshots = ["../../../../../static/images/variations/1.jpg"],
  descriptionPreview = "Some title with some words"
}) {
  const images = screenshots.map(href => {
    return (
      <div className={classes["img-block"]} key={href}>
        <div className={classes["img-wrapper"]}>
          <img className={classes.img} src={href} />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={classes.overview}>
        <div className={classes["overview-title"]}>
          <span className={classes.title}>Overview</span>
        </div>
        <div className={classes.content}>
          <div className={classes.wrapper}>{images}</div>
        </div>
        <div className={classes.description}>
          <div className={classes["description-preview"]}>
            {descriptionPreview}
          </div>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
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
            voluptates ducimus impedit?
          </p>
        </div>
      </div>
    </>
  );
}

export default Overview;
