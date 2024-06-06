// import { Routes, Route } from "react-router-dom";
// import MainPage from "./pages/main/index";
// import LoginPage from "./pages/login/index";
// import Pagenotfound from "./pages/Pagenotfound/index";
// import { AuthProvider } from "./contexts/auth";

// export const router = () => {
//   const PrivateRoute = ({ children }) => {
//     const { authenticated, loading } = useContext(AuthContext);

//     if (loading) {
//       return <div className="loading">Carregando..</div>;
//     }

//     if (!authenticated) {
//       return navigate("/login");
//     }
//     return children;
//   };

//   return (
//     // <BrowserRouter>
//     <AuthProvider>
//       <Routes>
//         <Route
//           index
//           element={
//             <PrivateRoute>
//               <MainPage />
//             </PrivateRoute>
//           }
//         />
//         <Route path="login" element={<LoginPage />} />
//       </Routes>
//     </AuthProvider>
//   );
// };

// ------------- 2
// import { Route, Routes } from "react-router-dom";
// import MainPage from "./pages/main/index";
// import LoginPage from "./pages/login/index";
// import Pagenotfound from "./pages/Pagenotfound/index";

// const indexRouter = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="*" element={<Pagenotfound />} />
//       </Routes>
//     </>
//   );
// };

// export default indexRouter;

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/main/index";
import LoginPage from "./pages/login/index";
import Pagenotfound from "./pages/Pagenotfound/index";
import { AuthProvider } from "./contexts/auth";

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;
