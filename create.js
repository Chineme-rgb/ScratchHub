//create.js
  const fileInput = document.getElementById('fileInput');
  const fileNameHeading = document.getElementById('fileName');

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileNameHeading.textContent = fileInput.files[0].name;
    } else {
      fileNameHeading.textContent = 'No file selected';
    }
  });
