import {useState, useEffect, useRef} from 'react';


const Temp = () => {
	const [num, setNum] = useState(0);
// 	let [final, setFinal] = useState(""); 
// 
// 	const startGame = () => {
// 		word = word + "a";
// 		setWord(word) //word= a aa aaa	
// 
// 		setFinal(final => final + word); //final = "" a aa
// 	}
// 	const stopGame = () =>{
// 		setWord("");
// 		setFinal("");
// 	}
// 		
// 
// 
// console.log("word",word);
// 		console.log("final", final);
// 		
// 
// 
// 	return(
// 		<div>
// 		<button onClick={startGame}>start</button>
// 		<button onClick={stopGame}>start</button>
// 
// 		<p>{word}</p>
// 		<p>{final}</p>
// 		</div>
// 		)


	const helloWorld = () => {
		setNum(num  => num +1)
		console.log("helloWorld");
	}
	return(
		<button onClick={function() { helloWorld()}}>{num}</button>
		)

}

export default Temp;