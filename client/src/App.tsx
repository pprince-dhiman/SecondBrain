import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon"


const App = () => {
  return (
    <div>
      <Button
        text="Primary"
        variant="primary"
        size="sm"
        onClick={() => console.log("Primary Button was clicked.")}
      />
      <Button
        startIcon={<PlusIcon />}
        text="Add content"
        variant="secondary"
        size="md"
        onClick={() => console.log("Primary Button was clicked.")}
      />
      <Button
        text="Secondary"
        variant="secondary"
        size="lg"
        onClick={() => console.log("Secondary Button was clicked.")}
      />
    </div>
  );
};

export default App;
