import React from 'react'
import Modal from './Modal'
import {Field,Form,Formik} from "formik";
import { db } from '../config/firebase';
import { addDoc,doc,updateDoc, collection } from 'firebase/firestore';

const AddAndUpdateContact = ({isOpen,onClose, contact}) => {

    const addContact =async(contact) =>{
        try {
            const contactRef=collection(db ,"contacts");
            await addDoc(contactRef,contact);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik initialValues={{name: contact?.name||"", email : contact?.email||"",}} 
                    enableReinitialize
                    onSubmit={async (values) => {
                        if (contact?.id) {
                        // 🔹 Update existing
                        await updateDoc(doc(db, "contacts", contact.id), values);
                        } else {
                        // 🔹 Add new
                        await addContact(values);
                        }
                        onClose();
                    }
                }>
                    <Form className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <Field name="name" className=" border h-10 rounded-md"/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">E-mail</label>
                            <Field  name="email" className=" border h-10 rounded-md"/>
                        </div>
                        <button className=" self-center bg-black px-3 py-1.5 rounded-md text-white border transition-transform duration-200 hover:scale-105">
                            {contact?.id ? "Update Contact" : "Add Contact"}
                        </button>
                        
                    </Form>

                </Formik>
            </Modal>
        </div>
    )
}

export default AddAndUpdateContact