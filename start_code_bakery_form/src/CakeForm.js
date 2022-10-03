import { useState } from "react";

const CakeForm = ({onSubmit}) => {

        const [cakeName, setCakeName] = useState("");
        const [ingredients, setIngredients] = useState("");
        const [rating, setRating] = useState(0);
    
        const handleCakeNameChange = (event) => {
            setCakeName(event.target.value)
        }
    
        const handleIngredientsChange = (event) => {
            setIngredients(event.target.value)
        }
        const handleRatingChange = (event) => {
            setRating(event.target.value)
        
        }
    
        const handleFormSubmission = (event) => {
            event.preventDefault();
            const newCake = {
                cakeName: cakeName,
                ingredients: ingredients.split(", "),
                rating: rating
            }
            setCakeName("");
            setIngredients("");
            setRating(0);
            onSubmit(newCake);
        }


    return (
        // <form>
        //     <label htmlFor="name">Cake Name:</label>
        //     <input type="text" id="name" />
        //     <label htmlFor="ingredients">Ingredients:</label>
        //     <textarea cols="30" rows="1" id="ingredients"></textarea>
        //     <label htmlFor="rating">Rating:</label>
        //     <input type="number" id="rating" min={1} max={5}/>
        //     <input type="submit"/>
        // </form>



<form onSubmit={handleFormSubmission}>
<label htmlFor="cakeName">Name:</label>
<input 
    type="text"
    id="cakeName"
    placeholder="Enter a name"
    onChange={handleCakeNameChange}
    value={cakeName}
/>
<label htmlFor="ingredients">Ingredients:</label>
<input 
    type="text"
    id="ingredients"
    onChange={handleIngredientsChange}
    value={ingredients}
/>
<label htmlFor="rating">Rating:</label>
<input 
    type="number"
    id="rating"
    onChange={handleRatingChange}
    value={rating}
/>
<input type ="submit" value="Add Cake"/>
</form>
);

}

export default CakeForm;