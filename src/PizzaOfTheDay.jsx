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
        <h3>{pizzaOfTheDay.name}</h3>
        <p>{pizzaOfTheDay.description}</p>
        <p className="pizza-of-the-day-price">
            from: {intl.format(pizzaOfTheDay.sizes.S)}
        </p>
      </div>
      <img 
      className="pizza-of-the-day-image"
      src={pizzaOfTheDay.image} 
      alt={pizzaOfTheDay.name} 
      />
      </div>
      </div>
  );
};

export default PizzaOfTheDay;