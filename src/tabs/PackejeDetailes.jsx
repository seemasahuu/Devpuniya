import React from "react";

export const PackejeDetailes = ({ packegeData }) => {
  if (!packegeData) {
    return null;
  }

  const { id, name, description } = packegeData;

  const styleMap = {
    1: { color: "#ffa500", gradient: "linear-gradient(#fffaf0, #ffffff)" },
    2: { color: "#0000ff", gradient: "linear-gradient(#ecf1fe, #ffffff)" },
    3: { color: "#ff0000", gradient: "linear-gradient(#ffe6e6, #ffffff)" },
    4: { color: "#8A2BE2", gradient: "linear-gradient(#f3e5f5, #ffffff)" },
  };

  const styles = styleMap[id] || styleMap[1];

  return (
    <div>
      <div className="my-8 mx-4   w-90 outline rounded-lg"
       style={{background: styles.gradient,outlineColor:styles.color,outlineWidth:'1px'}}>

        <div className="w-full text-xl flex justify-center items-center p-5 ">
          <h1 style={{color:styles.color}}>{name}</h1>
        </div>

        <hr />
        <p className="p-5">{description}</p>
      </div>
    </div>
  );
};
