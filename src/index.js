// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react"
import ReactDOM from 'react-dom/client'

import { createStore } from "redux"

import noteReducer from "./reducers/noteReducer"

const store = createStore(noteReducer)

store.dispatch({
	type: 'NEW_NOTE',
	payload: {
		content: 'the app state is in redux store',
		important: true,
		id: 1
	}
})

store.dispatch({
	type: 'NEW_NOTE',
	payload: {
		content: 'state changes are mad with actions',
		important: false,
		id: 1
	}
})

const App = () => {

	return (
		<div>
			<ul>
				{store.getState().map(note => 
					<li key={note.id}>
						{note.content} <strong>{note.important? 'important' : '' }</strong>
					</li>
				)}
			</ul>
		</div>
	)

}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
	console.log('changed')
	root.render(<App/>)
}

renderApp()
store.subscribe(renderApp)