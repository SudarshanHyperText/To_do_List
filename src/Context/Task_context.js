import React, { createContext, useContext, useEffect, useState } from "react";

const TaskContext = React.createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

export const TaskProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [list, setList] = useState(getLocalStorage());

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      console.log("please enter details");
    } else if (title && description && isEditing) {
      //deal with edit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, name: title, data: description };
          }
          return item;
        })
      );
      setTitle("");
      setDescription("");
      setIsEditing(false);
      setEditId(null);
    } else {
      //show alert
      const newItem = {
        id: new Date().getTime().toString(),
        name: title,
        data: description,
        completed: false,
      };
      setList([...list, newItem]);
      setTitle("");
      setDescription("");
    }
  };

  const clearList = () => {
    setList([]);
  };
  const removeItem = (id) => {
    const newItem = list.filter((item) => item.id !== id);
    setList(newItem);
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setTitle(specificItem.name);
    setDescription(specificItem.data);
    setIsModalOpen(true);
  };

  const handleComplete = (item) => {
    setList(
      list.map((elem) => {
        if (elem.id === item.id) {
          return { ...elem, completed: !elem.completed };
        }
        return elem;
      })
    );
  };

  const modalOpen = () => {
    console.log("clicked");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <TaskContext.Provider
      value={{
        list,
        title,
        description,
        setTitle,
        setDescription,
        handleSubmit,
        isEditing,
        clearList,
        removeItem,
        editItem,
        handleComplete,
        completed,
        isModalOpen,
        setIsModalOpen,
        modalOpen,
        closeModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
