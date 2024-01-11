import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalApp = ({ active, setActive, tasks, setTasks, text, setText }) => {
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");

  const addUser = () => {
    setActive(false);
    let payload = {
      title,
      status,
    };
    setTasks([...tasks, { ...payload }]);
    setText("");
  };
  return (
    <Modal isOpen={active} toggle={() => setActive(false)}>
      <ModalHeader>
        <h1>Add user</h1>
      </ModalHeader>
      <ModalBody>
        <form>
          <input
            type="text"
            className="form-control"
            defaultValue={text?.title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            className="form-control my-3"
            defaultValue={text?.status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="open">open</option>
            <option value="pending">pending</option>
            <option value="inproge">inproge</option>
            <option value="progress">progress</option>
          </select>
        </form>
      </ModalBody>
      <ModalFooter>
        <button onClick={addUser} className="btn btn-success">
          save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalApp;
