import React from "react";
import { LinkedinFilled, MailTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import { Title, Content } from "./Text";

const Wrapper = styled.div`
  background: #FFFFFF;
  padding-top: 64px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Title>CONTACT</Title>
      <Content>
        <a
          style={{ fontSize: "64px", marginRight: 32 }}
          href="mailto:lee@kyuhyuk.kr"
        >
          <MailTwoTone twoToneColor="#90A4AE" />
        </a>
        <a
          style={{ color: "#90A4AE", fontSize: "64px" }}
          href="https://linkedin.com/in/leekyuhyuk"
        >
          <LinkedinFilled />
        </a>
      </Content>
    </Wrapper>
  );
};

export default Contact;
