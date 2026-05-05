export const downloadcv = () => {
  const link = document.createElement("a");
  link.href = "\src\assets\Document\CV.pdf"; // file in public folder
  link.download = "Shashank_Kumar_CV.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};