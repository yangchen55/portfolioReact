import React, { Suspense, useContext, useEffect, useState } from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const Twitter = () => {
  const { isDark } = useContext(StyleContext);
  const [content, setContent] = useState(<Loading />);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!document.querySelector("#twitter iframe")) {
        setContent(<div className="centerContent"><h2>Can't load? Check privacy protection settings</h2></div>);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!twitterDetails.display) {
    return null;
  }

  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="tw-main-div" id="twitter">
        {content}
        <div className="centerContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterDetails.userName}
            options={{ height: 400, width: window.screen.width }}
            placeholder={<Loading />}
            autoHeight={false}
            borderColor="#fff"
            key={isDark ? "1" : "2"}
            theme={isDark ? "dark" : "light"}
            noFooter={true}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default Twitter;
