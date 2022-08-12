import { useState, createContext } from "react";

export const FormContext = createContext();

export default ({ children }) => {
  const [formValue, setFormValue] = useState({
    image: "",
    name: "",
    title: "",
    description: "",
    media: "",
    foreignKey: 0,
  });

  const handleFormChange = (event) => {
    if (event.target.type === "file" || event.target.name === "media") {
      let mediaFromInput = event.target.files[0];
      setFormValue({ ...formValue, [event.target.name]: mediaFromInput });
    } else {
      setFormValue({ ...formValue, [event.target.name]: event.target.value });
    }
  };

  return (
    <FormContext.Provider value={{ formValue, setFormValue, handleFormChange }}>
      {children}
    </FormContext.Provider>
  );
};
