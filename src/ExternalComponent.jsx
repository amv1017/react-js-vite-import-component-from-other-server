import { createElement, Fragment, useState, useEffect } from "react";

const ExternalComponent = ({ method, ...props }) =>
  method.default({
    createElement,
    Fragment,
    useState,
    useEffect,
    isDevelopment: import.meta.env.MODE == "development",
    ...props,
  });

export default ExternalComponent;
