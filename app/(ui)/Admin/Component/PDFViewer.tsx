import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

const PDFViewer = ({ pdfUrl }:{pdfUrl:string}) => {
  return (
    <div className='w-screen h-screen'>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
        <Viewer fileUrl={pdfUrl}  plugins={[
                    defaultLayoutPluginInstance,
                ]} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
