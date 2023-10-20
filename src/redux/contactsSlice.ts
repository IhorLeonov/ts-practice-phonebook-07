import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { Contact } from 'constants/types';

interface ContactsState {
  items: Contact[] | null;
  isLoading: boolean;
  error: string | null;
  showModal: boolean;
  deleteId: string;
}

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  showModal: false,
  deleteId: '',
} as ContactsState;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<string>) => {
      state.showModal = !state.showModal;
      state.deleteId = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.isLoading = false;
          state.error = null;
          if (state.items !== null) state.items.push(action.payload);
        }
      )
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.isLoading = false;
          state.error = null;

          if (state.items !== null) {
            const index = state.items.findIndex(
              contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1);
          }
        }
      )
      // Group the same code in addMatcher
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          if (typeof action.payload === 'string') state.error = action.payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
export const { toggleModal } = contactsSlice.actions;
