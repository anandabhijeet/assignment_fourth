
import {React, useEffect, useState} from "react";
import UserCard from "../../Components/UserCard/UserCard";
import "../BodySection/BodySection.css";

const BodySection = () => {
    
  let userDataArray = localStorage.getItem("data");
  let newUserDataArray = JSON.parse(userDataArray);
  //   console.log(newUserDataArray.length);

  return (
    <div className="Homepage-body">
      {newUserDataArray ? (
        newUserDataArray.map((user, index) => (
          <div key={index}>
            <UserCard
              name={user?.name}
              birthday={user?.birthday}
              gender={user?.gender}
              address={user?.address}
              short_bio={user?.short_bio}
            />
          </div>
        ))
      ) : (
        <h1>No Current User</h1>
      )}
    </div>
  );
};

export default BodySection;
