import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [values, setValues] = useState("");

  return (
    <MyContext.Provider value={{values, setValues}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
