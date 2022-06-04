import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1529603868279070721"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="prazaaaaa"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://instagram.com/prajiitzala"}
          options={{ text: "#reactjs is awesome", via: "prazaaaaa" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
