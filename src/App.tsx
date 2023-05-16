import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { 
  notificationProvider, 
  RefineThemes, 
  ErrorComponent 
} from "@refinedev/chakra-ui";
import { ChakraProvider } from "@chakra-ui/react";
import routerBindings, {
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  CreateUser,
  ListUser,
  ShowUser,
  EditUser,
  Login,
  Register,
} from "./components"

import { AuthProvider } from "providers/AuthProvider";
import { API_URL } from "routes";


function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ChakraProvider theme={RefineThemes.Orange}>
          <Refine
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            authProvider={AuthProvider}
            dataProvider={dataProvider(API_URL)}
            options={{
              syncWithLocation: false,
              warnWhenUnsavedChanges: true,
            }}
            resources={[
                {
                  name: "users",
                  list: "/users",
                  create: "/users/create",
                  edit: "/users/edit/:id",
                  show: "/users/show/:id",
                },
            ]}
          >
            <Routes>
              <Route path="users">
                  <Route index element={<ListUser />} />
                  <Route
                      path="show/:id"
                      element={<ShowUser />}
                  />
                  <Route
                      path="edit/:id"
                      element={<EditUser />}
                  />
                  <Route
                      path="create"
                      element={<CreateUser />}
                  />
              </Route>
              <Route 
                path="login" 
                element={<Login />} 
              />
              <Route 
                path="register" 
                element={<Register />} 
              />
              <Route 
                path="*" 
                element={<ErrorComponent />} 
              />
              <Route 
                path="/" 
                element={<ListUser />} 
              />
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
          </Refine>
        </ChakraProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
