import React from "react";
import "./styles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUsers } from "./redux/actions/action";


export default function App() {
  const [users, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const getdata = useSelector((state)=> state.rootReducer);
  
   function check(){
    setLoad(true);
    console.log(getdata.AddReducer);
     setUser(getdata.AddReducer);
  }
  const buttonLoader = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    dispatch(AddUsers(data.data));
    check();
  };

  const getUserData = async (id) => { 
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await response.json();
    setUserData(data.data);
  };

  useEffect(() => {
    buttonLoader();
  }, []);

  return (
    <div className="App">
      {load ? (
        <>
        {userData.length === 0 ? ("") : (<div>
              <div key={userData.id}>
                <p>
                  <strong>{userData.first_name}</strong>
                </p>
                <p>{userData.email}</p>
                <img key={userData.avatar} alt="poto" src={userData.avatar} />
              </div>
      </div>)}
      
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div>
                <button key={user.id } onClick={() => {
                  getUserData(user.id);
                }}
                >{user.id}</button>
              </div>
            );
          })}
          
          </div>
      </>):("saas to le lene de maadharchood!")}
      
    </div>
  );
}

