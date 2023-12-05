import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

function Pruebacorreo({ destinatario, onDestinatarioChange }) {
  const form = useRef();
  const [correo, setCorreo] = useState('');
  const [currentDestinatario, setCurrentDestinatario] = useState(destinatario);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    setCurrentDestinatario(destinatario);
  }, [destinatario]);

  useEffect(() => {
    if (checkBoxChecked) {
      setCorreo(destinatario);
    } else {
      setCorreo('');
    }
  }, [checkBoxChecked, destinatario]);

  const sendEmail = (e) => {
    e.preventDefault();

    const correoDestinatario = sessionStorage.getItem('correo');

    if (!correoDestinatario) {
      console.error('No se proporcionó un destinatario para el correo.');
      return;
    }

    var templateParams = {
      to_name: correoDestinatario,
      from_name: 'abc',
    };

    emailjs
      .sendForm('service_a76n0nh', 'template_manlu87', form.current, 'jNPHIUx_wBsaVehEX')
      .then(
        (result) => {
          console.log('Correo enviado correctamente.');
          onDestinatarioChange(currentDestinatario);
          setShowSuccessAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const llenarCorreoDesdeSession = () => {
    try {
      const correoSession = destinatario;
      if (correoSession) {
        setCorreo(correoSession);
        setShowSuccessAlert(true);
      } else {
        console.log('No se encontró ningún correo en sessionStorage.');
      }
    } catch (error) {
      console.error('Error al obtener el correo desde sessionStorage:', error);
    }
  };

  const handleCheckboxChange = (isChecked) => {
    setCheckBoxChecked(isChecked);
  };

  return (
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="checkBoxLlenarCorreo"
          checked={checkBoxChecked}
          onChange={() => handleCheckboxChange(!checkBoxChecked)}
        />
        <label className="form-check-label" htmlFor="checkBoxLlenarCorreo">Aceptar términos y condiciones</label>
      </div>

      {checkBoxChecked && (
        <form ref={form} onSubmit={sendEmail}>
          <label style={{ display: 'none' }}>Email</label>
          <input type="email" name="user_email" value={correo} onChange={(e) => setCorreo(e.target.value)} style={{ display: 'none' }} />
          <button
            type='submit'
            className='btn btn-success btn-outline-dark text-white col-3 m-1'
            onClick={llenarCorreoDesdeSession}
          >
            Aceptar
          </button>
          <Alert key="success" variant="success" show={showSuccessAlert} className="mt-3">
            Se ha envíado un correo al Usuario para avisar respecto al vínculo.
          </Alert>
        </form>
      )}
    </div>
  );
}

export default Pruebacorreo;