import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Bisection from "./Root_of_Equation/Bisection.js";

test("Bisection", () => {
    render(<Bisection />);

    const xlInput = screen.getByTestId("XL");
    fireEvent.change(xlInput, { target: { value: "1.5" } });

    const xrInput = screen.getByTestId("XR");
    fireEvent.change(xrInput, { target: { value: "2" } });

    const equation = screen.getByTestId("Equation");
    fireEvent.change(equation, { target: { value: "x^4-13" } });

    const myBtn = screen.getByTestId("myBtn");
    fireEvent.click(myBtn);

    const answer = screen.getByTestId("ans");
    expect(answer.textContent).toBe("Answer = 1.898829");
});
