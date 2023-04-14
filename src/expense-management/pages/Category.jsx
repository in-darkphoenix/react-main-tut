import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCategory } from "../redux/features/categories/categorySlice";
import "../styles/Category.css";

const defaultFormFields = {
  title: "",
  plannedAmt: "",
};

function Category() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, plannedAmt } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(addCategory(formFields));
    setFormFields(defaultFormFields);
  };

  return (
    <div className="category-div">
      <input
        type="text"
        name="title"
        placeholder="Enter Bugdet Category.."
        onChange={handleChange}
        value={title}
      />

      <br />

      <input
        type="number"
        name="plannedAmt"
        placeholder="Enter planned amount.."
        onChange={handleChange}
        value={plannedAmt}
      />

      <br />

      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
}

export default Category;
