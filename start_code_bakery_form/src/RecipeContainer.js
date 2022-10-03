import { useState } from "react";

import RecipeList from "./RecipeList";
import CakeForm from "./CakeForm";

const RecipeContainer = () => {
    const [cakes, setCakes] = useState([

            {
                cakeName: "Lemon Drizzle",
                ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
                rating: 5
            },
            {
                cakeName: "Tea Loaf",
                ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
                rating: 3
            },
            {
                cakeName: "Brownie",
                ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
                rating: 4
            },
            {
                cakeName: "Carrot Cake",
                ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
                rating: 5
            }
        ]);





    const [applicationsOpen, setApplicationOpen] = useState(true);


    const addNewCake = (CakeForm) => {

        const updatedCakes = [...cakes, CakeForm]
        

        if(applicationsOpen) {
            setCakes(updatedCakes);
            // setApplicationOpen(false);
        }
    }
    return (
        <>
        <h2>Cakes Recipes</h2>
        <CakeForm onSubmit={addNewCake} />
        <RecipeList cakes={cakes} />
        </>
    )

};
export default RecipeContainer;