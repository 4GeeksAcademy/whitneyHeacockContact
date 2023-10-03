const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		randomKey: "Something random.",
		contacts: [
		  {
			name: "jane Doe",
			email: +"JaneDoe@yahoo.com",
			phone: '+1(000)-0000',
			address: "123 somewhere rd. Anahiem,CA",
			imageUrl: "https://cdn.pixabay.com/photo/2017/06/01/00/44/smiling-2362136_1280.jpg"
			

		  },
		  {
			name: "Bob Ross",
			email: "BobRoss@gmail.com",
			phone: "+1 (000)-0000",
			address: " 456 painting pl. Daytona Beach,fL",
			imageUrl: "https://cdn.pixabay.com/photo/2019/08/27/20/27/torrent-4435196_1280.jpg"
		  },
		  {
			name: "jason born",
			email: "JasonBorn@hotmail.com",
			phone: "+1 (000)-0000",
			address: "789 unknown lane Houston, TX",
			imageUrl: "https://cdn.pixabay.com/photo/2023/09/11/13/08/dog-8246868_1280.jpg"
		  }
		],
		
	  },
	  actions: {
		addContact: () => {},
		editContact: (contact, index) => {
		  let tempContacts = [...getStore().contacts];
		  tempContacts[index] = contact;
  
		  setStore({ contacts: tempContacts });
		},
		removeContact: () => {}
	  }
	};
  };
  
  export default getState;
  