
const Cake = ({cakeName, ingredients, rating}) => {
    return (
        <div className="cakes">
         <h3>Cake name: {cakeName}</h3>
                <ul>
                
                    <li>Ingredients: {ingredients}</li> 
                    <li>Rating: {rating}</li>
                </ul>
    
        </div>
    )
}

export default Cake;