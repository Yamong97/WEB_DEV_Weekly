import visa from './assets/images/visa.png';
import mastercard from './assets/images/master.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const last4Digits = number.slice(-4);
  const year = expirationYear.toString().slice(-2);
  const month = expirationMonth.toString().padStart(2, '0');
  const cardLogo = type === 'Visa' ? visa : mastercard;

  // Apply dynamic background color and text color via inline style
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="CreditCard" style={cardStyle}>
      <div className="logo-container">
        <img className="creditcard-logo" src={cardLogo} alt={type} />
      </div>
      <div className="creditcard-number">
        •••• •••• •••• {last4Digits}
      </div>
      <div className="creditcard-info">
        <span>
          Expires {month}/{year} {bank}
        </span>
        <span>{owner}</span>
      </div>
    </div>
  );
}

export default CreditCard;