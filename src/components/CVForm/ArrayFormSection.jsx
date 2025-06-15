import PropTypes from 'prop-types';
import '../../styles/FormSection.css';

// Uses props passed down from the CVForm component
export default function ArrayFormSection({
  title,
  data,
  labels,
  onInputChange,
  onAddField,
}) {
  // Loop through each object in the array
  const section = data.map((entry, index) => (
    // Set key for the form section.
    <div key={entry.id}>
      {/* Each form gets a new numbered header */}
      <h3>
        {title} {index + 1}
      </h3>
      {/* Loop through the object */}
      {Object.keys(entry).map((key) => {
        // Dont render the object id
        if (key === 'id') return null;

        // Used as a key
        const inputId = `${entry.id}-${key}`;

        // Render form section
        return (
          // Set key for each field.
          <div key={inputId} className="form-section-label-container">
            <label htmlFor={`${entry.id}-${key}`}>
              {labels[key] || key}
              <input
                id={inputId}
                type="text"
                name={key}
                onChange={(e) => onInputChange(index, key, e.target.value)} // Add the props for the function. Updates the object each time a letter is added or removed
              />
            </label>
          </div>
        );
      })}
    </div>
  ));

  // Render inputs
  return (
    <>
      <fieldset className="form-section">
        <legend>{title}</legend>
        {section}
        <button type="button" onClick={onAddField}>
          Add {title}
        </button>
      </fieldset>
    </>
  );
}

ArrayFormSection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onAddField: PropTypes.func.isRequired,
};
