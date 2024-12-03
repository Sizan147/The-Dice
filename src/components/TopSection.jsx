import { Score } from "./Score";
import { SelectNumber } from "./SelectNumber";

export const TopSection = ({warning, setPick, pick, score})=>{
  return (
    <div className="top-section">
      <Score score={score} />
      <SelectNumber warning={warning} pick={pick} setPick={setPick} />    
    </div>
  );
}