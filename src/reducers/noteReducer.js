import { createSlice } from "@reduxjs/toolkit"

import noteService from '../services/notes'

const generateId = () => 
	Number((Math.random() * 1000000).toFixed(0))

const noteSlice = createSlice({

	name: 'notes',

	initialState: [],

	reducers: {

		appendNote(state, action) {
			state.push(action.payload)
		},
		toggleImportanceOf(state, action) {
			const id = action.payload
			const noteToChange = state.find(note => note.id === id)
			const changedNote = {
				...noteToChange,
				important: !noteToChange.important,
			}
			return state.map(note => note.id !== id ? note : changedNote)
		},
		setNotes(state, action) {
			return action.payload
		}

	}

})

export const { appendNote, toggleImportanceOf, setNotes } = noteSlice.actions

export const initializeNotes = () => {

	return async dispatch => {
		const notes = await noteService.getAll()
		dispatch(setNotes(notes))
	}

}

export const createNote = content => {

	return async dispatch => {
		const newNote = await noteService.createNew(content)
		dispatch(appendNote(newNote))
	}

}

export default noteSlice.reducer
