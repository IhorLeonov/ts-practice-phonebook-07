import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Contact } from 'constants/types';

interface ContactAdd {
  name: string;
  phone: string;
}

axios.defaults.baseURL = 'https://6435c352537112453fdefdbd.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Contact[]>('/contacts');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContactObj: ContactAdd, thunkAPI) => {
    try {
      const response = await axios.post<Contact>('/contacts', newContactObj);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId: string, thunkAPI) => {
    try {
      const response = await axios.delete<Contact>(`/contacts/${contactId}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
