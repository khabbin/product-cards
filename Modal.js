export class Modal {
  constructor(id) {
    this.modalElement = document.getElementById(id)
  }
  
  openModal() {
    this.modalElement.style.visibility = 'visible'
  }
  
  closeModal() {
   this.modalElement.style.visibility = 'hidden' 
  }
  
  isModalOpen() {
    return this.modalElement.style.visibility === 'visible'
  }
} 