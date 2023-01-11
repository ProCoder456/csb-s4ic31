/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Maze extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Tile1", "./Maze/costumes/Tile1.svg", {
        x: 3.9090909090909065,
        y: 3.9090909090909065
      }),
      new Costume("Corridor", "./Maze/costumes/Corridor.svg", {
        x: 3.9090909090909065,
        y: 3.9090909090909918
      }),
      new Costume("Detector", "./Maze/costumes/Detector.svg", {
        x: -8.20629370629382,
        y: 3.9090909090909634
      }),
      new Costume("x", "./Maze/costumes/x.svg", {
        x: 2.7499999999999716,
        y: 2.6500000000000057
      })
    ];

    this.sounds = [new Sound("pop", "./Maze/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.furthestdistance = 0;
    this.vars.distance = 0;
  }

  *drawmaze() {
    this.costume = "Corridor";
    this.stamp();
    this.move(this.stage.vars.tilesize);
    this.vars.distance += 1;
    this.warp(this.tryDirectionsFrom)(this.direction);
    this.move(0 - this.stage.vars.tilesize);
    this.vars.distance += -1;
  }

  *tryDirectionsFrom(startDirection) {
    if (this.random(1, 2) == 1) {
      this.direction += 90 * this.random(-1, 1);
    }
    this.costume = "Detector";
    for (let i = 0; i < 4; i++) {
      if (
        !(
          this.touching(this.sprites["Bounds"].andClones()) ||
          this.touching(Color.rgb(253, 255, 113))
        )
      ) {
        yield* this.drawmaze();
      }
      this.direction += 90;
      yield;
    }
    this.direction = startDirection;
  }

  *recordDistance() {
    if (this.vars.distance > this.vars.furthestdistance) {
      this.vars.furthestdistance = this.vars.distance;
      this.stage.vars.furthestx = this.x;
      this.stage.vars.furthesty = this.y;
    }
  }

  *whenGreenFlagClicked() {
    this.clearPen();
    this.stage.vars.tilesize = 10;
    this.size = (100 / 12) * this.stage.vars.tilesize;
    this.goto(0, 0);
    this.direction = 90 * this.random(-1, 2);
    this.vars.furthestdistance = 0;
    this.vars.distance = 0;
    yield* this.drawmaze();
    this.costume = "x";
  }
}
