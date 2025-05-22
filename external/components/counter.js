export default ({ createElement, count, setCount, step }) => {
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
        onClick: () => setCount((c) => c + step),
      },
      "+"
    ),
    createElement("span", { style: { margin: 10 } }, count),
    createElement(
      "button",
      {
        ...btnStyle,
        onClick: () => setCount((c) => c - step),
      },
      "-"
    )
  );
};
