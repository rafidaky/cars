import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const { name, cost } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              value={name}
              onChange={handleNameChange}
              className="input is-expanded"
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
              className="input is-expanded"
            />
          </div>
        </div>
        <div>
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default CarForm;
