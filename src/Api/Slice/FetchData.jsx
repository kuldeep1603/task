import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const FetchProduct = createAsyncThunk("FetchProduct", async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
});


const DataSlice = createSlice({
    name: "Products",
    initialState: {
        Products: [],
        IsLoading: false,
        IsError: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // FetchProduct
        builder.addCase(FetchProduct.pending, (state, action) => {
            state.IsLoading = true;
            state.IsError = false;
        });
        builder.addCase(FetchProduct.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsError = false;
            state.Products = action.payload;
        });
        builder.addCase(FetchProduct.rejected, (state, action) => {
            state.IsLoading = false;
            state.IsError = true;
        });
    }
});
export default DataSlice.reducer;