import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <div>
      <Button
        startIcon={<PlusIcon size="sm"/>}
        endIcon={<ShareIcon size="sm" />}
        text="Primary"
        variant="primary"
        size="sm"
        onClick={() => console.log("Primary Button was clicked.")}
      />
      <Button
        startIcon={<PlusIcon size="md"/>}
        endIcon={<ShareIcon size="md" />}
        text="Add content"
        variant="secondary"
        size="md"
        onClick={() => console.log("Primary Button was clicked.")}
      />
      <Button
        startIcon={<PlusIcon size="lg" />}
        endIcon={<ShareIcon size="lg" />}
        text="Secondary"
        variant="secondary"
        size="lg"
        onClick={() => console.log("Secondary Button was clicked.")}
      />
    </div>
  );
};

export default App;
