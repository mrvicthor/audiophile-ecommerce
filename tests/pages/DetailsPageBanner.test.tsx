import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DetailsPageBanner } from "../../components";
import { toast } from "react-toastify";

test("increase and decrease product count", () => {
  const mockProduct = {
    id: 1,
    slug: "test-product",
    name: "Test Product",
    image: {
      mobile: "test-product.png",
      tablet: "test-product.png",
      desktop: "test-product.png",
    },
    category: "test-product",
    categoryImage: {
      mobile: "test-product.png",
      tablet: "test-product.png",
      desktop: "test-product.png",
    },
    new: true,
    price: 400,
    description: "test-product description",
    features: "test-product features",
    featuresCont: "test-product features",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 10m audio cable",
      },
      {
        quantity: 1,
        item: "10m optical cable",
      },
    ],
    quantity: 1,
    gallery: "test-gallery.png",
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
          mobile: "/images/image-zx7-speaker-mobile.jpg",
          tablet: "/images/image-zx7-speaker-tablet.jpg",
          desktop: "/images/image-zx7-speaker.jpg",
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/images/image-xx99-mark-one-headphones-shared-mobile.jpg",
          tablet: "/images/image-xx99-mark-one-headphones-shared-tablet.jpg",
          desktop: "/images/image-xx99-mark-one-headphones-shared-desktop.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/images/image-xx59-headphones-shared-mobile.jpg",
          tablet: "/images/image-xx59-headphones-shared-tablet.jpg",
          desktop: "/images/image-xx59-headphones-shared-desktop.jpg",
        },
      },
    ],
  };

  const { getByText } = render(
    <DetailsPageBanner
      product={mockProduct}
      handleNotification={() => toast("item added")}
    />
  );

  const increaseButton = getByText("+");
  const decreaseButton = getByText("-");
  const quantityDisplay = getByText("1");

  fireEvent.click(increaseButton);
  expect(quantityDisplay).toHaveTextContent("2");

  fireEvent.click(decreaseButton);
  expect(quantityDisplay).toHaveTextContent("1");

  fireEvent.click(decreaseButton);
  expect(quantityDisplay).toHaveTextContent("1");
});
