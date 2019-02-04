function validationHandler(config) {
  return (req, res, next) => {
    const keys = Object.keys(config);

    keys.forEach((key) => {
      const items = config[key];

      let values = items.in.map((item) => {
        return req[item][key];
      });

      if (items && items.required) {
        const val1 = values.filter((item) => item);
        if (val1.length !== values.length) {
          next({
            message: items.errorMessage || `${key} is required`,
            status: 'Bad Request',
          });
        }
      }
      if (items && !items.required) {
        const val1 = values.filter((item) => item);
        if (isNaN(values)) {
          console.log('Not a number');
          next({
            message: `${key} must be a number`,
            status: 'Bad Request',
          });
        }
      }
      if (values === '') {
        values = items.default;
        console.log(key, '=', values);
      } else {
        console.log(key, '=', values);
      }
      if (items && items.string) {
        const val1 = values.filter((item) => item);
        if (typeof val1[0] !== 'string') {
          next({
            message: `${key} should be string` || 'Error occured',
            status: 'Bad Request',
          });
        }
      }
      if (items && items.regex) {
        const val1 = values.filter((item) => item);
        const regex = items.regex;
        if (!regex.test(val1[0])) {
          next({
            message: `${key} should be valid` || 'Error occured',
            status: 'Bad Request',
          });
        }
      }
      if (items && items.isObject) {
        const val1 = values.filter((item) => item);
        if (typeof val1[0] !== 'object') {
          next({
            message: `${key} should be an object` || 'Error occured',
            status: 'Bad Request',
          });
        }
      }
      if (items && items.custom) {
        items.custom(values);
      }
    });
    next();
  };
}
export default validationHandler;
