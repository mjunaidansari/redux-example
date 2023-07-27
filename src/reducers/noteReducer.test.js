import noteReducer from "./noteReducer"
import deepFreeze from "deep-freeze"

describe('noteReducer', () => {

	test('returns a new state with action NEW_NOTE', () => {

		const state = [
			{
				content: 'the app state is in redux store',
				important: true,
				id: 1
			},
			{
				content: 'state changes are made with action',
				important: false,
				id: 2
			}
		]
		const action = {
			type: 'TOGGLE_IMPORTANCE',
			payload: {
				id: 2,
			}
		}

		deepFreeze(state) // ensures that the reducer does not change the state given as parameter

		const newState = noteReducer(state, action)

		expect(newState).toHaveLength(2)
		expect(newState).toContainEqual({
			content: 'state changes are made with action',
			important: true,
			id: 2
		})

	})

})