import {UsePizzaOfTheDay} from "./usePizzaOfTheDay";

const intl = new intl.Numberformat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if(!pizzaOfTheDay) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div className="pizza-of-th-day-info">
        <h3>{pizza.name}</h3>
      </div>
  )