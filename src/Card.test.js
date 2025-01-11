import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// Smoke Test
it("renders Card without crashing", () => {
    render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
});

// Snapshot Test
it("matches snapshot", () => {
    const { asFragment } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
    expect(asFragment()).toMatchSnapshot();
});
