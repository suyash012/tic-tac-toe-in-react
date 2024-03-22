
import './App.css'
import Square from './components/Square'
import winner from './components/winner'
import { useState } from 'react'

function Board() {
  const[isnext,setisnext]=useState(true)
  const[Squares,setSquare]=useState(Array(9).fill(null));
  function handleclick(i){
    if(Squares[i]||winner(Squares)){
      return;
    }
const nextsquare=Squares.slice();
if(isnext){
nextsquare[i]='x'
  }
  else{
    nextsquare[i]='o'
  }
  setSquare(nextsquare);
  setisnext(!isnext)
  }
  const winners = winner(Squares);
  let status;
  if (winners) {
    status = 'Winner: ' + winners;
  } else {
    status = 'Next player: ' + (isnext ? 'X' : 'O');
  }
  

  return (
    <>
    <div className="status">{status}</div>
    <div className="title">
      <h1>TIC TAC TOE GAME</h1>
    </div>
      <div className='board'>
        <Square value={Squares[0]} onSquareclick={()=>handleclick(0)}/>
        <Square value={Squares[1]} onSquareclick={()=>handleclick(1)}/>
        <Square value={Squares[2]} onSquareclick={()=>handleclick(2)}/>
      </div>
      <div className='board'>
        <Square value={Squares[3]} onSquareclick={()=>handleclick(3)}/>
        <Square value={Squares[4]} onSquareclick={()=>handleclick(4)}/>
        <Square value={Squares[5]} onSquareclick={()=>handleclick(5)}/>
      </div>
      <div className='board'>
      <Square value={Squares[6]} onSquareclick={()=>handleclick(6)}/>
        <Square value={Squares[7]} onSquareclick={()=>handleclick(7)}/>
        <Square value={Squares[8]} onSquareclick={()=>handleclick(8)}/>
      </div>
    </>
  )
}

export default Board

