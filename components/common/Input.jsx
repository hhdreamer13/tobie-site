import { useState } from "react";

const Input = ({
  type,
  placeholder,
  disabled,
  onChange,
  validation,
  setErrorsCount,
}) => {
  const [errorMsg, setErrorMsg] = useState("");
  const validationFunctions = validation || []; // default to an empty array if no validation prop is provided

  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue); // lift the state up
    let hasError = false;

    for (const validate of validationFunctions) {
      const error = validate(newValue);
      if (error) {
        setErrorMsg(error);
        hasError = true;
        return;
      }
    }

    // if no errors, clear the error message
    setErrorMsg("");

    setErrorsCount((prevCount) =>
      hasError ? prevCount + 1 : Math.max(0, prevCount - 1),
    );
  };

  return (
    <>
      <div className="relative inline-block w-full font-caveat">
        <input
          className="mx-0 my-2 block w-full rounded-2xl p-2 text-main font-nunito outline-none duration-100 placeholder:font-caveat dark:placeholder:text-cyan-200/75 placeholder:text-rose-300/75 focus:ring-2 focus:ring-rose-200 dark:focus:ring-cyan-700"
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
        />
        <div>
          {errorMsg && (
            <div className="absolute bottom-0 right-0 z-10 mb-10 max-w-40 rounded border  bg-slate-50 px-2 py-1 text-xs sm:text-base text-rose-500 shadow-md">
              {errorMsg}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
