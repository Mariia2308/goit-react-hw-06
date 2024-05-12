import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

import { BsPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact}>
      <div>
        <div className={css.contactwrapp}>
          <BsPersonFill />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.description}>
          <BsFillTelephoneFill />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button onClick={onDelete} type="button" className={css.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
