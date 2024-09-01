// eslint-disable-next-line react/prop-types, no-unused-vars
const Digitis = ({ setProcess, setResult, process, result }) => {
  // Function to style a clicked digit
  const styleClicked = (e) => {
    e.target.classList.add("scale-95");
    setTimeout(() => {
      e.target.classList.remove("scale-95");
    }, 250);
  };

  const handleClicked = (e) => {
    styleClicked(e);
    const value = e.target.value;
    if (!isNaN(value)) {
      if (result === 0) {
        setResult(value);
        // eslint-disable-next-line react/prop-types
        if (!process.length > 0) {
          setProcess(value);
        }
      } else {
        setResult(result + value);
        setProcess(process + value);
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "/" ||
      value === "*"
    ) {
      if (typeof eval(process) == "number") {
        setResult(value);
        setProcess(process + value);
      } else {
        // handleing the Coma
        // eslint-disable-next-line react/prop-types
        if (result.length <= 1 || result === 0) {
          setResult(`${0}.`);
        } else {
          // eslint-disable-next-line react/prop-types
          if (!result.includes(".")) {
            ("");
            setResult(`${result}.`);
          }
        }
      }
    }
  };
  const handleDe = () => {
    // eslint-disable-next-line react/prop-types
    if (result === 0 || result.length === 1) {
      setResult(0);
    } else {
      setResult(
        result
          // eslint-disable-next-line react/prop-types
          .split("")
          .slice(0, -1)
          .join("")
      );
      setProcess(
        process
          // eslint-disable-next-line react/prop-types
          .split("")
          .slice(0, -1)
          .join("")
      );
    }
  };
  const handleAc = (e) => {
    styleClicked(e);
    setProcess("");
    setResult(0);
  };

  const handleEqual = (e) => {
    styleClicked(e);
    setResult(eval(process).toString());
    setProcess(`${process}=${eval(process).toString()}`);
  };
  return (
    <div className="grid grid-cols-4">
      <input
        type="button"
        onClick={handleAc}
        className="col-span-1 bg-red-600 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-red-800 transition-all"
        value="AC"
      />
      <input
        type="button"
        onClick={handleDe}
        className="col-span-1 bg-[#e43f3f] text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-[#b12929] transition-all"
        value="DE"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-neutral-400 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-gray-600 transition-all"
        value="/"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-neutral-400 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-gray-600 transition-all"
        value="*"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="1"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="2"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="3"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-neutral-400 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-gray-600 transition-all"
        value="-"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="4"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="5"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="6"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-neutral-400 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-gray-600 transition-all"
        value="+"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="7"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="8"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="9"
      />
      <input
        type="button"
        onClick={handleEqual}
        className="row-span-2 bg-blue-900 text-white m-[1px] text-center self-center py-[53px] font-semibold hover:cursor-pointer hover:bg-blue-950 transition-all"
        value="="
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-2 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="0"
      />
      <input
        type="button"
        onClick={handleClicked}
        className="col-span-1 bg-gray-900 text-white m-[1px] text-center self-center py-5 font-semibold hover:cursor-pointer hover:bg-neutral-800 transition-all"
        value="."
      />
    </div>
  );
};

export default Digitis;
