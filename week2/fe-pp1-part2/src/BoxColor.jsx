
// function toHex(value) {
//   const hex = value.toString(16);
//   return hex.length === 1 ? "0" + hex : hex;
// }

// function BoxColour(props) {
//   const { r, g, b } = props;
//   const hexColor = ⁠#${toHex(r)}${toHex(g)}${toHex(b)} ⁠;

//   return (
//     <div className="box-color" style={{ backgroundColor: ⁠ rgb(${r}, ${g}, ${b}) ⁠ }}>
//       <div>rgb({r},{g},{b})</div>
//       <div>{hexColor}</div>
//     </div>
//   );
// }

// export default BoxColour; 

function BoxColor({ r, g, b }) {
  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;


  return (
    <div className="boxStyle" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <div>rgb({r},{g},{b})</div>
      <div>{hexColor}</div>
    </div>
  );
}

export default BoxColor;
