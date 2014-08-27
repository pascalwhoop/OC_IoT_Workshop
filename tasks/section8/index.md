# section 8

**Task**: Connect to the REST API with the frontend application provided and manage a user as well as a plug

1. Download the git repository for the frontend
	1. `git clone https://github.com/pascalwhoop/Pi-jAutomation433_Frontend.git`
2. cd into the directory and `npm install` (installs the node dependencies)
3. `bower install` (installs javascript webapp application dependencies)
4. `grunt server` (starts a local server which hosts the mobile webapp)
5. once the website opens, close it again and start the chrome browser with the CORS feature disabled `chromium --disable-web-security` (on debian VM)
6. Enter the right IP in the settings and create a user + a plug
7. turn on the plug, see if something shows up in your jetty console