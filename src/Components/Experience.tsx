import { Timeline } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { Title } from "./Text";

const Wrapper = styled.div`
  background: #FFFFFF;
  padding-top: 64px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const Experience = () => {
  return (
    <Wrapper>
      <Title>EXPERIENCE</Title>
      <Timeline mode="alternate">
        <Timeline.Item color="green">&nbsp;</Timeline.Item>
        <Timeline.Item color="gray">
          <div>
            한양대학교 컴퓨터공학부 소프트웨어 전공 입학
            <br />
            <CalendarOutlined
              style={{ color: "#B0BEC5", fontSize: "16px", paddingRight: 8 }}
            />
            2012년
          </div>
        </Timeline.Item>
        <Timeline.Item color="gray">
          Alticast - Student Internship
          <br />
          <CalendarOutlined
            style={{ color: "#B0BEC5", fontSize: "16px", paddingRight: 8 }}
          />
          2013년 7월 ~ 2013년 8월
        </Timeline.Item>
        <Timeline.Item color="gray">
          한양대학교 임베디드 소프트웨어 시스템 연구실 - Student Internship
          <br />
          <CalendarOutlined
            style={{ color: "#B0BEC5", fontSize: "16px", paddingRight: 8 }}
          />
          2014년 1월 ~ 2014년 5월
        </Timeline.Item>
        <Timeline.Item color="gray">
          Kakao Crop - Student Internship
          <br />
          <CalendarOutlined
            style={{ color: "#B0BEC5", fontSize: "16px", paddingRight: 8 }}
          />
          2014년 7월 ~ 2014년 8월
        </Timeline.Item>
        <Timeline.Item color="gray">
          한양대학교 컴퓨터공학부 소프트웨어 전공 졸업
          <br />
          <CalendarOutlined
            style={{ color: "#B0BEC5", fontSize: "16px", paddingRight: 8 }}
          />
          2018년
        </Timeline.Item>
        <Timeline.Item color="green">
          SK하이닉스 - Full Time
          <br />
          <CalendarOutlined
            style={{ color: "#B0BEC5", fontSize: "16px", paddingRight: 8 }}
          />
          2018년 2월 ~
        </Timeline.Item>
      </Timeline>
    </Wrapper>
  );
};

export default Experience;
