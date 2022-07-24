import React from "react";
import "./styles.css";
import { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { AddUsers, DisplayUsers } from "./redux/actions/action";


export default function App() {
  const [users, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const store = useStore();
  
 //buttonLoader loads the buttons according to number of users 
  const buttonLoader = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    dispatch(AddUsers(data.data));
    setLoad(true);
    setUser(store.getState().rootReducer.AddReducer.users[0]);
  };

  //getUserData fetches the user data from the api, stores in redux and displays it in the card
  const getUserData = async (id) => { 
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    dispatch(DisplayUsers(data.data)); //DisplayUsers is a action
    setUserData(store.getState().rootReducer.ShowUser.user[0]); //ShowUser is a reducer
  };

  useEffect(() => {
    buttonLoader();
  }, []);

  return (
    <div className="App">
      {load ? (
        <>
          {userData.length === 0 ? ("") : (
            
            <div className="userBox">
              <div key={userData.id}>
                <p className="title">
                  <strong>{userData.first_name}</strong>
                </p>
                <p>{userData.email}</p>
                <img className="img" key={userData.avatar} alt="poto" src={userData.avatar} />
              </div>
            </div>)}
      
      <div className="flexButton">
        {users.length &&
          users.map((user) => {
            return (
              <div>
                <button className="clickButton" key={user.id } onClick={() => {
                  getUserData(user.id);
                }}
                >{user.id}</button>
              </div>
            );
          })}
          
      </div>
      </>):("The page is loading ... ")}
      
    </div>
  );
}

