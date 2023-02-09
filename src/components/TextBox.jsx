import React, { useState } from "react";

export const TextBox = ({nameTitle}) => {
    const [bgColor, setBgColor] = useState('indigo');
  return (
    <div>
      <article title="párrafo principal"
        style={{backgroundColor: bgColor}}
      >
        {nameTitle}
      </article>
      <button onClick={()=>setBgColor(bgColor==='indigo' ? 'tomato' : 'indigo')}>
        Pulsa para modificar
      </button>
    </div>
  );
};
