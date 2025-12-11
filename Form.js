export class Form {
  constructor(id) {
    this.form = document.getElementById(`${id}`)
  }
  getFormData() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    return data;
  }
  isValid(){
    if (!this.form.checkValidity()) {
      console.log('isValid:',false);
    } else { 
      console.log('isValid:',true);
  }}
  resetForm() {
    this.form.reset()
  }
}