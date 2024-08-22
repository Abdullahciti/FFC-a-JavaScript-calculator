// eslint-disable-next-line react/prop-types
const Digitis = ({ setProcess, setResult, process, result }) => {
  const handleClicked = (e) => {
    const value = e.target.textContent;
    
    if (!isNaN(value)) {
      // If value is a number
      setResult(value)
      setProcess([...process, value]);
    } else if (["+", "-", "*", "/"].includes(value)) {
      // If value is an operator
      setProcess([...process, value]);
    } else if (value === "=") {
      // Handle equals
      handleEqual();
    }

    // console.log("Process: ", process);
    // console.log("Result: ", result);
  };

  const handleEqual = () => {
    // eslint-disable-next-line react/prop-types
    const expression = process.join("");
    try {
      const calculatedResult = eval(expression); // Again, be careful with eval in production
      setResult(calculatedResult);
      setProcess([calculatedResult.toString()]);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setResult(`Unexpected Error`);
    }
    // eslint-disable-next-line react/prop-types
    // setProcess(process.slice(-3, -1))
    setProcess(process);
  };

  const handleAc = () => {
    setProcess("");
    setResult(0);
  };
  return (
    <div className="grid grid-cols-4">
      <div
        onClick={handleAc}
        className="col-span-2 bg-red-600 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-red-800 transition-all"
      >
        Ac
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-neutral-400 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-gray-600 transition-all"
      >
        /
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-neutral-400 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-gray-600 transition-all"
      >
        *
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        1
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        2
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        3
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-neutral-400 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-gray-600 transition-all"
      >
        -
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        4
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        5
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        6
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-neutral-400 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-gray-600 transition-all"
      >
        +
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        7
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        8
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        9
      </div>
      <div
        onClick={handleEqual}
        className="row-span-2 bg-blue-900 text-white m-[1px] text-center self-center py-[53px] font-semibold hover:cursor-pointer hover:bg-blue-950 transition-all"
      >
        =
      </div>
      <div
        onClick={handleClicked}
        className="col-span-2 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        0
      </div>
      <div
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
      >
        ,
      </div>
    </div>
  );
};

export default Digitis;
