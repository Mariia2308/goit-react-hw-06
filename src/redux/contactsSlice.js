import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (contact) => {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return {
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
