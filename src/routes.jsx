import { Application, AppStart, SignIn, SignUp } from "./pages";

export const routes = [
  {
    name: "auth",
    path: "/auth",
    element: <AppStart />,
  },
  {
    name: "application",
    path: "/application",
    element: <Application />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
