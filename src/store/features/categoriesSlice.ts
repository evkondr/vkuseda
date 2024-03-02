/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IStateStdProps, TCategory } from '../../types';
import { addNewCategory, getAllCategoriesAsync, removeCategoryAsync } from '../thunks/categoriesThunk';

interface ICategoriesState extends IStateStdProps {
  categories: TCategory[],
}
const initialState:ICategoriesState = {
  categories: [],
  loading: false,
  error: undefined,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    removeCategory(state, action) {
      state.categories.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(addNewCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
      toast.success('Запис добавлена');
    });
    builder.addCase(removeCategoryAsync.fulfilled, () => {
      toast.success('Запис удалена');
    });
    // Matching for loader
    builder.addMatcher(isAnyOf(
      getAllCategoriesAsync.pending,
      addNewCategory.pending,
      removeCategoryAsync.pending,
    ), (state) => {
      state.loading = true;
      state.error = undefined;
    });
    // Matching for error
    builder.addMatcher(
      isAnyOf(
        getAllCategoriesAsync.rejected,
        addNewCategory.rejected,
        removeCategoryAsync.rejected,
      ),
      (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      },
    );
  },
});
export const { removeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
