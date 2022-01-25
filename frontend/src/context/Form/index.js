import { useState, createContext } from "react";

export const FormContext = createContext();

export default ({ children }) => {
  const [formValue, setFormValue] = useState({});

  const handleFormChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  return (
    <FormContext.Provider value={{ formValue, setFormValue, handleFormChange }}>
      {children}
    </FormContext.Provider>
  );
};
