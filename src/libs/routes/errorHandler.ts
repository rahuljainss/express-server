export default function errorHandler(err, req, res, next) {
  console.log("Inside error Handler");
  const t: Date = new Date();
  res.json({
    error: "Not Found",
    message: "error",
    status: 500,
    timestamp: t
  });
}
