
import './App.css';
import Header from './components/header';
import Body from "./components/body"
import Store from './utelis/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/maincontainer';
import WatchPage from './components/watchpage';



const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Maincontainer/>,
         },
         {
          path:"/watch",
          element:<WatchPage/>,
           },
           

    ]
  }
])
function App() {
  return (
    <div>
     <Provider store={Store}>
      <Header/>
      <RouterProvider router={appRouter}/>
      
      </Provider>
    </div>
  );
}

export default App;
