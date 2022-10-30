import React from "react";
import { useTaskContext } from "../Context/Task_context";
import styled from "styled-components";
import { FcAlarmClock, FcPlus } from "react-icons/fc";

const Home = () => {
  const { modalOpen } = useTaskContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="heading">
          <FcAlarmClock size={30} />
          <h1> Forever Notes</h1>
        </div>
        <div className="app-info">
          <p> Here You can add your notes, edit and manage them.</p>
          <FcPlus className="add-icon" size={40} onClick={modalOpen} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  .container {
    width: 60vw;
    // background-color: hsl(205, 90%, 88%);
    background-image: linear-gradient(white, lightblue);
    margin: auto;
    margin-top: 5rem;
    padding: 20px;
    text-align: center;
  }
  .heading {
    // display: flex;
    // align-items: center;
    // justify-content: center;
  }
  .app-info {
    width: 50%;
    margin: auto;
    display: grid;
    grid-template-columns: 60% 40%;
  }
  p {
    text-align: start;
  }
  h1 {
    display: inline;
  }
  .add-icon {
    margin: auto;
  }
  @media (max-width: 800px) {
    .app-info {
      width: 100%;
    }
  }
`;
