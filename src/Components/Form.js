import React, { useState } from "react";
import styled from "styled-components";
import { useTaskContext } from "../Context/Task_context";

const Form = () => {
  const {
    title,
    description,
    setDescription,
    setTitle,
    handleSubmit,
    isEditing,
    closeModal,
  } = useTaskContext();

  return (
    <Wrapper>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="title-input">
            <label htmlFor="title">
              <b>Title:</b>
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="description-input">
            <label htmlFor="description">
              <b>Description:</b>
            </label>
            <textarea
              rows={5}
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="submit-btn" type="submit" onClick={closeModal}>
            {isEditing ? "Update" : "Add ToDo"}{" "}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  .form {
    width: 80%;
    margin: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 1rem;
  }
  .title-input {
    display: grid;
    grid-template-columns: 30% 70%;
    margin-top: 1rem;
  }
  .description-input {
    display: grid;
    grid-template-columns: 30% 70%;
    margin-top: 1rem;
  }
  .submit-btn {
    margin-top: 30px;
    padding: 10px;
    float: right;
  }
  input {
    border-radius: 5px;
  }
  textarea {
    border-radius: 5px;
  }
  @media (max-width: 500px) {
    .title-input {
      grid-template-columns: 50% 50%;
    }
    .description-input {
      grid-template-columns: 50% 50%;
    }
  }
`;
