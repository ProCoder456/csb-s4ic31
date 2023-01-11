/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.bVel = 0;
    this.vars.tilesize = 11;
    this.vars.furthestx = 0;
    this.vars.furthesty = 0;

    this.watchers.tilesize = new Watcher({
      label: "Tilesize",
      style: "normal",
      visible: true,
      value: () => this.vars.tilesize,
      x: 245,
      y: 175
    });
  }
}
