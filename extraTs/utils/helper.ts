export function validateEmail(email:string):boolean {
    let regex = /^([A-Za-z0-9_\-\.])+\@successive.tech/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
