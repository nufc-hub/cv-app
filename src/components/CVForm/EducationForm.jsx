import PropTypes from 'prop-types';

// Uses props passed down from the CVForm component
export default function EducationForm({ education, onEducationChange }) {
  // Loop through each object in the array
  const form = education.map((entry, index) => (
    // Set key for the experience form.
    <div key={entry.id}>
      {/* Each education form gets a new numbered header */}
      <h3>{`Education ${index + 1}`}</h3>
      {/* Loop through the object */}
      {Object.keys(education[0]).map((key) => {
        // Dont render the object id
        if (key === 'id') return null;

        // Render education experience
        return (
          // Set key for each education field.
          <div key={`${education[0].id}-${key}`}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              name={key}
              value={education[0][key]}
              onChange={(e) => onEducationChange(0, key, e.target.value)} // Add the props for the function. Updates the object each time a letter is added or removed
            />
          </div>
        );
      })}
    </div>
  ));

  // Render education inputs
  return (
    <>
      <h2>Education</h2>
      {form}
      {/* education button to add extra education section */}
    </>
  );
}

EducationForm.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      universityName: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
      degree: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  onEducationChange: PropTypes.func.isRequired,
};
