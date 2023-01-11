import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bounds from "./Bounds/Bounds.js";
import Maze from "./Maze/Maze.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Bounds: new Bounds({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Maze: new Maze({
    x: -6.123233995736766e-16,
    y: -3.552713678800501e-15,
    direction: 180,
    costumeNumber: 4,
    size: 83.33333333333334,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
