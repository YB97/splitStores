import React from "react";
import classes from "./checkboxcard.module.scss";

export default function({
  title = "Store*",
  store = "app-store",
  onSelect = () => {},
  disabled = false
}) {
  return (
    <div className={classes["checkbox-cards-wrap"]}>
      <span className={classes["title"]}>{title}</span>
      <div className={classes["checkbox-wrapper"]}>
        <input
          id="app-store"
          name="store"
          value="app-store"
          className={`${classes.hidden} ${classes.input}`}
          type="radio"
          checked={store === "app-store"}
          onChange={onSelect}
          disabled={disabled}
        />
        <label htmlFor="app-store" className={classes["checkbox"]}>
          <div className={classes["checkbox-img-wrap"]}>
            <svg
              width="38"
              height="49"
              viewBox="0 0 38 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 15.2977C17.3375 15.2977 14.725 13.3855 11.875 13.3855C8.07505 13.3855 4.75005 15.5367 2.85005 18.8831C-0.949953 25.5757 1.90005 35.6148 5.70005 41.1123C7.60005 43.7416 9.73755 46.8489 12.5875 46.6099C15.4375 46.6099 16.3875 44.6977 19.7125 44.6977C23.0375 44.6977 23.9875 46.6099 27.075 46.3708C30.1625 46.3708 32.0625 43.7416 33.725 40.8733C35.8625 37.766 36.8125 34.6587 36.8125 34.6587C36.8125 34.6587 31.1126 32.5074 30.875 25.8148C30.875 20.3172 35.3876 17.4489 35.625 17.4489C33.0126 13.6245 28.975 13.1465 27.5501 13.1465C23.75 12.9074 20.6625 15.2977 19 15.2977ZM25.1751 9.5611C26.6 7.64891 27.7875 5.01964 27.5501 2.62939C25.4125 2.62939 22.5625 4.06354 21.1375 5.97574C19.7125 7.64891 18.525 10.2782 18.7625 12.9074C21.1375 12.9074 23.75 11.4733 25.1751 9.5611Z"
                fill="#333333"
              />
            </svg>
          </div>
          <div className={classes["checkbox-text"]}>
            <span className={classes["checkbox-text"]}>App Store</span>
          </div>
        </label>
        <input
          id="google-play"
          name="store"
          value="google-play"
          className={`${classes.hidden} ${classes.input}`}
          type="radio"
          checked={store === "google-play"}
          onChange={onSelect}
          disabled={disabled}
        />
        <label htmlFor="google-play" className={classes["checkbox"]}>
          <div className={classes["checkbox-img-wrap"]}>
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M34.822 30.3562L29.3288 24.9551L9.16357 44.8405L34.822 30.3562Z"
                  fill="#BEBEBE"
                />
                <path
                  d="M34.822 15.6537L9.16357 1.16943L29.3288 21.0548L34.822 15.6537Z"
                  fill="#BEBEBE"
                />
                <path
                  d="M42.8624 25.7353C44.5069 24.4511 44.5069 21.557 42.7532 20.2728L37.3712 17.21L31.3663 23.006L37.3712 28.802L42.8624 25.7353Z"
                  fill="#BEBEBE"
                />
                <path
                  d="M3.89852 46L27.347 22.9962L3.89852 0.00191667V0C2.7121 0.611417 1.91669 1.725 1.91669 3.17208V42.8279C1.91669 44.275 2.7121 45.3886 3.89852 46Z"
                  fill="#BEBEBE"
                />
              </g>
            </svg>
          </div>
          <div className={classes["checkbox-text"]}>
            <span className={classes["checkbox-text"]}>Google Play</span>
          </div>
        </label>
      </div>
    </div>
  );
}
