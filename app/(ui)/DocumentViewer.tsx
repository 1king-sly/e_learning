'use client'
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const DocumentViewer = ({ cloudinaryDocumentUrl }:{ cloudinaryDocumentUrl: string }) => {
 

  return (
    <div className='w-full h-full'>
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
      <Viewer fileUrl={cloudinaryDocumentUrl} />
    </Worker>
  </div>
  );
};

export default DocumentViewer;


