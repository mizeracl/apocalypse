import '../src/earthType';

class Earth {
    private type: EarthType;
    private area: number[];
    private infected: boolean;
    constructor(type: EarthType, area: number[], infected: boolean) {
        this.type = type;
        this.area = area;
        this.infected = infected;
    }
}