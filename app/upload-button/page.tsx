"use client";
 
import { UploadButton } from "../utils/uploadthing";


import { useState } from 'react';
import Link from 'next/link';
 
export default function UploadButtonPage() {
    const [images, setImages] =useState<{
        fileUrl: string
        fileKey: string
    }[]>([])

    const title =images.length ? (
        <>
        <p>Upload Complete!</p>
        <p className='mt-2'>{images.length}files</p>
        </>
    ) : null

    const imgList =(
        <>
        {title}
        <ul>
            {images.map(image=>(
                <li key={image.fileUrl} className='mt-2'>
                    <Link href={image.fileUrl} target='_blank'>
                        {image.fileUrl}
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imgList}
    </main>
  );
}