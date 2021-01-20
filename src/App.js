import {useState} from 'react';
import './App.css';

const App = () => {
	let [word, setWord] = useState("");
	let [final, setFinal] = useState(""); 
	const [enter, setEnter] = useState('');
	const [score, setScore] = useState(0);
	const [num, setNum] = useState(1);



	const randomWordUtil = (length) => {
   		var result = '';
   		var characters = 'abcdefghijklmnopqrstuvwxyz';
   		var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   return result;
	}

	function setIntervalLimited(callback, interval, x) {
    for (var i = 0; i < x; i++) {
        setTimeout(callback, i*interval);
    }
}
	
	const onChange = (e) => {
		let entered = (e.target.value).toLowerCase();
		setEnter(entered);
	}
	let strGame;


	const startGame = () => {


		setNum(num => num + 1);
		strGame = setIntervalLimited(()=>{
			word = randomWordUtil(1);
			setWord(word);
			setFinal(final => final+ word);

		}, 1000, num)

		setWord('');
		setFinal('');
		clearTimeout(strGame);

	}



	const stopGame = () =>{
		setWord('');
		setFinal('');
		setEnter('');
		setScore(score => score=0);
		setNum(0);
		clearTimeout(strGame);
	}
		
	const check = () =>{
		if(enter === final){
		setScore(score => score + 1);
		alert(`So far it's ${score+1} letter word, come on I can make it 🔥🔥`);
		setEnter('');
		startGame();
		}
		else{
			alert(`OHHHH 😞, I remembererd only ${score+1} letter word`);
			stopGame();
		}

	}


	return(
		<div className="show-random-letter">
		<div className="score-word">
		<p className="score"><span className="span">Score:</span> {score}</p>
		<p className="word">{word}</p>
		</div>
		<div className="start-stop">
		<button className="btn btn-start" onClick={()=> { 
			startGame();
		}}>start</button>
		<button className="btn btn-stop" onClick={stopGame}>Reset</button>
		</div>
		<div  className="check-group">
		<input className="input" type="text" value={enter} onChange = {onChange} placeholder="Enter that letter/word"/>
		<button className="btn btn-check" onClick={check}>Check for match</button>
		</div>
		</div>
		)
}

export default App;