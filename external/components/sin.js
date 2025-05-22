export default ({
  createElement,
  Fragment,
  useState,
  useEffect,
  value = 0,
  isDevelopment,
}) => {
  const [desc, setDesc] = useState("");
  useEffect(() => {
    (async () => {
      const res = await fetch(
        isDevelopment
          ? "/description.json"
          : "http://localhost:8081/description.json"
      );
      const { sin } = await res.json();
      setDesc(sin);
    })();
  }, []);
  return createElement(
    Fragment,
    {},
    createElement(
      "li",
      {},
      createElement(
        "span",
        { style: { width: 200, float: "left" } },
        `sin(${value}°) = ${parseFloat(
          Math.sin(value * (Math.PI / 180)).toFixed(2)
        )}`
      ),
      createElement(
        "span",
        { style: { fontStyle: "italic" } },
        "(" + desc + ")"
      )
    )
  );
};
