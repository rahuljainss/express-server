export default function notFoundRoute(req,res,next){
  console.log("Inside not Found Route");
  next({Error:"not found"});
}
