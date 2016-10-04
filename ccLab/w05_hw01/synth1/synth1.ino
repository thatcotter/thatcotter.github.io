
#include "volume2.h"
Volume vol;
#define photoPin A0;

int photocell;
int photwocell;
int loudness;

void setup() {
  pinMode( A0, INPUT );
}

void loop() {

  photocell = (analogRead(A0));
  photwocell = (analogRead(A1));

  loudness = map( photwocell, 0, 1024, 0, 300 );

//  vol.tone(440, SQUARE, 255); // 100% Volume
//  vol.delay(1000);
//  vol.tone(440, SQUARE, 192); // 75% Volume
//  vol.delay(1000);
//  vol.tone(440, SQUARE, 128); // 50% Volume
//  vol.delay(1000);
//  vol.tone(440, SQUARE, 64); // 25% Volume
//  vol.delay(1000);
  
  vol.tone(photocell, SQUARE, loudness); // 12.5% Volume
//  vol.delay(500);
}
