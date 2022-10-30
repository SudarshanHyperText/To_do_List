import React from "react";
import { useTaskContext } from "../Context/Task_context";
import { FcOk, FcFullTrash, FcEditImage } from "react-icons/fc";
import styled from "styled-components";

const List = () => {
  const { setIsEditing } = useTaskContext();
  const { list, clearList, removeItem, editItem, handleComplete, completed } =
    useTaskContext();
  return (
    <Wrapper>
      {list.length > 0 && (
        <div className="list-container">
          {list.map((item) => {
            const { id, name, data } = item;
            return (
              <div>
                <article key={id}>
                  <div className="title">
                    <b>Title: </b>
                    <p className={`${item.completed ? "complete" : ""}`}>
                      {" "}
                      {name}
                    </p>
                  </div>
                  <div className="title">
                    <b>Description: </b>
                    <p className={`${item.completed ? "complete" : ""}`}>
                      {data}
                    </p>{" "}
                  </div>
                  <div className="icons">
                    <FcEditImage
                      className="icon"
                      size={20}
                      onClick={() => editItem(id)}
                    />
                    <FcFullTrash
                      size={20}
                      className="icon"
                      onClick={() => removeItem(id)}
                    />
                    <FcOk
                      size={20}
                      className="icon"
                      onClick={() => handleComplete(item)}
                    />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      )}
      {list.length > 0 && (
        <div className="btn">
          <button type="button" className="clear-btn" onClick={clearList}>
            Clear all
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  .list-container {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 10px;
    width: 80%;
    margin: auto;
  }
  article {
    position: relative;
    padding: 25px;
    background-image: linear-gradient(white, #ffe4c4);
    height: 250px;
    overflow: hidden;

    margin-top: 50px;
  }
  .title {
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    grid-gap: 15px;
  }
  .icons {
    // display: flex;
    // justify-content: end;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .icon {
    margin: 5px;
    font-size: 30;
  }
  .btn {
    text-align: center;
  }
  .clear-btn {
    color: white;
    background-image: linear-gradient(white, red);
    border: none;
    padding: 10px 45px;
    margin: 25px;
    cursor: pointer;
  }
  .complete {
    text-decoration: line-through;
  }

  @media (max-width: 1200px) {
    .list-container {
      grid-template-columns: 50% 50%;
    }
  }
  @media (max-width: 750px) {
    .list-container {
      grid-template-columns: 100%;
    }
    h3 {
      grid-template-columns: 30% 70%;
    }
  }
  @media (max-width: 500px) {
    .title {
      display: block;
    }
    article {
      height: auto;
      padding: 5px 15px 15px 5px;
    }
  }
`;
