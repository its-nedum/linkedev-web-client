import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { notificationProvider, RefineThemes, ErrorComponent } from "@refinedev/chakra-ui";

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
} from "./components"

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        {/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}
        <ChakraProvider theme={RefineThemes.Blue}>
          <Refine
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
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
              <Route path="*" element={<ErrorComponent />} />
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
