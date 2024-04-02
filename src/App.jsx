import { useState } from "react";
import heads from "./assets/heads.png";
import tails from "./assets/tails.png";

const App = () => {
  const [state, setState] = useState(null);
  const [animation, setAnimation] = useState(false);

  const flipCoin = () => {
    setAnimation(true);

    setTimeout(() => {
      setAnimation(false);
      rotateCoin();
    }, 1200);
  };

  window.onload = function () {
    flipCoin();
  };

  const rotateCoin = () => {
    let coin = Math.round(Math.random());
    if (coin === 0) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <div className="grid place-items-center gap-5">
      <div className="flex items-center justify-center">
        <div className={`${animation ? "animate-flip-rotate" : ""}`}>
          <div className="flex items-center justify-center shadow-md w-[140px] h-[140px] bg-[#f5f5f5] rounded-full">
            {state == false ? (
              <img src={tails} alt="" />
            ) : (
              <img src={heads} alt="" />
            )}
          </div>
        </div>
      </div>
      <h1 className="text-center text-lg text-gray-500">
        {state == false ? "Tails" : "Heads"}
      </h1>
      <button
        className="rounded-full text-blue-700 hover:text-blue-800 font-bold uppercase"
        onClick={flipCoin}
        disabled={animation == true}
      >
        {animation ? "flipping" : "flip again"}
      </button>
    </div>
  );
};
export default App;
