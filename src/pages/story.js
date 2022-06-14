import React from "react";
import Showdata from "../organisms/Showdata/showdata";
import "./story.css";

const Story = (props) => {
  const { contentId, story } = props;
  const { by, score, title, time, url } = story;
  const storyTime = new Date(time * 1000).toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  let timeDifference = new Date().getHours() - new Date(storyTime).getHours();
  const getStoryTime =
    timeDifference < 1
      ? Math.abs(new Date().getMinutes() - new Date(storyTime).getMinutes()) +
        " minutes ago"
      : Math.abs(timeDifference) + " hours ago";

  return (
    <React.Fragment>
      <div>
        <Showdata
          storyId={contentId}
          storyurl={url}
          storyTitle={title}
          storyTime={getStoryTime}
          storyScore={score}
          storyBy={by}
        />
      </div>
    </React.Fragment>
  );
};

export default Story;
