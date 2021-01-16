import {useState, useEffect, useRef} from 'react';

import useInterval from '../utils/useInterval';
import '../App.css';

const ShowRandomLetter = () => {
	let [word, setWord] = useState("");
	let [final, setFinal] = useState(""); 
	// let [start, setStart] = useState(true);
	const [start, setStart] = useState(true);
	const [enter, setEnter] = useState('');
	const [score, setScore] = useState(0);
	const [num, setNum] = useState(5);

 // const runningRef = useRef(running);
 // runningRef.current = running;


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
		setEnter(e.target.value);
		// console.log(enter);
	}
	let strGame;


	const startGame = () => {


		setNum(num => num + 1);
				// console.log("num", num);

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
		setScore(score => score=0);
		clearTimeout(strGame);
	}
		
	const check = () =>{
		if(enter === final){
		setScore(score => score + 5);
		}
		else{
			alert(`I remembererd only ${num-1} letters in a word`);
			stopGame();
		}
		// if
	
	}
		console.log("word", word);
		// console.log("start", start);
// 
// 		console.log("final", final);
// 		console.log("enter",enter);
// 		console.log("score", score);


	return(
		<div className="show-random-letter">
		<div className="score-word">
		<p className="score">{score}</p>
		<p className="word">{word}</p>
		</div>
		<div className="start-stop">
		<button className="btn btn-start" onClick={()=> { 
			startGame();
		}}>start</button>
		<button className="btn btn-stop" onClick={stopGame}>stop</button>
		</div>
		<div  className="check-group">
		<input className="input" type="text" value={enter} onChange = {onChange} placeholder="enter a word"/>
		<button className="btn btn-check" onClick={check}>Check for match</button>
		</div>
		</div>
		)
}

export default ShowRandomLetter;