import React from "react";
import styles from "./DeleteWindow.module.scss";
import { DeletWindowProps } from "@/intefaces/interfaces";

const DeleteWindow = ({
  disabled,
  message,
  setShowModal,
  onClick
}: DeletWindowProps) => {
  return (
    <div className={styles["delete-item"]}>
      <div className="text-4xl font-bold">{message}</div>
      <div className="flex gap-8 justify-center w-full">
        <button
          disabled={disabled}
          onClick={setShowModal}
          className={`bg-gray-600 text-white font-medium py-4 px-6 rounded ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Close
        </button>
        <button
          disabled={disabled}
          onClick={() => {
            if (setShowModal) setShowModal();
            if (onClick) onClick();
          }}
          className={`bg-red-600 text-white font-medium py-4 px-6 rounded ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteWindow;
