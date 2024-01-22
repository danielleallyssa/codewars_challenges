// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`

class Block {
  constructor(array) {
    this.width = array[0];
    this.length = array[1];
    this.height = array[2];
  }

  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    return this.height * this.width * this.length;
  }
  getSurfaceArea() {
    return (
      2 *
      (this.height * this.width +
        this.width * this.length +
        this.length * this.height)
    );
  }
}
