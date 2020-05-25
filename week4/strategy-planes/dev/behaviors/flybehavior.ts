namespace StrategyFinal {
    export interface FlyBehavior {
        move() : void
        getNextBehavior() : FlyBehavior
    }
}