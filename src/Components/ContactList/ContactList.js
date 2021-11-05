import React from "react";
import styles from "./ContactList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllContacts,
  fetchDelete,
} from "../../redux/contacts/contacts-operations";
import { getItems, getFilter } from "../../redux/contacts/contacts-selectors";
import authSelectors from "../../redux/auth/auth-selector";
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchAllContacts());
  }, [dispatch, isLoggedIn]);

  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ul className={styles.list_section}>
      {filtered.map(({ id, name, number }) => (
        <li key={id} className={styles.list_element}>
          <span>{name}: </span>
          <span>{number} </span>
          <button
            className={styles.list_button}
            type="button"
            name="delete"
            onClick={() => dispatch(fetchDelete(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
