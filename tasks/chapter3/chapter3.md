# Chapter 3

**Task**: Build a Java Native Interface to control the plugs from a Java Application. All we need is be able to turn them ON and OFF with an arbitrary unit and group code (the way you configured your plugs).

1. Write the java side of the JNI code
	1. Open the java class file `NativeRCSwitchAdapter.java` in the `rc-switch-jni-wrapper` module
	2. load the java native libraries into the java application
	3. implement the method stubs for the native methods `switchOn`and `switchOff`
		* *Hint: a native interface method is of the form* `public native <returnValue> <methodName>(<parameters>);` 
		* *there is no method body, it will be in the native (C) code*
2. Compile the java class and create the C header files
	1. Open a terminal (or command line) window and switch to `<project_root>/rc-switch-jni-wrapper/src`
	1. compile the java class with `javac com/opitz/jni/NativeRCSwitchAdapter.java`
	2. create the C header file with `javah com.opitz.jni.NativeRCSwitchAdapter`
3. write the corresponding C code for our java native interface
	1. look at the newly created file `com_opitz_jni_NativeRCSwitchAdapter.h`
	2. create a file with the same name but the file extension `.cpp`
	3. Paste the code from the chapter 3 hints section in the file and complete the `switchOff` function to perform the desired functionality. You can use much of the code in the above `switchOn`function but try to understand what happens there. Native code is an important part to the IoT
4. Move your code to the raspberry pi and test run it
	1. open your raspberry pi via sftp (ssh based file transfer)
		1. This [Guide](http://trevorappleton.blogspot.de/2014/03/remotely-copy-files-to-and-from-your.html) for filezilla may help
	2. Transfer only the changed files to the raspberry pi
	3. compile the `Main.java` class in the adapter module
	4. run it from a command line with your DIP settings as parameters
		1. `java Main 11111 00000` for example
		2. check if your lamp switches on and off with a delay of two seconds




