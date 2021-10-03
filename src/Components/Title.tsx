import React from "react";
import styled from "styled-components";
import IntroImage from "../Assets/Intro.jpg";

const Layout = styled.div`
  width: 100%;
  height: ${window.innerHeight}px;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: -1px 0 #FFFFFF, 0 1px #FFFFFF, 1px 0 #FFFFFF, 0 -1px #FFFFFF;
  animation: fadein 1.5s;
  -moz-animation: fadein 1.5s; /* Firefox */
  -webkit-animation: fadein 1.5s; /* Safari and Chrome */
  -o-animation: fadein 1.5s; /* Opera */
`;

const PhotoBackground = styled.div`
  background-image: url(${IntroImage});
  background-size: cover;
  background-repeat:no-repeat;
  background-position:center top;
  opacity: 0.9;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  min-height: 480px;
  &::before{
    content: "";
    opacity: 0.65;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
}
`;

const Name = styled.p`
  font-size: ${window.innerHeight / 20}px;
  font-weight: 700;
  opacity: 0.95;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: ${window.innerHeight / 35}px;
  font-weight: 400;
  opacity: 0.95;
  margin-bottom: 48px;
`;

const CircleArrow = () => {
  return (
    <div className="ico animated">
      <div className="circle circle-top"></div>
      <div className="circle circle-main"></div>
      <div className="circle circle-bottom"></div>
      <svg
        className="svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 612 612"
      >
        <defs>
          <clipPath id="cut-off-arrow">
            <circle cx="306" cy="306" r="287" />
          </clipPath>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        <path
          className="st-arrow"
          d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"
        />
      </svg>
    </div>
  );
};

const Title = () => {
  return (
    <Layout>
      <PhotoBackground>
        <TitleWrapper>
          <Name>KYUHYUK LEE</Name>
          <Description>
            #FRONT-END Developer
            <br />
            #MOBILE APP Developer
          </Description>
          <CircleArrow />
        </TitleWrapper>
      </PhotoBackground>
    </Layout>
  );
};

export default Title;
