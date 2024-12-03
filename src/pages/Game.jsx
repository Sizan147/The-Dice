import { useEffect, useRef, useState } from "react"
import { Rules } from "../components/Rules"
import { TopSection } from "../components/TopSection"
import { BottomSection } from "../components/BottomSection"
import { Credit } from "../components/Credit"

export const Game = ()=>{
  const [ showRules, setShowRules ] = useState(false)
  const [ pick, setPick ] = useState(0)
  const [ rN, setRN ] = useState(0)
  const [ score, setScore ] = useState(0)
  const rNRef = useRef(null);
  const [ warning, setWarning ] = useState(false)

  // Dice Rolling
  const randomNumber = ()=>{
    let numbers = [ 1, 2, 3, 4, 5, 6 ]
    const res = numbers[Math.floor(Math.random()* numbers.length)]
    setRN(res)
    rNRef.current = res
  }
  const handleDiceClick = ()=>{
    if(pick == 0){
      setWarning(true)
      return
    }
    const diceRolling = setInterval(()=>{
      randomNumber()
    }, 100)
    setTimeout(()=>{
      clearInterval( diceRolling)
      if (pick === rNRef.current){
        console.log("matched", rNRef.current)
        setScore((prev)=> prev + pick)
      }
      else{
        setScore((prev)=> prev - Number((pick/5).toFixed(2)))
      }
    }, 1500)
    setPick(0)
  }

  // Starting random number
  useEffect(()=>{
    randomNumber()
  }, [])

  // Choose
  useEffect(()=>{
    if(pick){
      setWarning(false)
    }
  }, [pick])
   
  // Score
  useEffect(()=>{
    
  }, [rN])

  // Load images
  useEffect(() => {
    const diceImages = [1, 2, 3, 4, 5, 6].map(
      (num) => `./images/dice/dice_${num}.png`
    );
    diceImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <div className="section-game">
        <TopSection
          score={score}
          warning={warning}
          pick={pick}
          setPick={setPick}
        />
        <BottomSection
          rN={rN}
          handleDiceClick={handleDiceClick}
          setScore={setScore}
          setShowRules={setShowRules}
          showRules={showRules}
        />
        <Rules showRules={showRules} />
      </div>
      <Credit />
    </>
  );
}