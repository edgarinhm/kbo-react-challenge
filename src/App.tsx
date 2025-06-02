import { useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

function App() {
  const [cacheTransform, setCacheTransform] = useState(`0 0`);
  const [counter, setCounter] = useState(0);
  return (
    <div className="wrapper">
      <LeftBox
        position={cacheTransform}
        changePostion={(position) => {
          setCounter((state) => state + 1);
          setCacheTransform(position);
        }}
      />
      <RightBox counter={counter} position={cacheTransform} />
    </div>
  );
}

export default App;
