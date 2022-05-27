import {Animal} from 'src/animal';
import { Earth } from 'src/earth';
import { EarthType } from 'src/earthType';
import { Game } from 'src/game';
import { Human } from 'src/human';
import { illness } from 'src/illness';

import { Dog } from 'src/animals/dog';
import { Cat } from 'src/animals/cat';

import { SEX, EARTH_TYPE } from 'src/const';

function createWorld() {

    const earth = new EarthType(EARTH_TYPE[Math.floor(Math.random() * EARTH_TYPE.length)], 10, 10);
    const world = new Earth(earth, [3,5], true);

    let сat1 = new Cat("Мурка");
    let dog1 = new Dog('Бобик');
    let human1 = new Human('Иван', SEX[0])

}

createWorld();