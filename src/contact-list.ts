import { WebAPI } from './web-api';
import { inject } from 'aurelia-framework';

@inject(WebAPI)
export class ContactList{
  contacts;
  selectedId = 0;

  constructor(private api:WebAPI){

  }

  /**
   * This method is called after both the view-model
   * and the view are created
   */
  created(){
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  select(contact){
    this.selectedId = contact.id;
    return true;
  }
}
