import PropTypes from 'prop-types';
import '../../styles/FormNav.css';

// This is for a nav panel in the CV input form
export default function FormNav({ onRenderFormSection, activeForm }) {
  // Button keys and labels
  const sections = [
    ['contact', 'Personal Info'],
    ['profile', 'Profile'],
    ['workExperience', 'Work Experience'],
    ['education', 'Education'],
    ['projects', 'Projects'],
    ['skills', 'Skills'],
  ];

  const handleClick = (id) => (e) => {
    e.currentTarget.blur();
    onRenderFormSection(id);
  };

  return (
    <nav aria-label="Form section navigation">
      {/* Button panel */}
      {sections.map(([id, label]) => (
        <button
          key={id}
          type="button"
          className={activeForm === id ? 'active' : ''}
          onClick={handleClick(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

FormNav.propTypes = {
  onRenderFormSection: PropTypes.func.isRequired,
  activeForm: PropTypes.oneOf([
    'contact',
    'profile',
    'workExperience',
    'education',
    'projects',
    'skills',
  ]).isRequired,
};
