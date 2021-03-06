export interface Contact {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthdate: string;
}

export interface DialogData extends Contact {
  update: boolean;
}

export interface ContactNotifier {
  contact: Contact;
  operation: string;
}