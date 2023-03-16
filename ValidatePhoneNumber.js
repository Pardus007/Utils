function validatePhoneNumber(phoneNumber, countryCode) {
  var phoneNumberPattern;

  switch (countryCode) {
    case "1": // USA
      phoneNumberPattern = /^\d{10}$/;
      break;
    case "44": // UK
      phoneNumberPattern = /^\d{10,}$/;
      break;
    case "33": // France
      phoneNumberPattern = /^\d{10}$/;
      break;
    case "81": // Japan
      phoneNumberPattern = /^0\d{9,10}$/;
      break;
    case "90": // Turkey
      phoneNumberPattern = /^[1-9]{1}\d{9}$/;
      break;
    // Add more cases for other countries as needed
    default:
      return false;
  }

  return phoneNumberPattern.test(phoneNumber);
}

// https://www.countrycode.org/