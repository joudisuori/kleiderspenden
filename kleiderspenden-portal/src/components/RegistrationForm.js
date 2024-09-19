import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [deliveryType, setDeliveryType] = useState('');
  const [clothingType, setClothingType] = useState('');
  const [crisisRegion, setCrisisRegion] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clothingType || !crisisRegion) {
      alert('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }

    if (deliveryType === 'Abholung') {
      if (pickupAddress.trim() === '' || zipCode.trim() === '') {
        alert('Bitte geben Sie eine Abholadresse und Postleitzahl ein.');
        return;
      }

      if (zipCode.slice(0, 2) !== '12') { 
        alert('Die Abholadresse liegt nicht in der Nähe der Geschäftsstelle.');
        return;
      }
    }

    alert(`Registrierung erfolgreich!\nKleidung: ${clothingType}\nKrisengebiet: ${crisisRegion}\nÜbergabeart: ${deliveryType}`);
  };

  return (
    <div id="registration" className="registration-form">
      <h2>Kleiderspende Registrierung</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Übergabeart</label>
          <select className="form-control" value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)} required>
            <option value="" disabled hidden>Bitte wählen</option>
            <option value="Geschaeftsstelle">Übergabe an der Geschäftsstelle</option>
            <option value="Abholung">Abholung</option>
          </select>
        </div>

        <div className="form-group">
          <label>Art der Kleidung</label>
          <input type="text" className="form-control" value={clothingType} onChange={(e) => setClothingType(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Krisengebiet</label>
          <select className="form-control" value={crisisRegion} onChange={(e) => setCrisisRegion(e.target.value)} required>
            <option value="" disabled hidden>Bitte wählen</option>
            <option value="Syrien">Syrien</option>
            <option value="Jemen">Jemen</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Venezuela">Venezuela</option>
          </select>
        </div>

        {deliveryType === 'Abholung' && (
          <div className="address-group">
            <div className="form-group address-field">
              <label>Abholadresse</label>
              <input type="text" className="form-control" value={pickupAddress} onChange={(e) => setPickupAddress(e.target.value)} required />
            </div>
            <div className="form-group address-field">
              <label>Postleitzahl der Abholadresse</label>
              <input type="text" className="form-control" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary mt-3">Registrieren</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

