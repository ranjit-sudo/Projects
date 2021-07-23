import React, { useState, useEffect } from "react";
import "./Home.css";
import Loader from "react-loader-spinner";
import { db, auth } from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({ user }) {
  const history = useHistory();
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    if (user) {
      const docRef = db.collection("todos").doc(user.uid);
      docRef.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          console.log(docSnap.data().todos);
          setAllTodos(docSnap.data().todos);
        }
      });
    }
  }, [user]);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos")
      .doc(user.uid)
      .set({ todos: [...allTodos, todo] });
  };

  const removeTodo = (ele) => {
    const docRef = db.collection("todos").doc(user.uid);
    docRef.get().then((docSnap) => {
      const updated = docSnap.data().todos.filter((todo) => todo !== ele);
      docRef.update({
        todos: updated,
      });
    });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        toast(`SignOut Succesfull!`);
        history.push("/login");
      })
      .catch((error) => {
        toast(`SignOut Unsuccesfull!`);
      });
  };

  if (user != null) {
    return (
      <div className="home">
        <div className="nav">
          <h1 className="head">Welcome {user.email}</h1>
          <button onClick={signOut}>Sign Out</button>
        </div>

        <h1 className="subHead">Add TODOS</h1>
        <div className="Inp">
          <input
            type="text"
            className="inp"
            placeholder="Add TODO here"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="Btn" onClick={(e) => addTodo(e)}>
            Add
          </button>
        </div>

        <div className="list">
          {allTodos.map((todo) => {
            return (
              <div className="comp" key={todo}>
                <h3>{todo}</h3>
                <DeleteIcon className="icon" onClick={() => removeTodo(todo)} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="home1">
        <Loader
          type="TailSpin"
          color="#66fcf1"
          height={70}
          width={70}
          timeout={5000}
        />
        <h1>Loading!!!</h1>
      </div>
    );
  }
}

export default Home;
