import './App.scss';
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import MainPage from './containers/MainPage/MainPage';
import CelebrationPage from './containers/CelebrationPage/CelebrationPage';

const router = createHashRouter([
  {
    path: "/celebration",
    element: <CelebrationPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
