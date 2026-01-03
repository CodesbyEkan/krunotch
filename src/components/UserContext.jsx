import { createContext, useState } from "react";

const UserContext = createContext();

const MyProvider = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { MyProvider, UserContext };
