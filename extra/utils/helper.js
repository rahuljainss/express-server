export function validateEmail(email) {
    let regex = /^([A-Za-z0-9_\-\.])+\@successive.tech/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }