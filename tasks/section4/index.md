# section 4

**Task**: Configure Spring with its xml configuration files to create a working frame in which you can write all the java code for the application.


1. Look at the new project structure
	1. there are several maven modules set up 
	2. import these as modules in IntelliJ
	3. check out the 
2. fill in the servlet configuration with its beans
	1. find the file `mvc-dispatcher-servlet.xml` in the `rest-camunda` module
	2. Add all the necessary beans to configure our spring/hibernate/jackson environment
		* *look at the hints for this section to get the code snippets*
	3. Look at each bean configuration closely to understand the architecture
3. Create a run configuration with intellij to deploy the current maven build on a jetty server
	* *see hints for screenshots*
4. open browser on localhost:8080 and see if servlet has been deployed

    