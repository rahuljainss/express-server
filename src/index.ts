import Configuration from "./config/configuration";
import Server from "./Server";
console.log("Inside Config");
const server = new Server(Configuration);
server.bootstrap().run();
