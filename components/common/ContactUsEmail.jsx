const ContactUsEmail = (data) => {
  const { firstName, lastName, postalCode, emailAddress, messageBody } = data;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2 style={{ color: "#333366", borderBottom: "1px solid #333366" }}>
        Nouveau message du formulaire de contact
      </h2>
      <p>
        <strong>Prénom:</strong> {firstName}
      </p>
      <p>
        <strong>Nom de famille:</strong> {lastName}
      </p>
      <p>
        <strong>Code postal:</strong> {postalCode}
      </p>
      <p>
        <strong>Adresse électronique:</strong> {emailAddress}
      </p>
      <p>
        <strong>Message:</strong> {messageBody}
      </p>
    </div>
  );
};

export default ContactUsEmail;
