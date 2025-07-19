import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";
import { execPath } from "process";


it("Should  render load Header Component with a login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
     const loginButton =screen.getByRole("button");
     expect(loginButton).toBeInTheDocument();
});


it("Should render Header Component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart\s*\(0\)/i);
  expect(cartItems).toBeInTheDocument();
});


it("Should render Header Component with Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});


it("Should   change  Login Button  to Logout  on Click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
     const loginButton =screen.getByRole("button",{name:"Login"});

     fireEvent.click(loginButton);

       const logoutButton =screen.getByRole("button",{name:"Logout"});

     expect(logoutButton).toBeInTheDocument();
});
