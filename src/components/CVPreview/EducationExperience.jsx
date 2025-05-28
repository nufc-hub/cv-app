import PropTypes from 'prop-types';

// Uses props passed down from the CVPreview component
export default function EducationExperience({ education, labels }) {
  // Loop through each object in the array
  const educationCV = education.map((entry) => (
    // Set key for the education section.
    <div key={entry.id}>
      {/* Loop through the object */}
      {Object.keys(entry).map((key) => {
        // Dont render the object id
        if (key === 'id') return null;

        // Render education experience
        return (
          // Set key for each education field.
          <div key={`${entry.id}-${key}`}>
            <h3>{labels[key]}</h3>
            <p>{entry[key]}</p>
          </div>
        );
      })}
    </div>
  ));

  // Render education
  return (
    <>
      <h2>Education</h2>
      {educationCV}
    </>
  );
}

EducationExperience.propTypes = {
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
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
};
