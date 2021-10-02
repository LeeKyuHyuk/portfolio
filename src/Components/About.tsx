import React from "react";
import styled from "styled-components";
import { Title, Content } from "./Text";

const Wrapper = styled.div`
  background: #FFFFFF;
  padding-top: 64px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const About = () => {
  return (
    <Wrapper>
      <Title>ABOUT ME</Title>
      <Content>
        저는 SK하이닉스에서 자동화 검증 시스템을 개발하고 있습니다.
        <br />
        React(TypeScript)를 주로 사용하며 그 외에도 여러 가지 프로그래밍 언어와
        스킬을 보유하고 있습니다.
        <br />주 관심사는 서비스 개발(Front-End, Mobile Application) 입니다.
        <br />
        가지고 있는 지식을 활용하여, 생활에서 불편하거나 필요한 것을 만들거나
        해결하는 것을 좋아합니다.
        <br />
        이러한 활동으로 성취감을 느끼고 더 좋은 품질의 소프트웨어를 개발하기
        위하여 실력을 쌓아가고 있습니다.
        <br />
        전문적인 소프트웨어 개발자가 되어 많은 사람들에게 편한 삶을 안겨주는 게
        제 꿈입니다.
      </Content>
    </Wrapper>
  );
};

export default About;
