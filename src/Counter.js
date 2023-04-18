// import { render, fireEvent } from "@testing-library/react";
// import Count from "./Count";

// describe(Count, () => {
//   it("render-count-componet", () => {
//     const { getByTestId } = render(<Count initial={0} />);
//     const countVal = Number(getByTestId("count").textContent);
//     expect(countVal).toEqual(0);
//   });

//   it("count + 1", () => {
//     const { getByTestId, getByRole } = render(<Count initial={0} />);
//     const incBtn = getByRole("button", { name: "Increment" });
//     expect(Number(getByTestId("count").textContent)).toEqual(0);
//     fireEvent.click(incBtn);
//     expect(Number(getByTestId("count").textContent)).toEqual(1);
//   });
//   it("count - 1", () => {
//     const { getByTestId, getByRole } = render(<Count initial={0} />);
//     const decBtn = getByRole("button", { name: "Decrement" });
//     expect(Number(getByTestId("count").textContent)).toEqual(0);
//     fireEvent.click(decBtn);
//     expect(Number(getByTestId("count").textContent)).toEqual(-1);
//   });
//   it("count reset 0", () => {
//     const { getByTestId, getByRole } = render(<Count initial={50} />);
//     const resBtn = getByRole("button", { name: "Reset" });
//       expect(Number(getByTestId("count").textContent)).toEqual(50);
//       fireEvent.click(resBtn)
//       expect(Number(getByTestId("count").textContent)).toEqual(0);
//   });
//      it("count reset 0", () => {
//        const { getByTestId, getByRole } = render(<Count initial={50} />);
//        const resBtn = getByRole("button", { name: "Reset" });
//        expect(Number(getByTestId("count").textContent)).toEqual(50);
//        fireEvent.click(resBtn);
//        expect(Number(getByTestId("count").textContent)).toEqual(-50);
//      });
// });
