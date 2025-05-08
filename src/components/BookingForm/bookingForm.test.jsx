import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from ".";

test("allows entering number of customers", () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );

  const input = screen.getByLabelText(/amount of customers/i);
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "4" } });
  expect(input.value).toBe("4");
});