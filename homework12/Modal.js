export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay
    this.#initOpen(buttonId);
    this.closeButton = this.modal.querySelector('#modal-close-button')
  }
  
  onClick = () => {
    this.close()
  }
  
  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.closeButton.addEventListener('click', this.onClick)
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.onClick)
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.closeButton.removeEventListener('click', this.onClick)
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.onClick)
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }
}