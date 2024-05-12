import ContactForm from "../contact-form/ContactForm.jsx";
import SearchBox from "../search-box/SearchBox.jsx";
import ContactList from "../contact-list/ContactList.jsx";

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
