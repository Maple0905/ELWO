import { IAccessory } from "@/typedefs";
import getImageUrl from "@/utils/getImageUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IAccessoryState {
  accessoryList: IAccessory[];
	accessoryTypeList: string[];
	error: string | null | undefined;
};

const initialState: IAccessoryState = {
	accessoryList: [],
	accessoryTypeList: [],
	error: null,
};

export const fetchAccessoryList = createAsyncThunk(
	'tools/fetchAccessoryList',
	async (code: any, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${process.env.API_URL}/products?page=0&count=20&fitment=${code}&lang=sv`)
			const data = response.data;
			let accData: IAccessory[] = [];
			let accTypeData: string[] = [];
			data['products'].map((item: any) => {
				const accessory: IAccessory = {
					id: item.id,
					toolCode: code,
					name: item.description.name,
					type1: item.type.description.name,
					type2: "",
					description: "",
					sku: item.sku,
					img: process.env.ENV === "production" ? getImageUrl(item.image.imageUrl) : item.image.imageUrl,
					imgs: [],
					supplierId: item.manufacturer.id,
					supplierName: item.manufacturer.description.name,
					discounted: item.productPrice.discounted,
					originalPrice: item.productPrice.originalPrice,
					price: item.productPrice.price,
				};
				accData.push(accessory);
				if (!accTypeData.includes(item.type.description.name)) {
					accTypeData.push(item.type.description.name);
				}
			});

			const accessoryData = {
				accessoryList: accData,
				accessoryTypeList: accTypeData
			}
			return accessoryData;
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

export const accessorySlice = createSlice({
	name: 'accessorySlice',
	initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessoryList.pending, (state) => {
      })
      .addCase(fetchAccessoryList.fulfilled, (state, action) => {
        state.accessoryList = action.payload.accessoryList;
				state.accessoryTypeList = action.payload.accessoryTypeList;
      })
      .addCase(fetchAccessoryList.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default accessorySlice.reducer;
