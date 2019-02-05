export default function notFoundRoute(next) {
  console.log('Inside not Found Route');
  next({Error: 'not found'});
}
