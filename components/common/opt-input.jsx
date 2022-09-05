import React, { useEffect, useRef, useState } from "react";
import { TextField } from "./text-field";

const BACKSPACE_KEY = 8;
const LEFT_ARROW_KEY = 37;
const UP_ARROW_KEY = 38;
const RIGHT_ARROW_KEY = 39;
const DOWN_ARROW_KEY = 40;

const OtpInput = () => {
  const fields = 5;
  const [value, setValue] = useState("");
  const [inputs, setInputs] = useState([]);

  const inputRefs = useRef([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < fields; i++) {
      arr.push("");
    }
    setInputs(arr);
  }, []);

  const handleChange = (e) => {
    let value = e.target.value;

    if (value !== "") {
      let input;
      value;
      if (Number(e.target.dataset.id) + i < fields) {
        input[Number(e.target.dataset.id) + i] = value;
      }
      setInputs(input);
      const newTarget =
        inputRefs[
          e.target.dataset.id < inputs.length
            ? Number(e.target.dataset.id) + 1
            : e.target.dataset.id
        ];

      if (newTarget) {
        newTarget.focus();
        newTarget.select();
      }
    }
  };

  const handleKeyDown = (e) => {
    const target = Number(e.target.dataset.id),
      nextTarget = inputRefs[target + 1],
      prevTarget = inputRefs[target - 1];

    let input, value;

    switch (e.keyCode) {
      case BACKSPACE_KEY:
        e.preventDefault();
        inputRefs[target].value = "";
        input = inputs.slice();
        input[target] = "";
        value = input.join("");

        setInputs(input);

        console.log(value);
        if (inputRefs[target].value === "") {
          if (prevTarget) {
            prevTarget.focus();
            prevTarget.select();
          }
        }
        break;

      case LEFT_ARROW_KEY:
        e.preventDefault();
        if (prevTarget) {
          prevTarget.focus();
          prevTarget.select();
        }
        break;

      case RIGHT_ARROW_KEY:
        e.preventDefault();
        if (nextTarget) {
          nextTarget.focus();
          nextTarget.select();
        }
        break;

      case UP_ARROW_KEY:
        e.preventDefault();
        break;

      case DOWN_ARROW_KEY:
        e.preventDefault();
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex items-center justify-center">
      {inputs.map((input, i) => (
        <TextField
          ref={(ref) => {
            inputRefs[i] = ref;
          }}
          key={i}
          id={i}
          name={i}
          data-id={i}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          maxLength="1"
          className="m-2 border h-10 w-10 text-center form-control rounded font-extrabold"
        />
      ))}
    </div>
  );
};

export default OtpInput;
