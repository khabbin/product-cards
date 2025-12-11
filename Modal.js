export class Modal {
  constructor(id) {
    this.ModalElement = document.getElementById(`${id}`)
  }
  openModal() {
    this.ModalElement.style.visibility = 'visible'
  }
  closeModal() {
   this.ModalElement.style.visibility = 'hidden' 
  }
  isModalOpen() {
    if (this.ModalElement.style.visibility === 'visible') {
      console.log('isModalOpen:', true)
    } else {
      console.log('isModalOpen:', false)
    }
  }
}