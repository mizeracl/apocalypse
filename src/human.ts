import '../src/animal';
import '../src/illness';

class Human {
    private name: string;
    private sex: boolean;
    private age: number;
    private stamina: number;
    private power: number;
    private healthLevel: number;
    private pet: Animal;
    private isIllness: boolean;

    constructor(name, sex, age, stamina, power, healthLevel) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.stamina = stamina;
        this.power = power;
        this.healthLevel = healthLevel;
    }

    lessHealth(impact){
        this.healthLevel - impact;
    }

    addHealth(impact) {
        this.healthLevel + impact;
    }

    setIllness(illness: Illness) {
        this.isIllness = true;
        this.healthLevel -= illness.lostPointsHealth;
        setInterval(()=> {this.healthLevel -= illness.lostPointsHealth}, illness.time);
    }




}