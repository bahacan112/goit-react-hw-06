import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./ContactItem.module.css";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={styles.button}
      >
        Sil
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
