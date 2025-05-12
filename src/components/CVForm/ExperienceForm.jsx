import PropTypes from 'prop-types';

// Uses props passed down from the CVForm component
export default function ExperienceForm({
  experience,
  onExperienceChange,
  onAddExperience,
}) {
  // Loop through each object in the array
  const form = experience.map((entry, index) => (
    // Set key for the experience form.
    <div key={entry.id}>
      {/* Each Experience form gets a new numbered header */}
      <h3>{`Experience ${index + 1}`}</h3>
      {/* Loop through the object */}
      {Object.keys(entry).map((key) => {
        // Dont render the object id
        if (key === 'id') return null;

        // Render practical experience
        return (
          // Set key for each experience field.
          <div key={`${entry.id}-${key}`}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              name={key}
              onChange={(e) => onExperienceChange(index, key, e.target.value)} // Add the props for the function. Updates the object each time a letter is added or removed
            />
          </div>
        );
      })}
    </div>
  ));

  // Render experience inputs
  return (
    <>
      <h2>Experience</h2>
      {form}
      <button onClick={onAddExperience}>Add Experience</button>
    </>
  );
}

ExperienceForm.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      jobTitle: PropTypes.string,
      company: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  onExperienceChange: PropTypes.func.isRequired,
  onAddExperience: PropTypes.func.isRequired,
};
