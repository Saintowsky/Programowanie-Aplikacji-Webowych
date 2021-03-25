import {Animal} from '../src/animal';
import {Snake} from '../src/snake';
import {Horse} from '../src/horse';


let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);