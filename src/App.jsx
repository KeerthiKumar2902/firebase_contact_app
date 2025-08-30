import NavBar from "./components/NavBar";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import { MdOutlineSearch, MdDelete } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import {collection ,onSnapshot} from "firebase/firestore"
import { db } from "./config/firebase";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

export default function App() {

  const [contacts, setContacts] =useState([]);

  const [isOpen ,setOpen]= useState(false);

  const [selectedContact, setSelectedContact] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");


  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setOpen(true);
  };

  const onOpen =() =>{
    setSelectedContact(null);
    setOpen(true);
  }
  const onClose =() =>{
    setOpen(false);
  }

  useEffect(() => {
    try {
      const contactsRef = collection(db, "contacts");

      const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
        const contactsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactsList);
      });

      // cleanup on unmount
      return () => unsubscribe();
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  }, []);
  
  const filteredContacts = contacts.filter((contact) =>
      contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone?.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
   <div>
      <div className="max-w-[370px] mx-auto px-4">
        <NavBar/>
        <div className="flex gap-2 ">
          <div className="relative flex items-center flex-grow">
            <MdOutlineSearch className="text-white  ml-1 text-3xl absolute"/>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="text-white pl-9 bg-transparent border-white rounded-md border h-[40px] flex-grow" />
          </div>
            <FaSquarePlus onClick={onOpen} className="text-white text-5xl cursor-pointer" />
        </div>

        <ContactCard contacts={filteredContacts} onEdit={handleEdit}/>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} contact={selectedContact} />
   </div>
  )
}

