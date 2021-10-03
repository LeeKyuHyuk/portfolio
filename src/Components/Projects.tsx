import { Card, Col, Modal, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { Title } from "./Text";
import Project1 from "../Assets/Project1.jpg";
import Project2 from "../Assets/Project2.png";
import Project3 from "../Assets/Project3.jpg";
import Project4 from "../Assets/Project4.png";
import Project5 from "../Assets/Project5.png";
import Project6 from "../Assets/Project6.png";
import Project7 from "../Assets/Project7.png";

const Wrapper = styled.div`
  background: #FFFFFF;
  min-height: 200px;
  width: 100%;
  overflow: hidden;
  padding-top: 64px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const initModal = () => {
  return [false, false, false, false, false, false, false];
};

const changeModal = (project: number) => {
  const buffer = [false, false, false, false, false, false, false];
  buffer[project] = true;
  return buffer;
};

const Projects = () => {
  const [projectModal, setProjectModal] = React.useState<boolean[]>(
    initModal()
  );

  return (
    <Wrapper>
      <Title>PROJECTS</Title>
      <Row itemType="flex" align="middle" gutter={[8, 8]}>
        <Col xs={24} xl={12}>
          <Card
            title="PiCLFS"
            extra={<a onClick={() => setProjectModal(changeModal(4))}>읽기</a>}
            style={{ width: "100%" }}
          >
            <p>
              Raspberry Pi에서 작동하는 Cross Linux From Scratch (CLFS)를
              빌드합니다.
              <br />
              이것을 사용하여 사용자가 원하는 리눅스 플랫폼을 빌드할 수
              있습니다.
            </p>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card
            title="Android Debloater"
            extra={<a onClick={() => setProjectModal(changeModal(5))}>읽기</a>}
            style={{ width: "100%" }}
          >
            <p>
              안드로이드 스마트폰에 있는 원치 않는 애플리케이션과 기본 탑재
              애플리케이션을 루팅없이 제거하는 프로그램 입니다. Windows, Linux,
              macOS에서 동작합니다.
            </p>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card
            title="iHEIC"
            extra={<a onClick={() => setProjectModal(changeModal(6))}>읽기</a>}
            style={{ width: "100%" }}
          >
            <p>
              HEIC 이미지 파일을 쉽고 간편하게 JPG로 변환해주는 프로그램 입니다.
              <br />
              Windows, Linux, macOS에서 동작합니다.
            </p>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card
            title="결정맨"
            extra={<a onClick={() => setProjectModal(changeModal(3))}>읽기</a>}
            style={{ width: "100%" }}
          >
            <p>
              가끔 결정하기 힘든일이 있을때 사용하기 위해 만든 웹 서비스 입니다.
              <br />
              &nbsp;
            </p>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card
            title="영상 컨텐츠를 기반으로 PPL 정보를 제공하는 소셜TV 에코 시스템"
            extra={<a onClick={() => setProjectModal(changeModal(0))}>읽기</a>}
            style={{ width: "100%" }}
          >
            <p>
              플레이어에서의 스틸컷 핑거프린팅값을 재생시각보다 우선시하여 PPL
              정보를 보다 정확한 싱크에 세컨드스크린으로 전송, 출력합니다. 해당
              영상을 시청하고 있을 때 세컨드스크린앱에서 PPL 상품에 접근시키는
              기술입니다.
            </p>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card
            title="AirDisk"
            extra={<a onClick={() => setProjectModal(changeModal(1))}>읽기</a>}
            style={{ width: "100%" }}
          >
            <p>
              사용자의 스마트폰을 웹서버로 사용할 수 있게 해주는 안드로이드
              애플리케이션입니다. 이 애플리케이션을 사용하여 같은 와이파이에
              접속된 사람들과 영상, 사진 등등을 자유롭게 공유할 수 있습니다.
            </p>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card
            title="Morphing"
            extra={<a onClick={() => setProjectModal(changeModal(2))}>읽기</a>}
            style={{ width: "100%" }}
          >
            <p>
              정서 판단 속도 테스트를 위해 만들어진 Android Application 입니다.
              <br />
              사용처 : 한양대학교 HCI 연구실
            </p>
          </Card>
        </Col>
      </Row>
      <Modal
        title={
          <b>영상 컨텐츠를 기반으로 PPL 정보를 제공하는 소셜TV 에코 시스템</b>
        }
        visible={projectModal[0]}
        width="90%"
        style={{ top: "2%" }}
        okText="닫기"
        onOk={() => setProjectModal(initModal())}
        onCancel={() => setProjectModal(initModal())}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>
          플레이어에서의 스틸컷 핑거프린팅값을 재생시각보다 우선시하여 PPL
          정보를 보다 정확한 싱크에 세컨드스크린으로 전송, 출력합니다.
          <br />
          해당 영상을 시청하고 있을 때 세컨드스크린앱에서 PPL 상품에 접근시키는
          기술입니다.
        </p>
        <img style={{ width: "100%", marginTop: 12 }} src={Project1} />
      </Modal>
      <Modal
        title={<b>AirDisk</b>}
        visible={projectModal[1]}
        width="90%"
        style={{ top: "2%" }}
        okText="닫기"
        onOk={() => setProjectModal(initModal())}
        onCancel={() => setProjectModal(initModal())}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        사용자의 스마트폰을 웹서버로 사용할 수 있게 해주는 안드로이드
        애플리케이션입니다.
        <br />이 애플리케이션을 사용하여 같은 와이파이에 접속된 사람들과 영상,
        사진 등등을 자유롭게 공유할 수 있습니다.
        <img style={{ width: "100%", marginTop: 12 }} src={Project2} />
      </Modal>
      <Modal
        title={<b>Morphing</b>}
        visible={projectModal[2]}
        width="90%"
        style={{ top: "2%" }}
        okText="닫기"
        onOk={() => setProjectModal(initModal())}
        onCancel={() => setProjectModal(initModal())}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>정서 판단 속도 테스트를 위해 만들어진 Android Application 입니다.</p>
        <img style={{ width: "100%", marginTop: 12 }} src={Project3} />
      </Modal>
      <Modal
        title={<b>결정맨</b>}
        visible={projectModal[3]}
        width="90%"
        style={{ top: "2%" }}
        okText="닫기"
        onOk={() => setProjectModal(initModal())}
        onCancel={() => setProjectModal(initModal())}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>
          가끔 결정하기 힘든일이 있을때 사용하기 위해 만든 웹 서비스 입니다.
        </p>
        <b>URL : </b>
        <a href="https://kyuhyuk.kr/decision-man">
          https://kyuhyuk.kr/decision-man
        </a>
        <img style={{ width: "100%", marginTop: 12 }} src={Project4} />
      </Modal>
      <Modal
        title={<b>PiCLFS</b>}
        visible={projectModal[4]}
        width="90%"
        style={{ top: "2%" }}
        okText="닫기"
        onOk={() => setProjectModal(initModal())}
        onCancel={() => setProjectModal(initModal())}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>
          Raspberry Pi에서 작동하는 Cross Linux From Scratch (CLFS)를
          빌드합니다.
          <br />
          이것을 사용하여 사용자가 원하는 리눅스 플랫폼을 빌드할 수 있습니다.
        </p>
        <b>URL : </b>
        <a href="https://github.com/LeeKyuHyuk/PiCLFS">
          https://github.com/LeeKyuHyuk/PiCLFS
        </a>
        <img style={{ width: "100%", marginTop: 12 }} src={Project5} />
      </Modal>
      <Modal
        title={<b>Android Debloater</b>}
        visible={projectModal[5]}
        width="90%"
        style={{ top: "2%" }}
        okText="닫기"
        onOk={() => setProjectModal(initModal())}
        onCancel={() => setProjectModal(initModal())}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>
          안드로이드 스마트폰에 있는 원치 않는 애플리케이션과 기본 탑재
          애플리케이션을 루팅없이 제거하는 프로그램 입니다.
          <br />
          Windows, Linux, macOS에서 동작합니다.
        </p>
        <b>URL : </b>
        <a href="https://github.com/LeeKyuHyuk/Android-Debloater">
          https://github.com/LeeKyuHyuk/Android-Debloater
        </a>
        <img style={{ width: "100%", marginTop: 12 }} src={Project6} />
      </Modal>
      <Modal
        title={<b>iHEIC</b>}
        visible={projectModal[6]}
        width="90%"
        style={{ top: "2%" }}
        okText="닫기"
        onOk={() => setProjectModal(initModal())}
        onCancel={() => setProjectModal(initModal())}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>
          HEIC 이미지 파일을 쉽고 간편하게 JPG로 변환해주는 프로그램 입니다.
          <br />
          Windows, Linux, macOS에서 동작합니다.
        </p>
        <b>URL : </b>
        <a href="https://github.com/LeeKyuHyuk/iHEIC">
          https://github.com/LeeKyuHyuk/iHEIC
        </a>
        <img style={{ width: "100%", marginTop: 12 }} src={Project7} />
      </Modal>
    </Wrapper>
  );
};

export default Projects;
