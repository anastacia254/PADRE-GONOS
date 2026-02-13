import {useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

    useEffect(() => {
        async function fetchPizzaOfTheDay() {
            const response = await fetch("/api/pizza-of-the-day");
            const pizzaOfTheDayJson = await response.json();
            setPizzaOfTheDay(pizzaOfTheDayJson);
        }

        fetchPizzaOfTheDay();
}, []);

    return pizzaOfTheDay;
};