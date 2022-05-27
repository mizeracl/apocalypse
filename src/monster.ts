import '../src/animals/dog';
import '../src/animals/cat';
import '../src/illness';

class Human {
    private stamina: number;
    private power: number;
    private healthLevel: number;
    private isAgressive: boolean;
    public isDie: boolean;

    constructor(stamina = 30, power = 7, isAgressive, healthLevel = 2000) {
        this.stamina = stamina;
        this.power = power;
        this.isAgressive = isAgressive
        this.healthLevel = healthLevel;
    }

    lessHealth(impact){
        this.healthLevel - impact;
        if (this.healthLevel<=0) {
            this.isDie = true;
        };
    }

    addHealth(impact) {
        this.healthLevel + impact;
    }

    checkDie() {
        return this.isDie
    }
}