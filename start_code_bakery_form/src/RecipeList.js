import Cake from "./Cake";
const RecipeList = ({cakes}) => {

    return (
        <>
            <section>{
            cakes.map((cake, index)=> {
                    return <Cake key={index} 
                    cakeName={cake.cakeName} 
                    ingredients={cake.ingredients.map((ingredient, index) => {
                        return(
                            <li key={index}>{ingredient}</li>
                        )
                    })} rating={cake.rating} />
                })
            }


                {/* {
                    cakes.map((cake, index) => {
                        return(
                            <div key={index}>
                                <h3>{cake.cakeName}</h3>
                                <ul>
                                    {cake.ingredients.map((ingredient, index) => {
                                        return(
                                            <li key={index}>{ingredient}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                } */}
            </section>
            <section>
                <h4>Average cake rating: </h4>
                <p>{(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length)}</p>
            </section>
        </>
    )

}

export default RecipeList;