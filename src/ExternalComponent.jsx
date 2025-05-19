import { createElement, useState } from "react";

const ExternalComponent = ({ method, args = { createElement, useState } }) =>
  method.default(args);

export default ExternalComponent;
