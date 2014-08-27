# section 7

**Task**: Update the Spring Service `ElroPowerPlugServiceImpl` so it uses the JNI adapter and controls our plugs when the REST service is called

*Note: all other methods neccessary in the services have been provided to you. This is since they basically do CRUD operations as well as some constraint checking when deleting ressources*

1. implement the method: `ElroPowerPlug setState(ElroPowerPlug elroPowerPlug, boolean state)` 
	1. Use the JNI to control the lights
	2. Update our common domain ressources in the DB using the DAO provided
2. Connect our `SwitchController` to the `ElroPowerPlugService` using Springs Dependency injection
	1. Inject Service
	2. call the appropriate methods of the service from the controller
3. Connect our `UserController` to the `UserService` using Springs Dependency Injection
	1. Inject Service
	2. call the appropriate methods of the service from the controller
4. Test if you rest service now controls your light
