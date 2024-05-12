import { useId } from "react";
import { useDispatch } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";

const MAXCHAR = 10;
const MINCHAR = 1;

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").test('valid-name', 'Invalid name format', function(value) {
        return /^[a-zA-Z]+$/.test(value);
    }),
  number:Yup.string().required("Number confirm").min(MINCHAR, `${MINCHAR} digits`).max(MAXCHAR, `${MAXCHAR} digits`)
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleAddContact}
      validationSchema={FormSchema}>
      <Form className={css.border}>
        <div>
          <label className={css.labelwrap}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage name="name">
            {(msg) => <span className={css["error-message"]}>{msg}</span>}
          </ErrorMessage>
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.input}
          />
          <ErrorMessage name="number">
            {(msg) => <span className={css["error-message"]}>{msg}</span>}
          </ErrorMessage>
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
