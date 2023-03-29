import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./Routes/AllRoutes";
import Cart from "./Pages/cartPage/cart";

function App() {
  return (
    // don't modify this file
    <Box>
      <AllRoutes />
      <Cart />
    </Box>
  );
}

export default App;
