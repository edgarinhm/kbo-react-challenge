interface RightBoxProps {
  counter: number;
  position: string;
}

function RightBox({ counter, position }: Readonly<RightBoxProps>) {
  return (
    <div className="right">
      <h1>Result</h1>
      <div>
        <span>Counter: {counter}</span>
      </div>
      <div>
        <span>Position: {position}</span>
      </div>
    </div>
  );
}

export default RightBox;
