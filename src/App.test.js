import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

/* global test, expect */
/* eslint no-undef: "error" */
test("renders personal finance link", () => {
  render(<App />);
  const linkElement = screen.getByText(/ personal finance/i);
  expect(linkElement).toBeInTheDocument();
});
