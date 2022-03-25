import styled from 'styled-components';
import sun from '../Images/icons/sun.png';
import moon from '../Images/icons/moon.png';

export const SubHeading = styled.h2`
  font-size: 40px;
  letter-spacing: 4px;
  padding-bottom: 30px;
  color: ${(props) => props.theme.fontColor};

  ::after {
    content: '';
    width: 80px;
    height: 2px;
    margin: 0 auto;
    display: block;
    position: relative;
    top: 5px;
    background-color: orange;
  }

  @media screen and (max-width: 570px) {
    font-size: 30px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.navbg};
  box-shadow: 0px 0px 8px black;

  > div {
    width: 85%;
    margin: auto;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: ${(props) => props.theme.fontColor};

      span {
        width: 50px;
        height: 50px;
        margin-right: 8px;
        display: inline-block;
        font-size: 28px;
        font-weight: 800;
        line-height: 50px;
        letter-spacing: 1px;
        text-align: center;
        color: #fff;
        background-color: #007ced;
        border-radius: 100px;
      }
    }

    > ul {
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        a {
          color: ${(props) => props.theme.fontColor};
        }
      }
    }
  }

  .toggle {
    .switch {
      position: relative;
      display: inline-block;
      width: 35px;
      height: 20px;
      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #777;
        transition: 0.4s;
      }
      .slider::before {
        content: '';
        background-image: url(${(props) =>
          props.currTheme === 'dark' ? moon : sun});
        background-repeat: no-repeat;
        background-size: 14px 14px;
        width: 14px;
        height: 14px;
        position: absolute;
        left: 4px;
        bottom: 2px;
        border: 1px solid skyblue;
        background-color: #000;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      input:checked + .slider {
        background-color: #2196f3;
      }
      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }
      input:checked + .slider::before {
        transform: translateX(14px);
      }
      .slider.round {
        border-radius: 10px;
      }
      .slider.round::before {
        border-radius: 50%;
      }
    }
  }

  .hamburger {
    display: none;
  }

  @media screen and (max-width: 770px) {
    > div {
      position: relative;

      > ul {
        display: none;
        top: -1000px;
      }

      .hamburger {
        width: 35px;
        height: 35px;
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: end;
        padding: 8px 7px;
        background: ${(props) => props.theme.cardbg};
        border-radius: 8px;
        box-shadow: 0 6px 16px rgba(141, 146, 155, 0.16);
        cursor: pointer;
        > span {
          display: block;
          height: 2px;
          background-color: ${(props) => props.theme.fontColor};
        }
        > span:nth-child(1) {
          width: 20px;
        }
        > span:nth-child(2) {
          width: 15px;
        }
        > span:nth-child(3) {
          width: 20px;
        }
      }

      .show-anime span:nth-child(1) {
        transform: rotate(45deg);
        transition: 0.3s;
        top: 38%;
        position: relative;
      }
      .show-anime span:nth-child(2) {
        transform: scale(0);
        transition: 0.3s;
      }
      .show-anime span:nth-child(3) {
        transform: rotate(-45deg);
        transition: 0.3s;
        top: -30%;
        position: relative;
      }
      .show-anime + ul {
        width: 100%;
        height: 400px;
        z-index: 90;
        position: fixed;
        top: 60px;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin: 0;
        padding-top: 30px;
        padding-left: 7.5%;
        background-color: ${(props) => props.theme.navbg};
        scroll-behaviour: smooth;
        transition: all 0.8s ease-in-out;

        li {
          margin: 20px 0;
        }
      }
    }
  }
`;

export const ViewportSection = styled.section`
  width: 100%;
  height: 85%;
  padding: 50px 0;
  background-color: ${(props) => props.theme.bgColor};

  > div {
    width: 85%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .author-description {
      width: 50%;
      text-align: left;

      h1 {
        font-size: 35px;
        margin: 0 0 10px;
        letter-spacing: 2px;
        color: ${(props) => props.theme.fontColor};
      }
      p {
        letter-spacing: 2px;
        line-height: 2em;
        color: ${(props) => props.theme.fontColor};
      }
      .resume {
        margin-top: 30px;

        a {
          font-size: 1em;
          line-height: 1.2;
          padding: 0.8em 2.1em;
          color: ${(props) => props.theme.fontColor};
          background-color: ${(props) => props.theme.cardbg};
          border: 2px solid #007ced;
          border-radius: 30px;
          box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
          transition: all 0.3s ease-in-out;

          :hover {
            background-color: #007ced;
          }
        }
      }
    }
    .author-photo {
      width: 40%;

      img {
        width: 100%;
        border-radius: 50%;
        border: 10px solid
          ${(props) => (props.currTheme === 'dark' ? '#03203c' : '#777')};
      }
    }
  }

  .intro,
  .typing {
    display: flex;
    justify-content: start;
    align-items: center;
    letter-spacing: 3px;
    color: #207398;
  }
  h5 {
    font-size: 15px;
  }
  .intro {
    margin: 0 0 30px;
  }
  .typing {
    position: relative;
    left: 10px;
  }
  .typing::after {
    content: '';
    width: 2px;
    height: 80%;
    position: absolute;
    right: -5px;
    background-color: #777;
    animation: blink 0.8s ease infinite;
    transition: all 0.5s ease-in-out infinite;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 770px) {
    > div {
      .author-description {
        h1 {
          font-size: 30px;
        }
        p {
          font-size: 14px;
          letter-spacing: 1px;
          line-height: 1.6em;
        }
      }
      .author-photo {
        margin: 20px 0 0;
      }
    }
  }
  @media screen and (max-width: 635px) {
    padding-top: 20px;
    > div {
      flex-direction: column;

      .author-description {
        width: 100%;

        h1 {
          font-size: 20px;
        }
        .intro {
          width: 160px;
          margin: 0 auto 30px;
        }
        p {
          font-size: 12px;
          line-height: 1.5em;
        }
      }
      .author-photo {
        width: 80%;
        margin: 0;
      }
    }
  }
`;

export const SkillSection = styled.section`
  width: 100%;
  padding: 50px 0;
  background-color: ${(props) => props.theme.bgColor};

  > h2:nth-of-type(2) {
    margin-top: 40px;
  }

  > div {
    width: 85%;
    margin: auto;
    text-align: center;

    > ul {
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        width: 165px;
        margin: 20px 35px;
        padding: 10px 0;
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.cardbg};
        border: 2px solid ${(props) => props.theme.cardborder};
        border-radius: 15px;

        > img[alt='React Router'] {
          width: 100px;
          padding: 15px 0 25px;
        }
        > img[alt='Express'] {
          width: 100px;
          padding: 15px 0 25px;
        }
      }
    }
  }

  @media screen and (max-width: 770px) {
    > div {
      > ul {
        li {
          width: 120px;
          margin: 10px 10px;
          padding: 10px 0;

          > img {
            width: 80px;
            padding: 0;
          }
          > img[alt='React Router'] {
            padding: 0 0 25px;
          }
          > img[alt='Express'] {
            width: 80px;
            padding: 15px 0 25px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    > div {
      > ul {
        li {
          width: 90px;
          font-size: 10px;
          letter-spacing: 1px;

          > img {
            width: 60px;
          }
          > img[alt='React Router'] {
            width: 60px;
            padding: 0 0 25px;
          }
          > img[alt='Express'] {
            width: 60px;
            padding: 15px 0 10px;
          }
        }
      }
    }
  }
`;

export const ProjectSection = styled.section`
  width: 100%;
  padding: 50px 0 0;
  background-color: ${(props) => props.theme.bgColor};

  > div {
    width: 85%;
    margin: auto;
    text-align: center;

    .project-card-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: start;
    }

    .project-card {
      width: 35%;
      margin: 20px 0;
      background-color: tranparent;
      text-align: left;
      // padding: 15px 25px;
      // background-color: #333;
      // border: 2px solid #444;
      // border-radius: 15px;

      > img {
        width: 100%;
        border-radius: 10px;
      }

      > img + div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          min-width: 113px;
          font-size: 1em;
          line-height: 1.2;
          padding: 0.5em 1em;
          border-radius: 15px;
          border: 2px solid #007ced;
          color: ${(props) => props.theme.fontColor};
          background-color: transparent;
          box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
          transition: all 0.3s ease-in-out;
          cursor: pointer;

          :hover {
            background-color: rgb(0, 124, 237, 0.4);
          }
        }
      }

      .project-title {
        letter-spacing: 2px;
        margin: 10px 0;
        color: ${(props) => props.theme.fontColor};
      }

      .project-description {
        margin: 8px 0;
        color: ${(props) => props.theme.fontColor};
      }

      .btns {
        width: 100%;
        margin: 20px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
          font-size: 1em;
          line-height: 1.2;
          padding: 0.8em 2.1em;
          border-radius: 30px;
          color: ${(props) => props.theme.fontColor};
          background-color: ${(props) => props.theme.cardbg};
          box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
          transition: all 0.3s ease-in-out;
        }

        .demo {
          border: 2px solid #007ced;
          :hover {
            background-color: #007ced;
          }
        }

        .code {
          border: 2px solid #d5d5d5;
          :hover {
            color: ${(props) => props.theme.fontColor};
            background-color: #d5d5d5;
          }
        }
      }
    }
  }

  .project-detail-section {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: rgb(0, 0, 0, 0.8);

    > div {
      width: 80%;
      height: 90%;
      align-items: center;
      margin: auto;
      padding: 50px 50px;
      position: relative;
      top: 5%;
      z-index: 1500;
      background-color: ${(props) =>
        props.currTheme === 'dark' ? '#03203c' : '#fff'};

      .close-modal {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 20px;
        right: 30px;
        cursor: pointer;
        span {
          width: 2px;
          height: 34px;
          position: absolute;
          background-color: ${(props) => props.theme.fontColor};
        }
        span:nth-child(1) {
          transform: rotate(45deg);
        }
        span:nth-child(2) {
          transform: rotate(-45deg);
        }
      }

      > div:nth-of-type(2) {
        display: grid;
        grid-template-columns: 60% 38%;
        justify-content: space-between;
        text-align: left;

        .curr-title {
          font-size: 24px;
          color: ${(props) => props.theme.fontColor};
        }
        .curr-description {
          font-size: 18px;
          color: ${(props) => props.theme.fontColor};
        }
        .curr-image img {
          width: 100%;
          margin: 10px 0 10px;
        }
        .btns {
          width: 100%;
          margin: 30px 0 0;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            font-size: 1em;
            line-height: 1.2;
            margin: 0 20px;
            padding: 0.8em 2.1em;
            border-radius: 30px;
            color: ${(props) => props.theme.fontColor};
            background-color: ${(props) => props.theme.cardbg};
            box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
            transition: all 0.3s ease-in-out;
          }

          .demo {
            border: 2px solid #007ced;
            :hover {
              background-color: #007ced;
            }
          }

          .code {
            border: 2px solid #d5d5d5;
            :hover {
              color: ${(props) => props.theme.fontColor};
              background-color: #d5d5d5;
            }
          }
        }
        .type {
          margin: 50px 0 10px;
          color: ${(props) => props.theme.fontColor};
        }
        .tech-stack,
        .responsibilities,
        .features {
          margin: 20px 0 10px;
          color: ${(props) => props.theme.fontColor};
          + ul {
            padding-left: 50px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            li {
              list-style-type: disc;
              margin: 0 5px 0;
              color: ${(props) => props.theme.fontColor};
            }

            img {
              max-width: 80px;
            }
          }
        }
        .tech-stack + ul li {
          list-style-type: none;
        }
      }
    }
  }

  // @media screen and (max-width: 1200px) {
  .project-detail-section {
    overflow: auto;

    > div {
      height: auto;

      > div:nth-of-type(2) {
        grid-template-columns: 100%;

        .responsibilities,
        .features {
          + ul {
            display: block;
          }
        }
        .tech-stack {
          + ul {
            img {
              max-width: 50px;
            }
          }
        }
      }
    }
  }
  // }

  @media screen and (max-width: 1070px) {
    position: relative;
    > div {
      .project-card {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 570px) {
    > div {
      .project-card {
        > img + div {
          button {
            min-width: 100px;
            font-size: 0.8em;
          }
        }
        .project-title {
          font-size: 1em;
        }
        .project-description {
          font-size: 14px;
        }
        .btns {
          a {
            font-size: 0.8em;
          }
        }
      }
    }

    .project-detail-section {
      > div {
        > div:nth-of-type(2) {
          .curr-title {
            font-size: 24px;
          }
          .curr-description {
            font-size: 16px;
          }
          .btns {
            width: 80%;
            margin: 30px auto 0;
            a {
              font-size: 0.8em;
            }
          }
          .type {
            font-size: 14px;
          }
          .tech-stack,
          .responsibilities,
          .features {
            font-size: 14px;
            + ul {
              li {
                font-size: 13px;
              }

              img {
                max-width: 40px;
              }
            }
          }
        }
      }
    }
  }
`;

export const ContactSection = styled.section`
  width: 100%;
  padding: 80px 0;
  text-align: center;
  background-color: ${(props) => props.theme.bgColor};

  > div {
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      margin: 10px 0;

      a {
        color: ${(props) => props.theme.fontColor};
      }
      span:nth-of-type(2) {
        position: relative;
        top: -8px;
        font-size: 17px;
        margin-left: 8px;
      }
    }

    .contact-list {
      width: 600px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
    .social-list {
      width: 300px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }

    .linkedin:hover,
    .github:hover,
    .sicodewars:hover {
      opacity: 0.5;
      width: 32px;
      transition: all 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 770px) {
    > div {
      li {
        span:nth-of-type(2) {
          font-size: 15px;
        }
      }
      .contact-list {
        width: 200px;
        flex-direction: column;
        align-items: start;
      }
      .social-list {
        width: 80%;
      }
    }
  }
`;

export const FooterSection = styled.section`
  width: 100%;
  padding: 30px 0 50px;
  text-align: center;
  border-top: 2px solid #777;
  background-color: ${(props) => props.theme.bgColor};

  > div {
    width: 85%;
    margin: auto;
    color: ${(props) => props.theme.fontColor};
  }
`;
