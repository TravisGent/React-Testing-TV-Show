import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";

test("App Component Renders and fetches shows", async () => {
  render(<App />);

  await waitFor(async () => {
    expect(await screen.findByText(/select a season/i)).toBeInTheDocument()
  })
})