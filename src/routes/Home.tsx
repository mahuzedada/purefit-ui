import React from "react";
import useNext from "../useNext.ts";

function Home(): React.ReactElement {
  const n = useNext();
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={n}
        className="px-8 py-4 bg-blue-600 text-white rounded-lg"
      >
        Start
      </button>
    </div>
  );
}

export default Home;
