// Uses props passed down from the CVPreview component
export default function ContactDetails({ contact }) {
  // Loop through the object
  const contactCV = Object.keys(contact).map((key) => {
    // Dont render the object id
    if (key === 'id') return null;

    // Render contact details
    return (
      // Set key for each contact field.
      <div key={`${key.id}-${key}`}>
        <h3>{key}</h3>
        {/* Add onSubmit here?
    when the submit button is clicked the p element is updated*/}
        <p>{contact[key]}</p>
      </div>
    );
  });

  // Render contact details
  return <>{contactCV}</>;
}
