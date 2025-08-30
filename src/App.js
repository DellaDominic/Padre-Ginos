import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", null, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepparoni Pizza",
      description: "The most common pizza you could ever get",
    }),
    React.createElement(Pizza, {
      name: "The American Pizza",
      description:
        "The piiza with the name of a country that does not tell much about the pizzs",
    }),
    React.createElement(Pizza, {
      name: "The Tandoori Chicken Pizza",
      description:
        "The indian way of saying Pizza is just circular bread with our tandoori chicken on top (fo real?)",
    }),
    React.createElement(Pizza, {
      name: "The Hawaian Pizza",
      description:
        "The infamous pineapple pizza aka i-dont-know-what-is-happening pizza",
    }),
    React.createElement(Pizza, {
      name: "The Dominoes Pizza",
      description: "The Pizza at your doorsteps",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
