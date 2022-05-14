import cuid from "cuid";
import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import DramaInfo from "./DramaInfo";

const videoType = {
  drama: "드라마",
  movie: "영화",
};

const dummyVideoData = [
  {
    id: cuid(),
    title: "스물다섯 스물하나",
    videoType: videoType.drama,
    poster: "image/poster_fiveone.jpeg",
    likeCount: 0,
    createdDate: "2022.05.12",
    dueDate: "2022.02.12 ~ 2022.04.03",
    description: {
      first:
        "1998년, 세상이 통째로 흔들리듯 불안하던 해, 스물둘과 열여덟이 만났다. 둘은 서로의 이름을 처음 불렀다.",
      second:
        "스물셋과 열아홉이 되었고, 둘은 의지했다. 스물넷과 스물이 되었고, 둘은 상처를 냈다. 스물다섯 스물하나가 됐을 때, 둘은 사랑했다.",
    },
  },
  {
    id: cuid(),
    title: "도시남녀의 사랑법",
    poster: "image/poster_city.jpeg",
    videoType: videoType.drama,
    likeCount: 0,
    createdDate: "2021.2.24",
    dueDate: "2020.12.22 ~ 2021.02.16",
    description: {
      first:
        "복잡한 도시 속 내 안에 또 다른 나를 품고 치열하게 살아가는 청춘들의 리얼 연애담을 담은 카카오TV 오리지널 드라마 ",
      second: "",
    },
  },
  {
    id: cuid(),
    title: "악의 꽃",
    poster: null,
    videoType: videoType.movie,
    likeCount: 0,
    createdDate: "2021.2.24",
    dueDate: "0000.00.00 ~ 0000.00.00",
    description: {
      first: "Lorem ipsum dolor sit amet, sit verear fierent maluisset an.",
      second: "Invenire mnesarchum in nam",
    },
  },
  {
    id: cuid(),
    title: "독전",
    poster: null,
    videoType: videoType.movie,
    likeCount: 0,
    createdDate: "2018.05.22",
    dueDate: "0000.00.00 ~ 0000.00.00",
    description: {
      first: "Lorem ipsum dolor sit amet, sit verear fierent maluisset an.",
      second:
        "Invenire mnesarchum in nam, tibique accusata mei te. Ei eum aliquip diceret, eum at molestie eloquentiam disputationi.",
    },
  },
];

const CustomDramaInfo = styled(DramaInfo)``;

function App() {
  // useState(); 함수가 실행되고 나면 [,] array가 남음.
  // array의 첫번째 자리 : 진짜 데이터
  // array의 두번째 자리 : 진짜 데이터를 수정하기 위한 함수.
  const [videoData, setVideoData] = useState(dummyVideoData);

  const handleLikeClick = (videoId) => {
    const newVideoData = videoData.map((video) => {
      if (videoId === video.id) {
        video.likeCount += 1;
      }
      return video;
    });
    setVideoData(newVideoData);
  };

  return (
    <div className="App">
      <div className="Header">
        <div>ZUITOPIA</div>
      </div>

      {videoData.map((video) => (
        <CustomDramaInfo
          key={video.id}
          id={video.id}
          videoType={video.videoType}
          title={video.title}
          likeCount={video.likeCount}
          createdDate={video.createdDate}
          dueDate={video.dueDate}
          poster={video.poster}
          description={video.description}
          handleLikeClick={handleLikeClick}
        />
      ))}
    </div>
  );
}

// <div>가 여러개로 복잡할 때 하나의 컴포넌트로 묶어서 따로 빼냄. 사용하기에도 쉬워짐. 컴포넌트의 시작은 대문자.
// 컴포넌트 많이 만들면 state 사용할 때 복잡해짐

export default App;
