const apiKey = '280fb5a4bf5d29e72ab283b1834c46a5';
const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
const output = document.getElementById('output');

uploadBtn.addEventListener('click', () => {
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('image', file);

  fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    output.innerHTML = `

      <strong>URL:</strong> ${data.data.url}<br>
      <strong>Eliminar:</strong> ${data.data.delete_url}

    `;
  })
  .catch(error => console.error(error));
});