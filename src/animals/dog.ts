import '../../src/animals';

// @ts-ignore
class Dog extends Animal{
    private fure: boolean = true;
    public isMutant: boolean;
    public tail:boolean = true;
    constructor(name, age = 0, healthLevel = 3200, stamina = 150, power = 20,
                paws = 4, eyes = 4, ears = 2, hearingAcuity: 300, isMutant = false) {
        super(name, age = 0, healthLevel, stamina, power, paws, eyes, );
        this.isMutant = isMutant;
    }

}