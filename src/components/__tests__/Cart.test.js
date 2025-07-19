import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should load Restaurant Menu, expand category and add items to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  // Assert restaurant name
  expect(await screen.findByText("Pizza Hut")).toBeInTheDocument();

  // Find the category (e.g. "Recommended (20)") and click it
  const accordionHeader = await screen.findByText((text) =>
    text.includes("Recommended") && text.includes("20")
  );

  fireEvent.click(accordionHeader);

  // Wait for food items to render
  await waitFor(() => {
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
  });

  // Initially cart is empty
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  // Add first item
  const addBtns = screen.getAllByRole("button", { name: /add \+/i });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  // Add second item
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
});
