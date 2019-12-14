import React from "react";
import ResourcesPage from "../ResourcesPage/ResourcesPage";

const TechQ = ({ isAuthenticated, authButtonMethod, user }) => {
  console.log(isAuthenticated);
  console.log(authButtonMethod);
  console.log(user);

  return (
    <>
      <ResourcesPage />
    </>
  );
};

export default TechQ;
