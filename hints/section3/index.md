# section 3

## Code for com_opitz_jni_NativeRCSwitchAdapter.cpp

```cpp
#include "com_opitz_jni_NativeRCSwitchAdapter.h"
#include "RCSwitch.h"
#include <stdio.h>
#include <stdlib.h>

#include <iostream>
#include <wiringPi.h>

using namespace std;

RCSwitch mySwitch = RCSwitch();


JNIEXPORT void JNICALL Java_com_opitz_jni_NativeRCSwitchAdapter_switchOn(JNIEnv * env, jobject obj, jstring jsGroup, jstring jsChannel ){

    // checking wiringPi Setup
    if (wiringPiSetup () == -1) {
       printf("noWiringPiSetup");
    }

    //extracting the parameter char arrays from the JNIEnv
    const char *csGroup = env->GetStringUTFChars(jsGroup, 0);
    const char *csChannel = env->GetStringUTFChars(jsChannel, 0);

    //creating non-constant char arrays and copying the values
    char sGroup[6];
    char sChannel[6];

    for (int i = 0; i<5; i++) {
        sGroup[i] = csGroup[i];
        sChannel[i] = csChannel[i];
    }

    // C string termination
    sGroup[5] = '\0';
    sChannel[5] = '\0';


    cout<<"ON with"<<sGroup<<"and "<< sChannel <<endl;

    //setting program to real time scheduling at high priority. We create the radio wave modulation sequences within our code so we need real time
    piHiPri(20);
    //for testing purposes set to the ELRO Power Plugs
    mySwitch.setPulseLength(300);
    mySwitch.enableTransmit(0);
    mySwitch.setRepeatTransmit(3);

    mySwitch.switchOn(sGroup, sChannel);

	//releases the utf and informs the JVM about it
    env->ReleaseStringUTFChars(env, jsGroup, csGroup);
    env->ReleaseStringUTFChars(env, jsChannel, csChannel);

}

JNIEXPORT void JNICALL Java_com_opitz_jni_NativeRCSwitchAdapter_switchOff(JNIEnv * env, jobject obj, jstring jsGroup, jstring jsChannel ){
    if (wiringPiSetup () == -1) {
            printf("noWiringPiSetup");
    }

// TODO implement equivalent to above ON Method but turning the plug OFF instead
// the method is mySwitch.switchOff
}
```