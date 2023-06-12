import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux';

export default function ContactList({ visibleContacts }) {
  const dispatch = useDispatch();
  return (
    <ul className={css.contact__list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
