import { world, cat1, dog1 } from '../init';
class Game{

    moveLeft(){}
    moveRight(){}
    checkZone(){
        if (world.infected) {
            cat1.setIllness();
            dog1.setIllness();
            cat1.setMutant();
        }
    }

}