import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Coin Flip App", () => {
    test("there's no coin image when the page loads", () => {
        render(<App />);
        // Check that the placeholder text is displayed
        expect(screen.getByText(/click to flip the coin!/i)).toBeInTheDocument();
        // Ensure no image is rendered initially
        const coinImage = screen.queryByRole("img");
        expect(coinImage).not.toBeInTheDocument();
    });

    test("text below the coin updates properly when the coin lands on heads", () => {
        render(<App />);
        const button = screen.getByText(/flip coin/i);

        // Simulate clicking the button multiple times to land on "heads"
        fireEvent.click(button);
        const coinText = screen.getByText(/it's heads!/i);
        expect(coinText).toBeInTheDocument();
    });

    test("text below the coin updates properly when the coin lands on tails", () => {
        render(<App />);
        const button = screen.getByText(/flip coin/i);

        // Simulate clicking the button multiple times to land on "tails"
        fireEvent.click(button);
        const coinText = screen.getByText(/it's tails!/i);
        expect(coinText).toBeInTheDocument();
    });
});
