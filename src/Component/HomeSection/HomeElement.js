import styled from "styled-components";
export const HomeContainer = styled.div`
  // background: #0c0c0c;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0 30px;
  height: 100vh /* 608px */ /* 800px ==================updated */;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: linear-gradient(
    //     180deg,
    //     rgba(0, 0, 0, 0.2) 0%,
    //     rgba(0, 0, 0, 0.6)
    //   ),
    //   linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.img`
  width: 100%;
  height: 100vh /* calc(100vh- 70px) */;
  -o-object-fit: cover;
  object-fit: cover;
  background: white;
`;
export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 0px 24px;
  /* padding-top: 25%;  */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* flex-start */
  @media screen and (max-width: 370px) {
    padding-top: 25%;
  }
`;

export const HomeH1 = styled.h1`
  color: red;
  font-size: 48px;
  text-align: left; /* left */
  text-shadow: 2px 2px #000;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomeP = styled.p`
  margin-top: 20px;
  color: black;
  fontweight: bold;
  font-size: 24px;
  text-align: left; /* left */
  // text-shadow: 2px 2px green;
  /* max-width:60px; */
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
