export const BottomSection = ({handleDiceClick, rN, setScore, setShowRules, showRules})=>{
  return (
    <div className="bottom-section">
      <figure onClick={handleDiceClick}>
        <img src={`public/images/dice/dice_${rN}.png`} alt="dice" />
      </figure>
      <h1>Click on Dice to roll</h1>
      <button onClick={() => setScore(0)}>Reset Score</button>
      <button onClick={() => setShowRules(!showRules)}>Show Rules</button>
    </div>
  );
}