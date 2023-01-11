/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bounds extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bounds/costumes/costume1.svg", {
        x: 250.2402402402402,
        y: 190.18018018018014
      })
    ];

    this.sounds = [new Sound("pop", "./Bounds/sounds/pop.wav")];

    this.triggers = [];
  }
}
