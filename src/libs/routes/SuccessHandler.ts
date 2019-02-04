export default function SuccessHandler(status: string, message: string, data: any) {
  return ({status : status || ('{status}'), message: message || ('{message}'), data: data || ('{data}') });
}
