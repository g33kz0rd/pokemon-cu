// /main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonProvider from "./providers/pokemon";
import { PokemonList } from "./pages/pokemon-list";
import { Box, Container, CssBaseline } from "@mui/material";
import { PokemonFight } from "./pages/pokemon-fight";

const router = createBrowserRouter([
  {
    errorElement: <>404 - Página no encontrada</>,
    element: (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <PokemonProvider>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) => theme.palette.grey[100],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Container>
              <Outlet />
            </Container>
          </Box>
        </PokemonProvider>
      </Box>
    ),
    children: [
      {
        path: "",
        element: <PokemonList />,
      },
      {
        path: "fight/:attackerId",
        element: <PokemonFight />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
