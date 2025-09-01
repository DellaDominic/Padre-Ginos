import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div className="app">
      <h1>Padre Gino's - Order Now!</h1>
      <Pizza
        name="The Pepparoni Pizza"
        description="The most common pizza you could ever get"
      />
      <Pizza
        name="The American Pizza"
        description="The piiza with the name of a country that does not tell much about the pizzs"
      />
      <Pizza
        name="The Tandoori Chicken Pizza"
        description="The indian way of saying Pizza is just circular bread with our tandoori chicken on top (fo real?)"
      />
      <Pizza
        name="The Hawaian Pizza"
        description="The infamous pineapple pizza aka i-dont-know-what-is-happening pizza"
      />
      <Pizza
        name="The Dominoes Pizza"
        description="The Pizza at your doorsteps"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
