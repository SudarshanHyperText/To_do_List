import React from "react";
import { useTaskContext } from "../Context/Task_context";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Form from "./Form";

const Form_Modal = () => {
  const { isModalOpen, closeModal } = useTaskContext();
  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <Form />
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </Wrapper>
  );
};

export default Form_Modal;

const Wrapper = styled.div`
  .modal-overlay {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    background-image: linear-gradient(white, #dda0dd);

    transition: all 0.3s linear;
    visibility: hidden;
    z-index: -1;
  }
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: red;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    .modal-overlay {
      width: 95%;
      height: 50%;
    }
  }
`;
