import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../contact/Contact";

import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  if (filteredContacts.length) {
    return (
      <ul className={css["contact-list"]}>
        {filteredContacts.map((contactItem) => (
          <Contact
            key={contactItem.id}
            name={contactItem.name}
            number={contactItem.number}
            id={contactItem.id}
          />
        ))}
      </ul>
    );
  }

  return null;
};

export default ContactList;
