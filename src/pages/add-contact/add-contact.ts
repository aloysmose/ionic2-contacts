import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts, ContactField } from 'ionic-native';

@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html'
})
export class AddContactPage {
	contactObject = {
        displayName: '',
        nickName: '',
        phoneNumber: '',
        phoneType: ''
    }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }

  addContact(newContact:any) {
      var contact = Contacts.create();
      contact.displayName = newContact.displayName;
      contact.nickname = newContact.nickName;
      
      var field = new ContactField();
      field.type = newContact.phoneType;
      field.value = newContact.phoneNumber;
      field.pref = true;
      
      var numberSection = [];
      numberSection.push( field );
      contact.phoneNumbers = numberSection;
      
      contact.save().then((value) => {
          console.log('saved', value);
          this.navCtrl.pop();
      }, (error) => {
      	console.log(error);
      })   
  }

}
