import { useContext, useState } from "react";
import { FormContext } from "../../context/Form";

const StepsForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    media: "",
  });
  const { formValue, handleFormChange } = useContext(FormContext);

  const handleChange = (e) => {
    e.target.style.height = "100px";
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form type="submit" id="steps-form">
      <input
        type="text"
        name="title"
        placeholder="Enter Step Title"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="description"
        placeholder="Enter Description"
        value={form.description}
        onChange={handleChange}
      ></textarea>
      <input
        type="file"
        value={form.media}
        onChange={handleChange}
        name="media"
      />
    </form>
  );
};

export default StepsForm;
