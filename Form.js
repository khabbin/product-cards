export class Form {
  constructor(id) {
    this.form = document.getElementById(id)
  }
  
  getFormData() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    return data;
  }
  
  isValid() {
    return this.form.checkValidity()
  }
  
  resetForm() {
    this.form.reset()
  }
}