///// 2975ff
//////////////////////////////////////////////////////////////

// MATH

/*
Math is Javascript is a literal object. No constructor, but initialized.
Adding method with Math.method rather than Math.prototype.method

*/



/*
static public final float sq(float a) {
	return a*a;
}
*/
Math.sq = function(a) {
	return a*a;
}


/*
static public final int constrain(int amt, int low, int high) {
  return (amt < low) ? low : ((amt > high) ? high : amt);
}
*/

Math.constrain = function(amt, low, high) {
  return (amt < low) ? low : ((amt > high) ? high : amt);
}




/*
static public final float degrees(float radians) {
  return radians * RAD_TO_DEG;
}
static final float DEG_TO_RAD = PI/180.0f;
 static final float RAD_TO_DEG = 180.0f/PI;
*/

Math.degrees = function(radians) {
  return radians * (180/Math.PI);
}


Math.radians = function(degrees) {
	return degrees*(Math.PI/180);
}


/*
static public final float mag(float a, float b) {
  return (float)Math.sqrt(a*a + b*b);
}
*/

Math.mag = function(a, b) {
  return Math.sqrt(a*a + b*b);
}

/*
static public final float dist(float x1, float y1, float x2, float y2) {
  return sqrt(sq(x2-x1) + sq(y2-y1));
}
*/

Math.dist = function(x1, y1, x2, y2) {
  return Math.sqrt(Math.sq(x2-x1) + Math.sq(y2-y1));
}




/*
static public final float lerp(float start, float stop, float amt) {
  return start + (stop-start) * amt;
}
*/

Math.lerp = function(start, stop, amt) {
  return start + (stop-start) * amt;
}


/**
 * Normalize a value to exist between 0 and 1 (inclusive).
 * Mathematically the opposite of lerp(), figures out what proportion
 * a particular value is relative to start and stop coordinates.
 */


/*
static public final float norm(float value, float start, float stop) {
  return (value - start) / (stop - start);
}
*/

Math.norm = function(value, start, stop) {
  return (value - start) / (stop - start);
}



/**
 * Convenience function to map a variable from one coordinate space
 * to another. Equivalent to unlerp() followed by lerp().
 */

/*
static public final float map(float value,
                              float istart, float istop,
                              float ostart, float ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}
*/

Math.map = function (value, istart, istop, ostart, ostop) {
	return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}



/*
static public final double map(double value,
                               double istart, double istop,
                               double ostart, double ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}
*/



/////////////////////////////////////////////////////////////