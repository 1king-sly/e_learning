import React from 'react';

const DocumentViewer = ({ cloudinaryDocumentUrl }:{ cloudinaryDocumentUrl: string }) => {
 

  return (
    <iframe
      src={`${cloudinaryDocumentUrl}?embed=true`}
      frameBorder="0"
      title="Cloudinary Document Viewer"
      allowFullScreen
      className='w-full h-full  '
    ></iframe>
  );
};

export default DocumentViewer;


