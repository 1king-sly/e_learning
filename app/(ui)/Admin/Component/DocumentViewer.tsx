import React from 'react';

const DocumentViewer = ({ cloudinaryDocumentUrl }:{ cloudinaryDocumentUrl: string }) => {
 

  return (
    <iframe
      src={`${cloudinaryDocumentUrl}?embed=true`}
      frameBorder="0"
      title="Cloudinary Document Viewer"
      allowFullScreen
    //   sandbox="allow-same-origin allow-scripts"
      className='w-[80vw] h-[80vh]'
    ></iframe>
  );
};

export default DocumentViewer;
