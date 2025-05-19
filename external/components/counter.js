export default ({ createElement, useState }) => {
  const [count, setCount] = useState(0);
  const btnStyle = {
    style: {
      padding: "5px 10px",
      outline: "none",
      border: "1px #00f solid",
      borderRadius: "5px",
      width: "35px",
    },
  };
  return createElement(
    "div",
    {},
    createElement(
      "button",
      {
        ...btnStyle,
        onClick: () => setCount((c) => c + 1),
      },
      "+"
    ),
    createElement("span", { style: { margin: 10 } }, count),
    createElement(
      "button",
      {
        ...btnStyle,
        onClick: () => setCount((c) => c - 1),
      },
      "-"
    )
  );
};
