# Chapter 3

**Task**: Connect to the raspberry pi and control your light using the native libraries in the project

1. Connect to the Raspberry Pi via SSH
2. cd to `~/applications/OC-IoT-Workshop-Sources/rc-switch-jni-wrapper/src`
3. perform a `make`
4. control the lights with the `send` application
	1. `sudo send 10110 10110 1`
		1. the first two parameters are the DIP switches, the third is the state (ON / OFF)

