import { render, fireEvent, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


test("left arrow is missing on the first image, right arrow is missing on the last image", () => {
  // Render the Carousel component
  render(<Carousel photos={photos} title="Test Carousel" />);

  // Check that the left arrow is not visible on the first image
  const leftArrow = screen.queryByRole("button", { name: /left arrow/i });
  const rightArrow = screen.queryByRole("button", { name: /right arrow/i });

  expect(leftArrow).not.toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();

  // Move to the last image
  for (let i = 1; i < photos.length; i++) {
    fireEvent.click(rightArrow);
  }

  // Check that the right arrow is not visible on the last image
  expect(screen.queryByRole("button", { name: /right arrow/i })).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /left arrow/i })).toBeInTheDocument();
});
