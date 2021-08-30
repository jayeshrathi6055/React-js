import React from "react";
import "./body.css";

export default function Body() {
  let [value, setValue] = React.useState("");
  let [words, setWords] = React.useState(0);

  const changeValue = (e) => {
    setValue(e.target.value);
    let reg = /[a-zA-Z]{0,100}\s+[a-zA-Z]{0,100}/g;
    let arr = value.match(reg);
    if (arr != null) {
      setWords(arr.length + 1);
    } else {
      setWords(0);
    }
  };

  function upperCase(value) {
    setValue(value.toUpperCase());
  }

  function lowerCase(value) {
    setValue(value.toLowerCase());
  }

  function capitilize(value) {
    let exp = /\s+[a-z]/g;
    let arr = value.match(exp);
    if (arr !== null) {
      for (let el of arr) {
        value = value.replace(
          el,
          `${el.slice(0, el.length - 1)}${el[el.length - 1].toUpperCase()}`
        );
      }
      value = value.replace(value[0], value[0].toUpperCase());
      setValue(value);
    }
  }

  function clearText(value) {
    setValue("");
    setWords(0);
  }

  function copyToClipBoard(value) {
    navigator.clipboard.writeText(value);
  }

  function removeExtraSpace(value) {
    let reg1 = /\s+/g;
    value = value.replace(reg1, " ");
    value = value.trim();
    setValue(value);
  }

  function sentenceFormatter(value) {
    value = value.replace(value[0], value[0].toUpperCase());
    value = value.trim();
    removeExtraSpace(value);
    let reg = /[a-zA-Z]\s+,/g;
    let reg1 = /[a-zA-Z]\s+\./g;
    let reg2 = /\.[a-zA-Z]/g;
    let reg3 = /,[a-zA-Z]/g;
    let reg4 = /[a-zA-Z]\s+-/g;
    let reg5 = /-\s+[a-zA-Z]/g;
    let reg6 = /,\s+[a-zA-Z]/g;
    let reg7 = /\.\s+[a-zA-Z]/g;
    let arr = value.match(reg);
    let arr1 = value.match(reg1);
    let arr2 = value.match(reg2);
    let arr3 = value.match(reg3);
    let arr4 = value.match(reg4);
    let arr5 = value.match(reg5);
    let arr6 = value.match(reg6);
    let arr7 = value.match(reg7);
    if (arr != null) {
      for (let el of arr) {
        value = value.replace(el, `${el[0]},`);
      }
    }
    if (arr1 != null) {
      for (let el of arr1) {
        value = value.replace(el, `${el[0]}.`);
      }
    }
    if (arr2 != null) {
      for (let el of arr2) {
        value = value.replace(el, `. ${el[1].toUpperCase()}`);
      }
    }
    if (arr3 != null) {
      for (let el of arr3) {
        value = value.replace(el, `, ${el[1]}`);
      }
    }
    if (arr4 != null) {
      for (let el of arr4) {
        value = value.replace(el, `${el[0]}-`);
      }
    }
    if (arr5 != null) {
      for (let el of arr5) {
        value = value.replace(el, `-${el[el.length - 1]}`);
      }
    }
    if (arr6 != null) {
      for (let el of arr6) {
        value = value.replace(el, `, ${el[el.length - 1]}`);
      }
    }
    if (arr7 != null) {
      for (let el of arr7) {
        value = value.replace(el, `. ${el[el.length - 1]}`);
      }
    }
    setValue(value);
  }

  return (
    <div>
      {/* Making Text area */}
      <div className="mainBody">
        <div>
          <h1>Enter your text and apply your changes</h1>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="8"
            value={value}
            placeholder="Write your text here..."
            onChange={changeValue}
          ></textarea>
        </div>
      </div>

      {/* Adding Buttons */}
      <div className="buttons">
        <div>
          <button
            onClick={() => {
              upperCase(value);
            }}
          >
            Upper Case
          </button>
          <button
            onClick={() => {
              lowerCase(value);
            }}
          >
            Lower Case
          </button>
          <button
            disabled={value.length <= 0}
            onClick={() => {
              capitilize(value);
            }}
          >
            Capitilize
          </button>
          <button
            onClick={() => {
              copyToClipBoard(value);
            }}
          >
            Copy Text to Clipboard
          </button>
          <button
            onClick={() => {
              clearText(value);
            }}
          >
            Clear Text
          </button>
          <button
            onClick={() => {
              removeExtraSpace(value);
            }}
          >
            Remove Extra Space
          </button>
          <button
            onClick={() => {
              sentenceFormatter(value);
            }}
          >
            Sentence Formatter
          </button>
        </div>
      </div>

      {/* Your text summary */}
      <div className="summary">
        <h1 style={{ fontSize: "2.5rem", paddingBottom: "1rem" }}>
          Your text summary
        </h1>
        <p>
          {value.length ? words : 0} Words and {value.length} Characters
        </p>
        <p>{value.length ? words * 0.0032 : 0} Minutes Read </p>
      </div>

      {/* Preview */}
      <div className="preview">
        <h1>Preview</h1>
        <p>{value ? value : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
