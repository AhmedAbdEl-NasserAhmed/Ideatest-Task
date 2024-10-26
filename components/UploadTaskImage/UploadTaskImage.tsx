"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FieldError } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface Props {
  onChange?: (e) => void;
  errorMessage: string | FieldError;
  disabled: boolean;
  defaultValue: string;
}

const UploadTaskImage = ({
  defaultValue = null,
  disabled,
  onChange,
  errorMessage
}: Props) => {
  const [imageSrc, setImageSrc] = useState(null);

  const fileInputRef = useRef<HTMLInputElement>();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
    onChange(e.target.files[0]);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col gap-6 h-full  w-full">
      <div
        onClick={triggerFileInput}
        className="flex justify-center items-center relative h-full w-full rounded-lg border-2 border-borderLight border-solid cursor-pointer"
      >
        <Image
          src={
            imageSrc ||
            defaultValue ||
            "data:image/png;base64,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"
          }
          alt="profile"
          fill
        />

        <span className="text-5xl">+</span>
      </div>

      <input
        disabled={disabled}
        style={{ display: "none" }}
        ref={fileInputRef}
        type="file"
        accept=".jpg, .png"
        onChange={(e) => {
          handleFileChange(e);
        }}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default UploadTaskImage;
