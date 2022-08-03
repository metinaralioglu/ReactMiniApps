import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const  [httpError, setHttpError] = useState();


  useEffect(() => {
    fetch(
      "https://test-api-24125-default-rtdb.europe-west1.firebasedatabase.app//meals.json"
    )
      .then((response) => {
        
        return response.json();
        })
      .then((responseData) => {
        debugger;
        const loadedMeals = [];

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      }).catch((error)=>{
        
        setIsLoading(false);
        setHttpError(error.message);

      });
  }, []);

  if(isLoading){
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  
  if(httpError){
    return(
    <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
      )
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));


  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
