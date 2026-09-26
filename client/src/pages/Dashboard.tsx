import { useState } from "react";
import PlusIcon from "../assets/icons/PlusIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import Button from "../component/Button";
import Card from "../component/Card";
import CreateContentModel from "../component/CreateContentModel";
import Sidebar from "../component/Sidebar";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2 border-gray-300">
        <CreateContentModel
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex gap-3 justify-end p-3">
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>
        <div className="flex items-center gap-3">
          <Card
            title="My first post"
            link="https://x.com/23princeDhiman/status/2050540197851590826"
            type="twitter"
          />
          <Card
            title="My first yt video"
            link="https://www.youtube.com/watch?v=DjquREhVEsI"
            type="youtube"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
