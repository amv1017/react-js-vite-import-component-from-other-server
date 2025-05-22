const PORT = import.meta.env.MODE == "development" ? "3000" : "8081";
const COUNTER_PATH =
  "http://localhost:" + PORT + "/external/components/counter.js";

const COMPONENT_PATHS = [
  {
    id: "sin",
    path: "http://localhost:" + PORT + "/external/components/sin.js",
  },
  {
    id: "cos",
    path: "http://localhost:" + PORT + "/external/components/cos.js",
  },
];

export { COUNTER_PATH, COMPONENT_PATHS };
