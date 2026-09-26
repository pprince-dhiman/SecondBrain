import { useState } from "react";
import Button from "../component/Button";
import Input from "../component/Input";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border border-gray-300 min-w-48 p-5">
        <div className="m-3">
          <Input placeholder="Username" />
        </div>
        <div className="m-3">
          <Input placeholder="Password" />
        </div>

        <div className="mt-5 w-full flex justify-center items-center">
          <Button variant="primary" text="Signup" loading={loading}/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
