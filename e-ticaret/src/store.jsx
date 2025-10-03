import { configureStore } from "@reduxjs/toolkit";
import veriReducer from "./components/VeriCekSlice";

export const store = configureStore({
     reducer: {
          veriCek: veriReducer
     }
})