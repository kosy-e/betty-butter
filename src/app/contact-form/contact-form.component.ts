import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contact = {
    fullName: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Send the form data to a server using a service
    console.log(this.contact);
  }

}
