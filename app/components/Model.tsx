"use client";
import { Modal } from "antd";

interface ModelProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const App: React.FC<ModelProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
}) => {
  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        {children}
      </Modal>
    </>
  );
};

export default App;
