// Function to append new data to the CSV content stored in session storage

export const appendtoCSV = (newData) => {
  // Get the existing CSV content from session storage, or an empty string if it doesn't exist
  let csvContent = sessionStorage.getItem("csvData") || "";
  // Convert the new data object's values to a CSV row
  const csvRow = Object.values(newData).join(",") + "\n";
  // Convert the new data object's values to a CSV row
  csvContent += csvRow;
  // Store the updated CSV content back in session storage
  sessionStorage.setItem("csvData", csvContent);
};

export const handleExportCSV = () => {
  const csvData = sessionStorage.getItem("csvData");
  if (csvData) {
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mission Data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
};
