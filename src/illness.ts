class Illness{
    private name:string;
    time: number;//время болезни
    lostPointsHealth: number;// потеря очков здоровья за единицу времени

    constructor(name, time, lostPointsHealth) {
        this.name = name;
        this.time = time;
        this.lostPointsHealth = lostPointsHealth;
    }
}

