// DocumentViewer.js
import React from 'react';

const DocumentViewer = ({ cloudinaryDocumentUrl }:{ cloudinaryDocumentUrl: string }) => {
 

  return (
    <iframe
      src={`${cloudinaryDocumentUrl}?embed=true`}  
      width="100%"
      height="800"
      frameBorder="0"
      title="Cloudinary Document Viewer"
    //   sandbox="allow-same-origin allow-scripts"
      className='w-[80vw] h-[80vh]'
    ></iframe>
  );
};

export default DocumentViewer;
