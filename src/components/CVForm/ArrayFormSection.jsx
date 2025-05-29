import PropTypes from 'prop-types';
import './EducationForm.css';

// Uses props passed down from the CVForm component
export default function ArrayFormSection({
  title,
  data,
  labels,
  onInputChange,
  onAddField,
}) {
  // Loop through each object in the array
  const form = data.map((entry, index) => (
    // Set key for the experience form.
    <div key={entry.id}>
      {/* Each education form gets a new numbered header */}
      <h3>
        {title} {index + 1}
      </h3>
      {/* Loop through the object */}
      {Object.keys(entry).map((key) => {
        // Dont render the object id
        if (key === 'id') return null;

        // Render education experience
        return (
          // Set key for each education field.
          <div key={`${entry.id}-${key}`}>
            <label htmlFor={key}>{labels[key] || key}</label>
            <input
              id={key}
              type="text"
              name={key}
              // value={education[index][key]}
              onChange={(e) => onInputChange(index, key, e.target.value)} // Add the props for the function. Updates the object each time a letter is added or removed
            />
          </div>
        );
      })}
    </div>
  ));

  // Render inputs
  return (
    <>
      <fieldset>
        <legend>{title}</legend>
        {form}
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
