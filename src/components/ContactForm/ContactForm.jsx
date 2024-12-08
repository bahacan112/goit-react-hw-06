import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} zaten rehberde mevcut!`);
      return;
    }

    dispatch(
      addContact({
        id: Date.now().toString(),
        name,
        number,
      })
    );

    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        İsim
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Telefon
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Ekle
      </button>
    </form>
  );
};

export default ContactsForm;
