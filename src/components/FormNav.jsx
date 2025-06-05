import PropTypes from 'prop-types';

// This is for a nav panel in the CV input form
export default function FormNav({ onRenderFormSection }) {
  // Button keys and labels
  const sections = [
    ['contact', 'Personal Info'],
    ['profile', 'Profile'],
    ['education', 'Education'],
    ['workExperience', 'Work Experience'],
    ['projects', 'Projects'],
    ['skills', 'Skills'],
  ];

  return (
    <nav aria-label="Form section navigation">
      {/* Button panel */}
      {sections.map(([id, label]) => (
        <button key={id} type="button" onClick={() => onRenderFormSection(id)}>
          {label}
        </button>
      ))}
    </nav>
  );
}

FormNav.propTypes = {
  onRenderFormSection: PropTypes.func.isRequired,
};
