import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA  from "../mocks/resCardMock.json"
import { withPromotedLabel } from "../RestaurantCard";

import "@testing-library/jest-dom"

it("should render ResturantCard  component with props Data",()=>{
      render(<RestaurantCard resData={MOCK_DATA }/>);

     const name= screen.getByText("Pizza Hut");
     expect(name).toBeInTheDocument();
});


it("should render RestaurantCard component with promoted Label", () => {
  const PromotedCard = withPromotedLabel(RestaurantCard);

  render(<PromotedCard resData={MOCK_DATA} />);

  const promotedLabel = screen.getByText("Promoted");
  expect(promotedLabel).toBeInTheDocument();
});