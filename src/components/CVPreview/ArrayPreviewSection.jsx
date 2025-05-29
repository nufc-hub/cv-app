import PropTypes from 'prop-types';

// Uses props passed down from the CVPreview component
export default function ArrayPreviewSection({ title, data, labels }) {
  return (
    <>
      <h2>{title}</h2>
      {/* Loop through each object in the array */}
      {data.map((entry) => (
        // Set key for section.
        <div key={entry.id}>
          {/* Loop through the object */}
          {Object.keys(entry).map((key) => {
            // Dont render the object id
            if (key === 'id') return null;

            // Render section
            return (
              // Set key for each field.
              <div key={`${entry.id}-${key}`}>
                <h3>{labels[key]}</h3>
                <p>{entry[key]}</p>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}

ArrayPreviewSection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
};
