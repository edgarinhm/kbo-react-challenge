import { FormEvent, MouseEvent, useState } from "react";
import Button from "./Button";

interface LeftBoxProps {
  position: string;
  changePostion: (postion: string) => void;
}

function LeftBox({ position, changePostion }: Readonly<LeftBoxProps>) {
  const [disabled, setDisabled] = useState(true);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    changePostion(`${event.clientX}px, ${event.clientY}px`);
    setDisabled(false);
  };

  const resetState = (event: FormEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setDisabled(true);
    changePostion("0, 0");
  };

  return (
    <div
      className="left"
      role="button"
      onClick={handleClick}
      aria-label="left button"
    >
      <Button
        style={{ transform: `translate(${position})` }}
        text={"click me"}
        disable={disabled}
        title={"Click the button to move it to original position"}
        onClick={resetState}
      />
    </div>
  );
}

export default LeftBox;
