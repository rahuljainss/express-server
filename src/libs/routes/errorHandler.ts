export default function errorHandler(err, req, res, next) {
  console.log('Inside error Handler');
  const status = err.status || 500;
  const message = err.message || 'error';
  const error = err.error || 'not found';
  const timestamp = new Date();
  res.send({ error, message, status, timestamp });
}
