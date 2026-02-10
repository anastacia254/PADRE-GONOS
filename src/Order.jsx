import Pizza from "./Pizza";

export default function Order() {
    const pizzaType = "pepperoni";
    const pizzaSize = "M";
    return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type:</label>
            <select name="pizza-type" value={pizzaType}>

             </select>
          </div>
        </div>
      </form>
    </div>
    )
}