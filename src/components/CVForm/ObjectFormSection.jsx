import PropTypes from 'prop-types';
import '../../styles/FormSection.css';

// Uses props passed down from the CVForm component
export default function ObjectFormSection({
  title,
  data,
  labels,
  onInputChange,
}) {
  // Loop through the object
  const section = Object.keys(data).map((key) => {
    // Dont render the object id
    if (key === 'id') return null;

    // Render form
    return (
      // Set key for each field.
      <div key={key} className="form-section-label-container">
        <label htmlFor={key}>
          {labels[key] || key}
          <input
            id={key}
            type="text"
            value={data[key]}
            onChange={(e) => onInputChange(key, e.target.value)} // Updates state
          />
        </label>
      </div>
    );
  });

  // Render input
  return (
    <>
      <fieldset className="form-section">
        <legend>{title}</legend>
        {section}
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
