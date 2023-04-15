import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/features/expenses/expenseSlice";

const defaultFormFields = {
  title: "",
  expenseAmt: "",
  category: "Select category..",
  addDateTime: "",
};

function Expense() {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((store) => store.categories);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, expenseAmt, category } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    const currentdate = new Date();
    const date =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      "@" +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    dispatch(addExpense({ ...formFields, addDateTime: date }));
    setFormFields(defaultFormFields);
  };

  return (
    <div className="category-div">
      <input
        type="text"
        name="title"
        placeholder="Enter the expense.."
        onChange={handleChange}
        value={title}
      />

      <br />

      <input
        type="number"
        name="expenseAmt"
        placeholder="Enter expense amount.."
        onChange={handleChange}
        value={expenseAmt}
      />

      <br />

      <select onChange={handleChange} name="category" value={category}>
        <option value="empty">Select Category..</option>
        {categoryList.map((elem, idx) => {
          return (
            <option key={idx} value={elem.title}>
              {elem.title}
            </option>
          );
        })}
      </select>

      <br />

      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
}

export default Expense;
