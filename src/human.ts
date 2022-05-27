import '../src/animals/dog';
import '../src/animals/cat';
import '../src/illness';

class Human {
    private name: string;
    private sex: boolean;
    private age: number;
    private stamina: number;
    private power: number;
    private healthLevel: number;
    private pet: Cat | Dog | null;
    private isIllness: boolean;
    public isDie: boolean;

    constructor(name, sex, age = 18, stamina = 50, power = 21, healthLevel = 5000) {
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
        let isIll = setInterval(()=> {
            this.healthLevel -= illness.lostPointsHealth;
            if (this.healthLevel<=0) {
                this.isDie = true;
                clearInterval(isIll);
            };
        }, illness.time);
    }

    getPet(pet: Animal) {
        this.pet = pet;
    }

    lostPet() {
        this.pet = null;
    }
}