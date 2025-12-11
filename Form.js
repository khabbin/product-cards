export class Form {
  constructor(id) {
    this.form = document.getElementById(id)
  }
  getFormData() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    return data;
  }
  isValid(){
    if (!this.form.checkValidity()) {
      return false
    } else return true
  }
  resetForm() {
    this.form.reset()
  }
}