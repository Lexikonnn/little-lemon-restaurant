import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestimonialsSection from ".";

test("renders testimonials heading", () => {
  render(<TestimonialsSection />);
  const headingElement = screen.getByRole("heading", { name: /Testimonials/i });
  expect(headingElement).toBeInTheDocument();
});