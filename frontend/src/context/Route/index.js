import { useState, createContext } from "react";

export const RouteContext = createContext();

export default ({ children }) => {
  const [route, setRoute] = useState(null);

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};
