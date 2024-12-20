import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Credit } from "../components/Credit"

export const Home = ()=>{
  const navigate = useNavigate()
  const [ blink, setBlink ] = useState(true)

  useEffect(()=>{
    setTimeout(()=> setBlink(false) ,2000)
  }, [])

  return (
    <>
      <div className="section-home">
        <figure>
          {/* The Main Dice image here doesn't work on the host server for some reason but works at github  */}
          <img src="./images/dices.png" alt="icon" />
        </figure>
        <div className="texts">
          <h2 style={blink ? {} : { borderColor: "transparent" }}>DICE GAME</h2>
          <button onClick={() => navigate("game")}>Play Now</button>
        </div>
      </div>
      <Credit />
    </>
  );
}