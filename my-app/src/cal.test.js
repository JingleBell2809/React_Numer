import { Calbisection } from "./Root_of_Equation/Cal_Bisection.js";

test("testcal_bi", () => {
  let cal = Calbisection(1.5, 2, "x^4-13");
  expect(cal.xnew).toBe(1.8988288640975952);
});