export const Rules = ({showRules}) => {

  return (
    <div className="rules" style={showRules ? { height: "17rem" } : {}}>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted</p>
    </div>
  );
};
