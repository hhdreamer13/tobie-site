const InscriptionEmail = (data) => {
  const {
    firstName,
    lastName,
    postalCode,
    emailAddress,
    messageBody,
    atelier,
  } = data;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "10px" }}>
        Information de l'atelier
      </h2>
      <div
        style={{
          margin: "20px 0",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <p>
          <strong>Atelier:</strong> {atelier.title}
        </p>
        <p>
          <strong>Date:</strong> {atelier.workshopDate}
        </p>
        <p>
          <strong>Lieu:</strong> {atelier.place}
        </p>
      </div>
      <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "10px" }}>
        Informations de l'inscrit
      </h2>
      <div
        style={{
          margin: "20px 0",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
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
          <strong>Email:</strong> {emailAddress}
        </p>
        <p>
          <strong>Message:</strong> {messageBody}
        </p>
      </div>
    </div>
  );
};

export default InscriptionEmail;
