import React, { useState } from "react";

const myContextApi = React.createContext();

const ContextApi = ({ children }) => {
  const [showNavlinks, setShowNavlinks] = useState(false);


  const toggleNavlinks = () => {
    setShowNavlinks((prev) => !prev);
  };



  return (
    <myContextApi.Provider
      value={{
        showNavlinks,
        toggleNavlinks,
      }}
    >
      {children}
    </myContextApi.Provider>
  );
};

export { myContextApi, ContextApi };
