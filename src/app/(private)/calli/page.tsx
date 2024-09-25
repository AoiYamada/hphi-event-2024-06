"use client";

import React, { useState } from "react";
import "./calli.css";

const Page = () => {
  const [inputText, setInputText] = useState("");
  const [lineHeight, setLineHeight] = useState(1);
  const [fontSize, setFontSize] = useState(56);

  const splitText = () => {
    const lines = inputText.split("\n");
    return lines.map((line, index) => <p key={index}>{line}</p>);
  };

  const changeLineHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLineHeight(parseFloat(e.target.value));
  };

  const changeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(parseInt(e.target.value));
  };

  return (
    <div className="w-full" id="body">
      <div className="control-form">
        <h1>科技文字轉換器</h1>
        <textarea
          id="input-text"
          rows={10}
          cols={50}
          placeholder="在此輸入文字..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className="input-group">
          <label>
            行高
            <input
              type="number"
              id="line-height-input"
              min={0}
              max={2}
              step={0.1}
              value={lineHeight}
              onChange={changeLineHeight}
            />
          </label>
          <label>
            字體大小
            <input
              type="number"
              id="font-size-input"
              min={0}
              max={100}
              value={fontSize}
              onChange={changeFontSize}
            />
          </label>
        </div>
        <button onClick={splitText}>轉換文字</button>
      </div>

      <div
        className="vertical-text"
        id="output-text"
        style={{
          lineHeight: lineHeight,
          fontSize: `${fontSize}px`,
        }}
      >
        {splitText()}
      </div>
    </div>
  );
};

export default Page;
