export const SelectNumber = ({warning, setPick, pick })=>{

  return (
    <div className="select-number">
      <p
        className="warning"
        style={
          warning ? { color: "hsla(0, 100%, 50%, 0.63)" } : { color: "#ffffff" }
        }
      >
        You have not selected any number
      </p>
      <ul className="inputs">
        <li
          onClick={() => setPick(1)}
          className={pick == 1 ? "chosen-one" : ""}
        >
          1
        </li>
        <li
          onClick={() => setPick(2)}
          className={pick == 2 ? "chosen-one" : ""}
        >
          2
        </li>
        <li
          onClick={() => setPick(3)}
          className={pick == 3 ? "chosen-one" : ""}
        >
          3
        </li>
        <li
          onClick={() => setPick(4)}
          className={pick == 4 ? "chosen-one" : ""}
        >
          4
        </li>
        <li
          onClick={() => setPick(5)}
          className={pick == 5 ? "chosen-one" : ""}
        >
          5
        </li>
        <li
          onClick={() => setPick(6)}
          className={pick == 6 ? "chosen-one" : ""}
        >
          6
        </li>
      </ul>
      <p>Select a Number</p>
    </div>
  );
}