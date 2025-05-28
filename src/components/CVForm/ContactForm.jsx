import PropTypes from 'prop-types';
import './ContactForm.css';

// Uses props passed down from the CVForm component
export default function ContactForm({ contact, onContactChange }) {
  // Loop through the object
  const fields = Object.keys(contact).map((key) => {
    // Dont render the object id
    if (key === 'id') return null;

    // Render contact form
    return (
      // Set key for each contact field.
      <div key={key}>
        <label htmlFor={key}>{key}</label>
        <input
          id={key}
          type="text"
          value={contact[key]}
          onChange={(e) => onContactChange(key, e.target.value)} // Updates state
        />
      </div>
    );
  });

  // Render contact
  return (
    <>
      <fieldset>
        <legend>Contact Details</legend>
        {fields}
      </fieldset>
    </>
  );
}

ContactForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    gitHub: '',
    linkedIn: '',
  }).isRequired,
  onContactChange: PropTypes.func.isRequired,
};
