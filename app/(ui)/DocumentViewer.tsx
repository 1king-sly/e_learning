import React from 'react';

const DocumentViewer = ({ cloudinaryDocumentUrl }:{ cloudinaryDocumentUrl: string }) => {
 

  return (
    <iframe
      src={`${cloudinaryDocumentUrl}?embed=true`}
      frameBorder="0"
      title="Cloudinary Document Viewer"
      allowFullScreen
    //   sandbox="allow-same-origin allow-scripts"
      className='w-full h-full  '
    ></iframe>
  );
};

export default DocumentViewer;


