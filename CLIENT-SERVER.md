# <P ALIGN="CENTER">CLIENT-SERVER ARCHITECTURE</P>

### INTRODUCTION

* Client/server architecture is a computing model in which the server hosts, delivers and manages most of the resources and services to be consumed by the client. This type of architecture has one or more client computers connected to a central server over a network or internet connection. This system shares computing resources.

* Client/server architecture is also known as a networking computing model or client/server network because all the requests and services are delivered over a network.

* Client/server architecture works when the client computer sends a resource or process request to the server over the network connection, which is then processed and delivered to the client. A server computer can manage several clients simultaneously, whereas one client can be connected to several servers at a time, each providing a different set of services. In its simplest form, the internet is also based on client/server architecture where web servers serve many simultaneous users with website data.

![CLIENT-SERVER](https://www.researchgate.net/profile/Trevor_Mudge/publication/221147997/figure/fig1/AS:339672459956226@1457995633431/A-Typical-3-Tier-Server-Architecture-Tier-1-Web-Server-Tier-2-Application-Server-Tier.png "CLIENT-SERVER")


## HOW REQUEST GETS SERVED
Web browsers communicate with web servers using the HyperTextTransfer Protocol (HTTP). When you click a link on a web page, submit a form, or run a search, the browser sends an HTTP Request to the server.

This request includes:

* A URL identifying the target server and resource (e.g. an HTML file, a particular data point on the server, or a tool to run).
* A method that defines the required action (for example, to get a file or to save or update some data). The different methods/verbs and their associated actions are listed below:
* GET: Get a specific resource (e.g. an HTML file containing information about a product, or a list of products).
* POST: Create a new resource (e.g. add a new article to a wiki, add a new contact to a database).
* HEAD: Get the metadata information about a specific resource without getting the body like GET would. You might for example use a HEAD request to find out the last time a resource was updated, and then only use the (more "expensive") GET request to download the resource if it has changed.
* PUT: Update an existing resource (or create a new one if it doesn't exist).
* DELETE: Delete the specified resource.

![CLIENT-SERVER](https://mdn.mozillademos.org/files/13829/Web%20Application%20with%20HTML%20and%20Steps.png"CLIENT-SERVER")

Each line of the request contains information about it. The first part is called the header, and contains useful information about the request, in the same way that an HTML head contains useful information about an HTML document

### EXAMPLE
When a bank customer accesses online banking services with a web browser (the client), the client initiates a request to the bank's web server. The customer's login credentials may be stored in a database, and the web server accesses the database server as a client. An application server interprets the returned data by applying the bank's business logic, and provides the output to the web server. Finally, the web server returns the result to the client web browser for display.

In each step of this sequence of client–server message exchanges, a computer processes a request and returns data. This is the request-response messaging pattern. When all the requests are met, the sequence is complete and the web browser presents the data to the customer.

## HTTP REQUEST
The request sent by the computer to a web server, contains all sorts of potentially interesting information; it is known as HTTP requests.

The HTTP client sends the request to the server in the form of request message which includes following information:

* The Request-line
* The analysis of source IP address, proxy and port
* The analysis of destination IP address, protocol, port and host
* The Requested URI (Uniform Resource Identifier)
* The Request method and Content
* The User-Agent header
* The Connection control header
* The Cache control header

## HTTP RESPONSE

The response-header fields allow the server to pass additional information about the response which cannot be placed in the Status- Line. These header fields give information about the server and about further access to the resource identified by the Request-URI.

* Accept-Ranges
* Age
* ETag
* Location
* Proxy-Authenticate
* Retry-After
* Server
* Vary
* WWW-Authenticate

