class TicTacToe {
    constructor() {
        this.gameField = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentPlayerSymbol = 'x';

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] == null) {
                this.gameField[rowIndex][columnIndex] = this.currentPlayerSymbol;
            switch (this.currentPlayerSymbol){
                case 'x': this.currentPlayerSymbol = 'o';
                break;
                case 'o': this.currentPlayerSymbol = 'x';
                break;
            }
        }
        
    }

    isFinished() {
        if ((this.getWinner() !== null) || (this.isDraw() === true)) {
            return true;
        } else {
            return false;
        }

    }

    getWinner() {
        let winner = null;

        if ((this.gameField[0][0] == this.gameField[0][1]) && (this.gameField[0][1] == this.gameField[0][2]) && (this.gameField[0][0] != null)) { winner = this.gameField[0][0]; }
        if ((this.gameField[1][0] == this.gameField[1][1]) && (this.gameField[1][1] == this.gameField[1][2]) && (this.gameField[1][0] != null)) { winner = this.gameField[1][0]; }
        if ((this.gameField[2][0] == this.gameField[2][1]) && (this.gameField[2][1] == this.gameField[2][2]) && (this.gameField[2][0] != null)) { winner = this.gameField[2][0]; }
        if ((this.gameField[0][0] == this.gameField[1][0]) && (this.gameField[1][0] == this.gameField[2][0]) && (this.gameField[0][0] != null)) { winner = this.gameField[0][0]; }
        if ((this.gameField[0][1] == this.gameField[1][1]) && (this.gameField[1][1] == this.gameField[2][1]) && (this.gameField[0][1] != null)) { winner = this.gameField[0][1]; }
        if ((this.gameField[0][2] == this.gameField[1][2]) && (this.gameField[1][2] == this.gameField[2][2]) && (this.gameField[0][2] != null)) { winner = this.gameField[0][2]; }
        if ((this.gameField[0][0] == this.gameField[1][1]) && (this.gameField[1][1] == this.gameField[2][2]) && (this.gameField[0][0] != null)) { winner = this.gameField[0][0]; }
        if ((this.gameField[2][0] == this.gameField[1][1]) && (this.gameField[1][1] == this.gameField[0][2]) && (this.gameField[2][0] != null)) { winner = this.gameField[2][0]; }


        return winner;

    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            if (this.gameField[i].includes(null) == true) {
                return false;
            }
        }
        return true;

    }

    isDraw() {
        if ( ( this.noMoreTurns() === true) && (this.getWinner() === null)) {
            //console.log (this.gameField, this.noMoreTurns());
            return true;
        } else {
            //console.log (this.gameField, this.noMoreTurns());
            return false;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
