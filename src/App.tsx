import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { notificationProvider, RefineThemes, ErrorComponent } from "@refinedev/chakra-ui";

import { ChakraProvider } from "@chakra-ui/react";
import routerBindings, {
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider, { axiosInstance } from "@refinedev/simple-rest";
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
// import { getItem } from "components/utils";

function App() {
  // axiosInstance.interceptors.request.use((request: any) => {
  //   // Retrieve the token from local storage
  //   const token = JSON.parse(getItem("auth")!);
  //   // Check if the header property exists
  //   if (request.headers) {
  //       // Set the Authorization header if it exists
  //       request.headers["Authorization"] = `Bearer ${token}`;
  //   } else {
  //       // Create the headers property if it does not exist
  //       request.headers = {
  //           Authorization: `Bearer ${token}`,
  //       };
  //   }

  //   return request;
  // });

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ChakraProvider theme={RefineThemes.Orange}>
          <Refine
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            authProvider={AuthProvider}
            dataProvider={dataProvider(API_URL, axiosInstance)}
            options={{
              syncWithLocation: true,
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
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/register" 
                element={<Register />} 
              />
              <Route 
                path="*" 
                element={<ErrorComponent />} 
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
