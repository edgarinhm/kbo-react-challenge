import { MouseEvent, useState } from 'react';
import Button from './Button';

function LeftBox() {
  const [disabled, setDisabled] = useState(false);
  const [cacheTransform, setCacheTransform] = useState(`0 0`);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setCacheTransform(`${event.clientX} ${event.clientY}`);
    setDisabled((state) => !state);
  };

  return (
    <div
      className="left"
      role="button"
      onClick={handleClick}
      aria-description="left button"
    >
      <Button
        style={{ transform: `translate(${cacheTransform})` }}
        text={'click me'}
        disable={disabled}
        aria-label={'Click the button to move it to original position'}
      />
    </div>
  );
}

export default LeftBox;
