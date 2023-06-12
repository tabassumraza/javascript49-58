const imagePaths = [
  'assets/image1.jpeg',
  'assets/image2.jpeg',
  'assets/image3.jpeg',
  'assets/image4.jpeg',
  'assets/image5.jpeg'
];

const imageContainer = document.getElementById('image-container'); // Assuming you have a <div> element with id 'image-container' in your HTML
const modal = document.getElementById('modal'); // Assuming you have a modal element with id 'modal' in your HTML
const modalImage = document.getElementById('modal-image'); // Assuming you have an <img> element with id 'modal-image' in your modal

let imagesHTML = '';
for (let i = 0; i < imagePaths.length; i++) {
  imagesHTML += `<img src="${imagePaths[i]}" alt="Image ${i + 1}" onclick="openModal('${imagePaths[i]}', ${i})">`;
}

imageContainer.innerHTML = imagesHTML;

function openModal(imagePath, index) {
  modal.classList.add('modal-open');
  modal.classList.remove('modal-close');
  modal.style.display = 'block';

  modalImage.src = imagePath;

  console.log(`Opened modal for image ${index + 1}`);
  // Perform additional actions as needed when a modal is opened
}

function onClosedImagModal() {
  modal.classList.add('modal-close');
  modal.classList.remove('modal-open');

  setTimeout(() => {
    modal.style.display = 'none';
  }, 550);

  // Rest of the code...
}
