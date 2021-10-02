import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { Title } from "./Text";
import Android from "../Assets/Skill_Android.png";
import ARM from "../Assets/Skill_ARM_Assembly.png";
import CSS3 from "../Assets/Skill_CSS3.png";
import HTML5 from "../Assets/Skill_HTML5.png";
import JAVA from "../Assets/Skill_JAVA.png";
import Kotlin from "../Assets/Skill_Kotlin.png";
import Linux from "../Assets/Skill_Linux.png";
import Python from "../Assets/Skill_Python.png";
import ReactJS from "../Assets/Skill_React.png";
import Swift from "../Assets/Skill_Swift.png";
import TypeScript from "../Assets/Skill_TypeScript.png";

const Wrapper = styled.div`
  background: #FFFFFF;
  min-height: 200px;
  width: 100%;
  overflow: hidden;
  padding-top: 64px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  text-align: center;
`;

const SkillWrapper = styled.div`
  display: inline-block;
  background-color: #1F1F1F;
  padding: 10px 15px 10px 15px;
  max-width:100px;
  margin: 5px 0;
  border-radius: 8px;
  &:hover {
    background-color: #363636;
  }
`;

const SkillImage = styled.img`
  max-width:100%;
  max-height:100%;
`;

const SkillName = styled.p`
color: #FFFFFF;
padding-top: 10px;
margin: 0;
`;

const Skill = () => {
  return (
    <Wrapper>
      <Title>SKILL OVERVIEW</Title>
      <Row itemType="flex" align="middle" gutter={[8, 8]}>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={ReactJS} />
            <SkillName>React</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={TypeScript} />
            <SkillName>TypeScript</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={HTML5} />
            <SkillName>HTML5</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={CSS3} />
            <SkillName>CSS3</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={JAVA} />
            <SkillName>JAVA</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={Kotlin} />
            <SkillName>Kotlin</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={Android} />
            <SkillName>Android</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={Swift} />
            <SkillName>Swift</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={Python} />
            <SkillName>Python</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={ARM} />
            <SkillName>Assembly</SkillName>
          </SkillWrapper>
        </Col>
        <Col xs={12} xl={4}>
          <SkillWrapper>
            <SkillImage src={Linux} />
            <SkillName>Linux</SkillName>
          </SkillWrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Skill;
