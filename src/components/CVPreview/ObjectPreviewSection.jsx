import PropTypes from 'prop-types';
import '../../styles/PreviewSection.css';

// Uses props passed down from the CVPreview component
export default function ObjectPreviewSection({ data, sectionName }) {
  // Loop through the object
  const section = Object.keys(data).map((key) => {
    sectionName;
    // Dont render the object id
    if (key === 'id') return null;
    // Render details
    return (
      // Set key for each field.
      <div key={key} className={`preview-field preview-field--${key}`}>
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

ObjectPreviewSection.propTypes = {
  data: PropTypes.object.isRequired,
  sectionName: PropTypes.string.isRequired,
};
