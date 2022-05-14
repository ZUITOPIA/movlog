import React, { useState } from "react";
import { Styles } from "./DramaInfo.style";
import "./DramaInfo.css";

export default function DramaInfo({
  id,
  videoType,
  title,
  likeCount,
  createdDate,
  dueDate,
  poster,
  description,
  handleLikeClick,
}) {
  const [isShow, setIsShow] = useState(false);

  const handleShowClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <div className="ArticleList">
        <Styles.VideoTitle>
          <span onClick={handleShowClick}>{`${videoType}, ${title}`}</span>
          <span className="Good" onClick={() => handleLikeClick(id)}>
            👍🏻
          </span>
          {likeCount}
        </Styles.VideoTitle>
        <p>{createdDate}</p>
        <hr />
      </div>

      {isShow && (
        <div className="Show">
          <h2>{title}</h2>
          <p>{dueDate}</p>
          {poster ? <img className="PosterImage" src={poster} alt="img" /> : ""}

          <p>
            작품 소개
            <br />
            <br />
            {`"${description.first}${description.second === "" ? `"` : ""}`}
            <br />
            {description.second === "" ? "" : `${description.second}"`}
          </p>
        </div>
      )}
    </>
  );
}
