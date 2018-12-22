# SurgeonsUI: Web Application: 

It is a simple java web application example with java Servlet on server side providing data.

And client side sending request in AJAX style.Tools used on client side is  HTML5/CSS/JS/Jquery

For deploying this Web Application:

Tomcat as a web server should be configured, and this (assignment) folder will be copied in webapps folder in Tomcat.

“SurgeonsUI.html” is the web page. To access this page, tomcat server should be running. For this run “startup.bat” file which is present in bin folder of Tomcat. 

Now, in browser type http://localhost:8080/assignment/SurgeonsUI.html for accessing the webpage in browser.

Server:
•	Server includes only one java Servlet  - “Get Surgeons” this is mapped to “/getSurgeons” url , through web.xml . I have not used Annotation for this purpose.

•	This Servlet serves GET requests. It reads assignment.json file and write it to response.

•	Since it contains only one java file, I have included both source code and compiled code in same folder. Otherwise, I could have created separate folders for compiled and source codes.

Client:

I have used jquery for ajax style request, and for handling events, and used java script for creating and appending dynamic elements to DOM.

Java script Details:

•	Service.js : 
Service.js contains the service which on page load send request to server and receives Surgeons data in response. 

•	Model.js:
It stores all the data required on web page, (surgeons and specialties array)

•	Surgeon.js:
It stores all the information of surgeon

•	SurgeonView.js:
It handles all the events and functions on view.

•	SurgeonsUI.js:
It is the starting point, and handles document’s ready event.

	HTML file: SurgeonsUI.html
