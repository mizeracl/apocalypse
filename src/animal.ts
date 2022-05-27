import './illness';
class Animal {
    public name: string;
    private age: number;
    private healthLevel: any;
    private isIllness: boolean;
    private stamina: number;
    private power: number;
    private paws: number | null;
    private eyes: number | null;
    public ears: number | null;
    public hearingAcuity: number | null;
    public isDie: boolean;

    constructor(name, age = 0, healthLevel, stamina, power, paws, eyes, ears) {
        this.name = name;
        this.age = age;
        this.healthLevel = healthLevel;
        this.stamina = stamina;
        this.power = power;
        this.paws = paws;
        this.eyes = eyes;
        this.ears = ears;
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
}