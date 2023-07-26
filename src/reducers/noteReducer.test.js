import noteReducer from "./noteReducer"
import deepFreeze from "deep-freeze"

describe('noteReducer', () => {

	test('returns a new state with action NEW_NOTE', () => {

		const state = []
		const action = {
			type: 'NEW_NOTE',
			payload: {
				content: 'the app state is in redux store',
				important: true,
				id: 1
			}
		}

		deepFreeze(state) // ensures that the reducer does not change the state given as parameter

		const newState = noteReducer(state, action)

		expect(newState).toHaveLength(1)
		expect(newState).toContainEqual(action.payload)

	})

})