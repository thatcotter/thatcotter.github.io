
#include "volume2.h"
Volume vol;

int photocell;
int photwocell;
int loudness;

void setup() {
  pinMode( A0, INPUT );
  pinMode( A1, INPUT );
}

void loop() {

  photocell = (analogRead(A0));
  photwocell = (analogRead(A1));

  loudness = map( photwocell, 0, 1024, 0, 300 );
  
  vol.tone(photocell, SQUARE, loudness);
//  vol.delay(500);
}
