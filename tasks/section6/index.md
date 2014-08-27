# section 6

**Task**:  Create the REST Services for the Spring Application to manage users as well as simple Switches

*The classes are already there, so fill their methods (with some dummy return values) and annotate them correctly*

* annotate the methods in `SwitchController.java`and return some dummy values
	* [ ] activate
	* [ ] deactivate
	* [ ] getAll
	* [ ] create
	* [ ] deleteNetworkNode
* annotate the methods in `UserController.java`and return some dummy values
    * [ ] setUserState
	* [ ] create
	* [ ] update
	* [ ] delete
	* [ ] getAllDevices
	* [ ] getAll
	* [ ] findByUsername
* Run server
	* `mvn package`
	* run jetty
* call some of your methods and see if you get the values returned you set as dummy values
	* use the IntelliJ REST Client to test your methods
	* If you get the values returned you set up in the java code, you have created a REST service!

*You can expect such output when starting your jetty if your rest service were mapped successfully*

```bash

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches/{id}],methods=[DELETE],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public void com.opitz.iotprototype.controller.SwitchController.delete(java.lang.Integer)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches],methods=[POST],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.ElroPowerPlug com.opitz.iotprototype.controller.SwitchController.create(com.opitz.iotprototype.entities.ElroPowerPlug)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches/activate/{id}],methods=[PUT],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.ElroPowerPlug com.opitz.iotprototype.controller.SwitchController.activate(java.lang.Integer)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches/deactivate/{id}],methods=[PUT],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.ElroPowerPlug com.opitz.iotprototype.controller.SwitchController.deactivate(java.lang.Integer)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/switches],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.util.List<com.opitz.iotprototype.entities.ElroPowerPlug> com.opitz.iotprototype.controller.SwitchController.getAll()

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users],methods=[PUT],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.User com.opitz.iotprototype.controller.UserController.update(com.opitz.iotprototype.entities.User)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users/{userID}],methods=[DELETE],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public boolean com.opitz.iotprototype.controller.UserController.delete(java.lang.Integer)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users],methods=[POST],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.User com.opitz.iotprototype.controller.UserController.create(com.opitz.iotprototype.entities.User)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users/{username}/state/{setState}],methods=[PUT],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.String com.opitz.iotprototype.controller.UserController.setUserState(java.lang.String,java.lang.String)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users/devices],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.util.HashMap<java.lang.String, java.lang.String> com.opitz.iotprototype.controller.UserController.getAllDevices()

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users/username/{username}],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public com.opitz.iotprototype.entities.User com.opitz.iotprototype.controller.UserController.findByUsername(java.lang.String)

Aug 26, 2014 1:51:25 PM org.springframework.web.servlet.handler.AbstractHandlerMethodMapping registerHandlerMethod
INFORMATION: Mapped "{[/service/users],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.util.List<com.opitz.iotprototype.entities.User> com.opitz.iotprototype.controller.UserController.getAll()

```
