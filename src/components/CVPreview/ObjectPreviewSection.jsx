import PropTypes from 'prop-types';

// Uses props passed down from the CVPreview component
export default function ObjectPreviewSection({ data, labels }) {
  // Loop through the object
  const section = Object.keys(data).map((key) => {
    // Dont render the object id
    if (key === 'id') return null;

    // Render details
    return (
      // Set key for each field.
      <div key={`${key.id}-${key}`}>
        <h3>{labels[key]}</h3>
        {/* Add onSubmit here?
    when the submit button is clicked the p element is updated*/}
        <p>{data[key]}</p>
      </div>
    );
  });

  // Render details
  return <>{section}</>;
}

ObjectPreviewSection.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
};
