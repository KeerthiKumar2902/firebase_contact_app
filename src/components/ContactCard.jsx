import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";


const ContactCard = ({ contacts, onEdit}) => {
  const deleteContact = async (id) => {
      try {
          await deleteDoc(doc(db, "contacts", id));  // delete by document id
          console.log("Contact deleted:", id);
          setContacts((prev) => prev.filter((c) => c.id !== id));
      } catch (error) {
          console.error("Error deleting contact:", error);
      }
  };



  return (
    <div className="mt-4 flex flex-col gap-3">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex items-center justify-between p-2 rounded-lg bg-yellow"
        >
          <div className="flex gap-1">
            <HiOutlineUserCircle className="text-5xl text-orange" />
            <div>
              <h2 className="font-medium">{contact.name}</h2>
              <p className="text-sm">{contact.email}</p>
            </div>
          </div>

          <div className="flex text-2xl gap-2">
            <FaEdit onClick={() => onEdit(contact)} className="cursor-pointer" />
            <MdDelete onClick={() => deleteContact(contact.id)} className="text-purple-800 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
