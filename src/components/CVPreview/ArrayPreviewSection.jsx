import PropTypes from 'prop-types';
import '../../styles/PreviewSection.css';

// Uses props passed down from the CVPreview component
export default function ArrayPreviewSection({
  title,
  data,
  labels,
  sectionName,
}) {
  return (
    <div className={`preview-section preview-section--${sectionName}`}>
      <h2>{title}</h2>
      {/* Loop through each object in the array */}
      {data.map((entry) => (
        // Set key for section.
        <div key={entry.id} className="preview-entry">
          {/* Loop through the object */}
          {Object.keys(entry).map((key) => {
            // Dont render the object id
            if (key === 'id') return null;

            // Render section
            return (
              // Set key for each field.
              <div key={key} className={`preview-field preview-field--${key}`}>
                <h3 className={`preview-label preview-lebel--${key}`}>
                  {labels[key]}
                </h3>
                <p className={`preview-value preview-value--${key}`}>
                  {entry[key]}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

ArrayPreviewSection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
};
