import React from 'react';
import Board from '../../containers/Board';
import FenCodeInput from '../../containers/FenCodeInput';

const App = () =>
	(<div>
		<h1>Fen Code Parser</h1>
		<FenCodeInput />
		<Board />
	</div>);

export default App;
