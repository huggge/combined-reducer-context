import { GlobalProvider } from "./state/GlobalContext";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";


function App() {
  console.log("App.js re-render")
  return (
    <GlobalProvider>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </GlobalProvider>
  );
}

export default App;
