import { useState, useEffect } from "react";

function Form({ addTodo, todos }) {
  const [form, setForm] = useState({ text: "", isCompleted: false });

  useEffect(() => {
    setForm({ text: "" });
  }, [todos]);

  
  const onChangeInput = (e) => {
    setForm({ ...form, text:e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (form.text === "") {
        return false;
      }

    addTodo([...todos, form]);

    setForm({text:""});
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="What needs to be done" onChange={onChangeInput} />
    </form>
  );
}

export default Form;
