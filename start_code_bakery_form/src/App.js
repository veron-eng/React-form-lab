import NavBar from "./NavBar";
import Title from "./Title";

import Search from "./Search";
import CakeForm from "./CakeForm";
import RecipeContainer from "./RecipeContainer";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <Search />
        <RecipeContainer />
        
      </main>
    </>
  );
}

export default App;
