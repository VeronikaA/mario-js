
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
   // console.log("Uh oh... the pyramid is under construction.");
   //console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(5) {

  for (i= 0;i < height; i++) {
         str = " ";
  for (j = 0; j < height; j ++){
         str  += " ";  // counts spaces

    }
    for (k = 0; k < i +2; k ++) {

            str += "#";  // counts hashes

     }

         console.log (str);
     }
}


