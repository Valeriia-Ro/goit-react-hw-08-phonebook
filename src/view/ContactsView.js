import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllContacts } from "../redux/contacts/contacts-operations";
import ContactList from "../Components/ContactList/ContactList";
import ContactForm from "../Components/ContactForm/ContactForm";
import Filter from "../Components/Filter/Filter";

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAllContacts()), [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
