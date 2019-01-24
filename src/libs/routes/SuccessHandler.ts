export default function SuccessHandler(status:string,message:string,data:any)
{
  return {
    status:status,name:message,data:data};
  }

