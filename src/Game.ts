enum Plays {
    ROCK = 1,
    PAPER = 2,
    SCISSORS = 3
}

enum Result {
    WIN = 6,
    DRAW = 3,
    LOSE = 0
}

interface Round {
    enemy: Plays;
    player: Plays | Result;
}

class Game {
    private data: string[][] = [];
    private score: number = 0;

    constructor(data: string) {
        this.data = data.split('\n').map((round: string) => round.split(' '));

        this.handleData();
        console.log(this.score);

        this.score = 0;

        this.handleDataV2();
        console.log(this.score);
    }

    private handleData(): void {
        this.data.forEach((roundStr: string[]) => {
            const round: Round = {
                enemy: this.parsePlays(roundStr[0]),
                player: this.parsePlays(roundStr[1])
            };

            this.score += this.resolveResult(round) + round.player;

        });
    }

    private handleDataV2() {
        this.data.forEach((roundStr: string[]) => {
            const round: Round = {
                enemy: this.parsePlays(roundStr[0]),
                player: this.parseResult(roundStr[1])
            };

            this.score += this.resolvePlays(round) + round.player;
        });
    }

    private resolveResult(round: Round): Result {
        if(round.enemy === round.player) return Result.DRAW;

        if(round.enemy === Plays.ROCK) {
            if(round.player === Plays.SCISSORS) return Result.LOSE;
            if(round.player === Plays.PAPER) return Result.WIN;
        }

        if(round.enemy === Plays.PAPER) {
            if(round.player === Plays.ROCK) return Result.LOSE;
            if(round.player === Plays.SCISSORS) return Result.WIN;
        }

        if(round.enemy === Plays.SCISSORS) {
            if(round.player === Plays.PAPER) return Result.LOSE;
            if(round.player === Plays.ROCK) return Result.WIN;
        }

        return -1;
    }

    private resolvePlays(round: Round): Plays {
        if(round.player === Result.DRAW) return round.enemy;

        if(round.player === Result.LOSE) {
            if(round.enemy === Plays.ROCK) return Plays.SCISSORS;
            if(round.enemy === Plays.PAPER) return Plays.ROCK;
            if(round.enemy === Plays.SCISSORS) return Plays.PAPER;
        }

        if(round.player === Result.WIN) {
            if(round.enemy === Plays.ROCK) return Plays.PAPER;
            if(round.enemy === Plays.PAPER) return Plays.SCISSORS;
            if(round.enemy === Plays.SCISSORS) return Plays.ROCK;
        }

        return -1;
    }

    private parsePlays(char: string): Plays {
        if (char === 'A' || char === 'X') return Plays.ROCK;
        if (char === 'B' || char === 'Y') return Plays.PAPER;
        if (char === 'C' || char === 'Z') return Plays.SCISSORS;

        return -1;
    }

    private parseResult(char: string): Result {
        if (char === 'X') return Result.LOSE;
        if (char === 'Y') return Result.DRAW;
        if (char === 'Z') return Result.WIN;

        return -1;
    }
}

export default Game;
