import React, { useState } from "react";
import ModalApp from "./component/ModalApp";

const App = () => {
  const [active, setActive] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, header: "Open", title: "task1", status: "open" },
    { id: 2, header: "Pending", title: "task2", status: "pending" },
    { id: 3, header: "Inproge", title: "task3", status: "inproge" },
    { id: 4, header: "Progress", title: "task4", status: "progress" },
  ]);

  const [text,setText] = useState('')

  const deleteTask = (id) => {
    let filtered = tasks.filter((item) => item.id !== id);
    setTasks(filtered);
  };


  const editItem =(item)=>{
    setActive(true)
    setText(item)
    console.log(text);
  }
  return (
    <div className="container">
      <ModalApp
        active={active}
        setActive={setActive}
        tasks={tasks}
        setTasks={setTasks}
        text={text}
        setText={setText}
      ></ModalApp>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="card header">
              <h1 className="text-center">Open</h1>
              {tasks
                .filter((item) => item.status == "open")
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="card-body d-flex align-items-center gap-3"
                    >
                      <span>{item.title}</span>
                      <button className="btn btn-info" onClick={()=>editItem(item)}>Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTask(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              <button
                className="btn btn-success"
                onClick={() => setActive(true)}
              >
                Open
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card header">
              <h1 className="text-center">Pending</h1>
              {tasks
                .filter((item) => item.status == "pending")
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="card-body d-flex align-items-center gap-3"
                    >
                      <span>{item.title}</span>
                      <button className="btn btn-info" onClick={()=>editItem(item)}>Edit</button>
                      <button className="btn btn-danger"  onClick={() => deleteTask(item.id)}>Delete</button>
                    </div>
                  );
                })}
              <button
                className="btn btn-success"
                onClick={() => setActive(true)}
              >
                Open
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card header">
              <h1 className="text-center">Inproge</h1>
              {tasks
                .filter((item) => item.status == "inproge")
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="card-body d-flex align-items-center gap-3"
                    >
                      <span>{item.title}</span>
                      <button className="btn btn-info" onClick={()=>editItem(item)}>Edit</button>
                      <button className="btn btn-danger"  onClick={() => deleteTask(item.id)}>Delete</button>
                    </div>
                  );
                })}
              <button
                className="btn btn-success"
                onClick={() => setActive(true)}
              >
                Open
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card header">
              <h1 className="text-center">Progress</h1>
              {tasks
                .filter((item) => item.status == "progress")
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="card-body d-flex align-items-center gap-3"
                    >
                      <span>{item.title}</span>
                      <button className="btn btn-info" onClick={()=>editItem(item)}>Edit</button>
                      <button className="btn btn-danger"  onClick={() => deleteTask(item.id)}>Delete</button>
                    </div>
                  );
                })}
              <button
                className="btn btn-success"
                onClick={() => setActive(true)}
              >
                Open
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
