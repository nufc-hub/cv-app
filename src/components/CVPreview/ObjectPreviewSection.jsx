import PropTypes from 'prop-types';
import '../../styles/PreviewSection.css';

// Uses props passed down from the CVPreview component
export default function ObjectPreviewSection({ data, labels, sectionName }) {
  // Loop through the object
  const section = Object.keys(data).map((key) => {
    // Dont render the object id
    if (key === 'id') return null;
    // Render details
    return (
      // Set key for each field.
      <div key={key} className={`preview-field preview-field--${key}`}>
        <h3 className={`preview-label preview-lebel--${key}`}>{labels[key]}</h3>
        <p className={`preview-value preview-value--${key}`}>{data[key]}</p>
      </div>
    );
  });

  // Render details
  return (
    <div className={`preview-section preview-section--${sectionName}`}>
      {section}
    </div>
  );
}

ObjectPreviewSection.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
};
