const colors = [
  "#c55166",
  "red",
  "orange",
  "dark green",
  "#4141ef",
  "purple",
  "brown",
  "black",
];

const randomColor = () => colors[Math.floor(Math.random() * 8)];

export default randomColor;
