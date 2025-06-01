import PropTypes from 'prop-types';
import './ContactForm.css';

// Uses props passed down from the CVForm component
export default function ObjectFormSection({
  onInputChange,
  title,
  data,
  labels,
}) {
  // Loop through the object
  const fields = Object.keys(data).map((key) => {
    // Dont render the object id
    if (key === 'id') return null;

    // Render form
    return (
      // Set key for each field.
      <div key={key}>
        <label htmlFor={key}>{labels[key] || key}</label>
        <input
          id={key}
          type="text"
          value={data[key]}
          onChange={(e) => onInputChange(key, e.target.value)} // Updates state
        />
      </div>
    );
  });

  // Render input
  return (
    <>
      <fieldset>
        <legend>{title}</legend>
        {fields}
      </fieldset>
    </>
  );
}

ObjectFormSection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
  onInputChange: PropTypes.func.isRequired,
};
