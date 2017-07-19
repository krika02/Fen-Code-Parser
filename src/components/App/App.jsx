import React from 'react';
import Board from '../../containers/Board';
import FenCodeInput from '../../containers/FenCodeInput';

require('./App.css');

const App = () =>
	(<div>
		<h1>Fen Code Parser</h1>
		<FenCodeInput />
		<Board />
		<div className="info">
			<p>
				<a href="http://www.chess-poster.com/english/learn_chess/notation/notation.htm#fen" target="_blanc">What does this mean?</a>
			</p>
		</div>
	</div>);

export default App;
