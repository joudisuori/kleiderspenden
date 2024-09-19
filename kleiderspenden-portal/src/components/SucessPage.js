import React from 'react';

function SuccessPage({ location }) {
  const { details } = location.state || {};

  if (!details) {
    return <div>Keine Registrierungsdetails verfügbar.</div>;
  }

  return (
    <div className="success-page">
      <h2>Registrierung Erfolgreich!</h2>
      <p>Kleidung: {details.clothingType}</p>
      <p>Krisengebiet: {details.crisisRegion}</p>
      <p>Übergabeart: {details.deliveryType}</p>
      {details.pickupAddress && <p>Abholadresse: {details.pickupAddress}</p>}
    </div>
  );
}

export default SuccessPage;

