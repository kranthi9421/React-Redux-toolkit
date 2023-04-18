import { act, render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe(Input, () => {
  it("render input", () => {
    const { getByTestId } = render(<Input showDiv={false} />);
    const input = getByTestId("searchBar");
    expect(input).toBeTruthy();
  });
  it("render Div", () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const divS = getByTestId("divShow");
    expect(divS).toBeTruthy();
  });

  it("dont Render Div", () => {
    const { queryByTestId } = render(<Input showDiv={false} />);
    const divS = queryByTestId("divShow");
    expect(divS).toBeFalsy();
  });

  it("change on inpt", async () => {
    await act(async () => {
      const { findByTestId } = render(<Input showDiv={true} />);
      const input = findByTestId("searchBar")
      const header = findByTestId("displaySearch")
      const inputWord = "Hayu";
      await fireEvent.change(input, { target: { value: inputWord } });
      expect(header.innerHTML).toBe(inputWord);
    });
  });
});
