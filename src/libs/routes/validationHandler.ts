function validationHandler(config) {
  return function(req, res, next) {
    const keys = Object.keys(config);

    keys.forEach(key => {
      const item = config[key];

      let values = item.in.map(item => {
        return req[item][key];
      });

      if (item && item.required) {
        const val1 = values.filter(item => item);
        if (val1.length != values.length) {
          next({
            status: "Bad Request",
            message: item.errorMessage || `${key} is required`
          });
        }
      }
      if (item && !item.required) {
        const val1 = values.filter(item => item);
        if (isNaN(values)) {
          console.log("Not a number");
          next({
            status: "Bad Request",
            message: `${key} must be a number`
          });
        }
      }
      if (values == "") {
        values = item.default;
        console.log(key, "=", values);
      } else {
        console.log(key, "=", values);
      }
      if (item && item.string) {
        const val1 = values.filter(item => item);
        if (typeof val1[0] != "string") {
          next({
            status: "Bad Request",
            message: `${key} should be string` || "Error occured"
          });
        }
      }
      if (item && item.regex) {
        const val1 = values.filter(item => item);
        const regex = item.regex;
        if (!regex.test(val1[0])) {
          next({
            status: "Bad Request",
            message: `${key} should be valid` || "Error occured"
          });
        }
      }
      if (item && item.isObject) {
        const val1 = values.filter(item => item);
        if (typeof val1[0] != "object") {
          next({
            status: "Bad Request",
            message: `${key} should be an object` || "Error occured"
          });
        }
      }
      if (item && item.custom) {
        item.custom(values);
      }
    });
    next();
  };
}
export default validationHandler;
