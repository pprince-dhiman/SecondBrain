import CrossIcon from "../assets/icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";

const CreateContentModel = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end mb-3">
                <div onClick={onClose}>
                  <CrossIcon />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Input placeholder="Enter title..." onChange={() => {}} />
                <Input placeholder="Paste link..." onChange={() => {}} />
              </div>
              <div className="flex justify-center mt-3">
                <Button variant="primary" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModel;
