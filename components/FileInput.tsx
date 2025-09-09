import React, { ChangeEvent, RefObject } from "react";
import Image from "next/image";

const FileInput = ({
    id,
    label,
    accept,
    file,
    previewUrl,
    inputRef,
    onChange,
    onReset,
    type
} : FileInputProps) => {
    return (
        <section className="file-input">
            <label htmlFor={id}>{label}</label>
        
            <input
                type="file"
                id={id}
                accept={accept}
                ref={inputRef}
                hidden
                onChange={onChange}
            />

            {!previewUrl ? (
                <figure onClick={() => inputRef.current?.click()}>
                    <Image 
                        src = "/assets/icons/upload.svg"
                        alt = "Upload Icon"
                        width = {20}
                        height = {20}
                    />
                    <p>Click to upload your {id}</p>
                </figure>
            ) : (
                <div>
                    {type === "video" ? (
                        <video 
                            src={previewUrl} controls
                        />
                    ) : (
                        <Image 
                            src={previewUrl} 
                            alt="image"
                            fill 
                        />
                    )}
                    <button type="button" onClick={onReset}>
                        <Image 
                            src="/assets/icons/close.svg"
                            alt="Close Icon"
                            width={15}
                            height={15}
                        />
                    </button>
                    <p>{file?.name}</p>

                </div>
            )}


        </section>
    )
}

export default FileInput;