import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";

// Smoke test
test("it renders without crashing", () => {
  const image = TEST_IMAGES[0];
  render(
    <Card caption={image.caption} src={image.src} currNum={1} totalNum={1} />
  );
});

// Snapshot test
test("it matches snapshot", () => {
  const image = TEST_IMAGES[0];
  const { asFragment } = render(
    <Card caption={image.caption} src={image.src} currNum={1} totalNum={1} />
  );
  expect(asFragment()).toMatchSnapshot();
});
