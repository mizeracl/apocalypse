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

    randNumber(a){
        return Math.floor(Math.random() * a);
    }

    setMutant() {
        if (!this.isVaccine)
        {
            this.isMutant = true;
            const mutation = Math.floor(Math.random() * 7);
            switch (mutation) {
                case 1:
                    addHealth(this.randNumber(healthLevel));
                    break;
                case 2:
                    lessHealth(this.randNumber(healthLevel));
                    break;
                case 3:
                    this.fure = !this.fure;
                    break;
                case 4:
                    this.stamina += this.randNumber(this.stamina);
                    break;
                case 5:
                    this.stamina -= this.randNumber(this.stamina);
                    break;
                case 6:
                    this.power += this.randNumber(this.stamina);
                    break;
                case 7:
                    this.power += this.randNumber(this.stamina);
                    break;
                case 8:
                    this. tail = !this.tail;
                    break;
                case 9:
                    this.hearingAcuity -= this.randNumber(this.hearingAcuity);
                    break;
                case 10:
                    this.hearingAcuity += this.randNumber(this.hearingAcuity);
                    break;
                case 11:
                    this.paws -= this.randNumber(this.paws);
                    break;
                case 12:
                    this.paws += this.randNumber(this.paws);
                    break;
            }
        }
    }

}