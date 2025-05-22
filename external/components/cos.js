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
      const { cos } = await res.json();
      setDesc(cos);
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
        `cos(${value}°) = ${parseFloat(
          Math.cos(value * (Math.PI / 180)).toFixed(2)
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
