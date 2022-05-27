import '../../src/animals';

// @ts-ignore
class Cat extends Animal{
    private fure: boolean = true;
    public isMutant: boolean;
    public tail:boolean = true;
    constructor(name, age = 0, healthLevel = 1200, stamina = 50, power = 10,
                paws = 4, eyes = 4, ears = 2, hearingAcuity: 300, isMutant = false) {
        super(name, age = 0, healthLevel, stamina, power, paws, eyes, );
        this.isMutant = isMutant;
    }

}