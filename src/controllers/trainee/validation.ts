const validation = {
  create: {
    email: {
      errorMessage: 'Id is required',
      in: ['body'],
      regex: /^([A-Za-z0-9_\-\.])+\@successive.tech/,
      required: false,
      string: true,
    },
    id: {
      custom: (value) => {
        console.log('Value', value);
        },
      errorMessage: 'Id is required',
      in: ['body'],
      required: true,
      string: true,
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: /^[a-zA-Z ]{2,30}$/,
      required: true,
    },
  },
  delete: {
    originalId: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: true,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  update: {
    dataToUpdate: {
      custom: () => {
        console.log('custom function');
      },
      in: ['body'],
      isObject: true,
      required: true,
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};
export default validation;
