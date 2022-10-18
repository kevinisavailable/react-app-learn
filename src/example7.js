import React from "react";
import QrCodeApp from "./example6";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const DownloadQrCode = () => {
  const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');
    console.log(data)
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfWidth = 1000 
    // const pdfHeight = 1000
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('QrCode.pdf');
  };

  return (
    <div>
      <div ref={printRef} onClick = {handleDownloadPdf}>
        <QrCodeApp />
      </div>
    </div>
  );
};

export default DownloadQrCode