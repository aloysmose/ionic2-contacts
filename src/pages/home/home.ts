import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Contacts, ContactFieldType, ContactFindOptions } from 'ionic-native';

import { AddContactPage } from '../add-contact/add-contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	contactsfound = [];
	search = false;
	
	constructor(public navCtrl: NavController) {

	}

	newContact() {
		this.navCtrl.push(AddContactPage);
	}

	findContact(ev:any) {
		
		let fields:ContactFieldType[] = ['addresses', 'birthday', 'categories', 'country', 
		'department', 'displayName', 'emails', 'familyName', 'formatted', 
		'givenName', 'honorificPrefix', 'honorificSuffix', 'id', 'ims', 'locality', 
		'middleName', 'name', 'nickname', 'note', 'organizations', 'phoneNumbers', 
		'photos', 'postalCode', 'region', 'streetAddress', 'title', 'urls'];

		const options = new ContactFindOptions();
		options.filter = ev.target.value;
		options.multiple = true;
		options.hasPhoneNumber = true;

		Contacts.find(fields, options).then((contacts) => {
			this.contactsfound = contacts;
			console.log(JSON.stringify(contacts[0]));
		});

		if(this.contactsfound.length == 0){
			this.contactsfound.push({displayName: 'No Contacts found'});  
		}
		this.search = true;
	}
}
