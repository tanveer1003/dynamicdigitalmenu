import React, { useRef, useState } from "react";

const ImageUpload = ({ onImageSelect }) => {
  const fileInputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      if (onImageSelect) onImageSelect(file); // send to parent
    }
  };

  return (
    <div className="mb-3 d-flex flex-column">
      <label htmlFor="exampleFormControlInput5" className="form-label">
        Image Upload
      </label>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <button
        type="button"
        className="btn btn-primary p-5 bg-white text-dark border border-1"
        style={{
          background: "#0d6efd",
          color: "#4B5563",
          border: "2px dotted #fff",
        }}
        onClick={() => fileInputRef.current.click()}
      >
        <span className="d-flex flex-column justify-content-center align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4B5563"
              d="M6.616 19q-.691 0-1.153-.462T5 17.384v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .691-.462 1.153T17.384 19zM11.5 6.927L9.529 8.898q-.146.146-.347.153t-.366-.159q-.16-.165-.163-.353q-.003-.189.163-.354l2.618-2.62q.132-.13.268-.183q.137-.053.298-.053t.298.053t.268.184l2.618 2.619q.147.146.154.344q.006.198-.153.363q-.166.166-.357.169t-.357-.163L12.5 6.927v8.15q0 .214-.143.357t-.357.143t-.357-.143t-.143-.357z"
            />
          </svg>
          Click to upload or drag and drop
        </span>
      </button>

      {imageFile && (
        <div className="mt-3">
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Preview"
            className="img-thumbnail"
            style={{ maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
