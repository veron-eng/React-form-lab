
const Cake = ({cakeName, ingredients, rating}) => {
    return (
        <div className="cakes">
         <h3>Cake name: {cakeName}</h3>
            <h4>Ingredients:</h4> {ingredients}
            <br></br>
        
            Rating: {rating}
                
    
        </div>
    )
}

export default Cake;