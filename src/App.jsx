import { useState } from "react";
import Digitis from "./components/Digitis";

function App() {

  const [process, setProcess] = useState([])


  const [result, setResult] = useState([])

  return (
    <div className="min-h-screen min-w-full bg-gray-500 flex items-center justify-center">
      {/* Calculator Field / Container */}
      <div className="bg-gray-950 min-w-80 p-[3px] flex flex-col">
        {/* Result and Process field */}
        <div className="flex items-end flex-col py-1.5 mb-1.5 flex-nowrap">
          {/* Process */}
          <div className="text-md font-semibold text-yellow-700 h-6 w-full text-nowrap text-end pr-1.5">{process}</div>
          {/* Result */}
          <div className="text-white font-bold text-2xl h-6 w-full text-nowrap text-end pr-2">{result}</div>
        </div>
        {/* Digits */}
        <Digitis setProcess={setProcess} setResult={setResult} result={result} process={process} />
      </div>
    </div>
  );
}

export default App;
