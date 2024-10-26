"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { FieldError } from "react-hook-form";

interface Props {
  onChange?: (e) => void;
  errorMessage: string | FieldError;
  disabled: boolean;
}

const UploadTaskImage = ({ disabled, onChange, errorMessage }: Props) => {
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
        {imageSrc && <Image src={imageSrc} alt="profile" fill />}
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
