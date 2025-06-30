const handleViewAndDownload = () => {
  // 1. Open in new tab
  window.open("/resume.pdf", "_blank");

  // 2. Trigger download
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Layek_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default handleViewAndDownload;