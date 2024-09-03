import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CreateContactAction,
  deleteContactAction,
  editContactAction,
} from "./actions/actions";
import Contact from "./Contact";
import EditContact from "./EditContact";
import ErrorPage from "./error-page";
import Index from "./Index";
import "./index.css";
import { contactLoader, contactsLoader } from "./loaders/contactsLoader";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    loader: contactsLoader,
    action: CreateContactAction,
    children: [
      {
        index: true,
        element: <Index></Index>,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContactAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
