export const appendtoCSV = (newData) => {
  let csvContent = sessionStorage.getItem("csvData") || "";
  const csvRow = Object.values(newData).join(",") + "\n";
  csvContent += csvRow;
  console.log(csvContent);
  sessionStorage.setItem("csvData", csvContent);
};

export const handleExportCSV = () => {
  const csvData = sessionStorage.getItem("csvData");
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Mission Data.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};
