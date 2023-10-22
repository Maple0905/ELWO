import { ITool } from "@/typedefs";
import getImageUrl from "@/utils/getImageUrl";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IToolState {
  searchName: string;
  tools: ITool[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: IToolState = {
	searchName: '',
	tools: [],
	loading: false,
  error: null,
};

export const fetchTools = createAsyncThunk(
	'tools/fetchTools',
	async (searchName: any, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${process.env.API_URL}/fitment/model/name?search=${searchName}`);
			const data = response.data;
			let toolData = await Promise.all(
				data.map(async (item: any) => {
				if (!item.productId) return;
				const itemResponse = await fetch(`${process.env.API_URL}/products/${item.productId}`)
				const itemData = await itemResponse.json();
				return {
					id: itemData.id,
					name: itemData.description.name,
					description: itemData.description.description,
					type: itemData.type.description?.name,
					toolId: itemData.id,
					code: item.code,
					url: process.env.ENV === "production" ? getImageUrl(itemData.image.imageUrl) : itemData.image.imageUrl,
				}
				})
			);
			toolData = toolData.filter((item) => item !== undefined);

			const toolList = {
				searchName: searchName,
				tools: toolData,
			};
			return toolList;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const toolsSlice = createSlice({
	name: 'toolsSlice',
	initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTools.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTools.fulfilled, (state, action) => {
        state.loading = false;
				state.tools = action.payload.tools;
				state.searchName = action.payload.searchName;
      })
      .addCase(fetchTools.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default toolsSlice.reducer;
