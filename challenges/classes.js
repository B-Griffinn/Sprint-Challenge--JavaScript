/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker1{
    constructor(attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    };
//Methods live here
        volume() {
            return this.length * this.width * this.height;
        };
        surfaceArea() {
            return  2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        };
  };
 //OBJECT(s) 
  const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5, 
    height: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
/*
Volume for a cube formula =  length * width * height
Surface Area for a cube formula = 6 * (s^2)
 */


class CubeMaker extends CuboidMaker1{
    constructor(cubeAttrs){
        super(cubeAttrs);
    };
//Methods live here
    cubeVolume(){
        return this.length * this.width * this.height;
    };
    cubeSurfaceArea() {
        return 6 * (this.height * this.height);
    };
};

//OBJECT(s) 
const cube = new CubeMaker({
    length: 4,
    width: 5, 
    height: 3,
  });

console.log(cube.cubeVolume()); //60
console.log(cube.cubeSurfaceArea()); // 54