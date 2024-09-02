import { configureStore } from "@reduxjs/toolkit";

// slice
import DataSliceReducer from "./Slice/FetchData";

const Store = configureStore({
    reducer: {
        Data: DataSliceReducer,
    }
});


export default Store;