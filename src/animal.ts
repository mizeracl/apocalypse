import './illness';
class Animal {
    public name: string;
    private age: number;
    public healthLevel: any;
    private isIllness: boolean;
    public stamina: number;
    public power: number;
    public paws: number | null;
    public eyes: number | null;
    public ears: number | null;
    public hearingAcuity: number | null;
    public isVacсine: boolean = false;
    public isDie: boolean;

    constructor(name, age = 0, healthLevel, stamina, power, paws, eyes, ears, hearingAcuity) {
        this.name = name;
        this.age = age;
        this.healthLevel = healthLevel;
        this.stamina = stamina;
        this.power = power;
        this.paws = paws;
        this.eyes = eyes;
        this.ears = ears;
        this.hearingAcuity = hearingAcuity;
    }

    public lessHealth(impact){
        this.healthLevel - impact;
    }

    public addHealth(impact) {
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

    setVaccine(){
        this.isVacсine = true;
    }
}