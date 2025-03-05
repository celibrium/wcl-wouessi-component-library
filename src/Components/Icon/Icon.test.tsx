import { render, screen } from "@testing-library/react";
import Icon from "./Icon";
import "@testing-library/jest-dom";

describe("Icon Component", () => {
  it("should render CaretCircleRight icon", () => {
    render(<Icon name="CaretCircleRight" />);
    const icon = screen.getByLabelText("CaretCircleRight icon");
    expect(icon).toBeInTheDocument();
  });

  it("should render the icon with a custom size", () => {
    render(<Icon name="CaretCircleRight" size={48} />);
    const icon = screen.getByLabelText("CaretCircleRight icon");
    expect(icon).toHaveAttribute("width", "48");
    expect(icon).toHaveAttribute("height", "48");
  });

  it("should render the icon with a custom color", () => {
    render(<Icon name="CaretCircleRight" color="red" />);
    const icon = screen.getByLabelText("CaretCircleRight icon");
    expect(icon).toHaveAttribute("fill", "red");
  });
});
