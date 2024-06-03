import MainPage from "./pages/mainPage";
import PokemonPage from "./pages/pokemonPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Outlet from "./componets/Outlet";

const App=()=>{


  const router=  createBrowserRouter([
    {
      path:"/",
      element:<Outlet><MainPage/></Outlet>
      
    },
    {
      path:"pokemon/:name",
      element:<Outlet><PokemonPage/></Outlet>
    }
  ])
// const currentUrl=window.location.pathname
// console.log(currentUrl)

  return (
    <>
    <RouterProvider router={router}/>
    {/* {currentUrl=== '/'? <MainPage />:<PokemonPage pokemonUrl={currentUrl}/>}    */}
  </>
  );
};

export default App;
