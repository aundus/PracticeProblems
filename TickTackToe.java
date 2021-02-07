import java.util.Scanner;

/*
    Simple tick tack toe class that plays a single game of tick tack toe through the console.
*/
class TickTackToe {
    private char turn;
    private char[][] board;
    private boolean gameOver;
    private int numTurns;
    private Scanner in = new Scanner(System.in);

    public TickTackToe() {
        this.board = new char[3][3];
        for (int i = 0; i < this.board.length; i++) {
            for (int j = 0; j < this.board.length; j++) {
                this.board[i][j] = '_';
            }
        }
        this.turn = 'X';
        this.gameOver = false;
        this.numTurns = 0;
    }

    private void printBoard() {
        String str = "";
        for (char[] row : this.board) {
            str += "|";
            for (int i = 0; i < row.length; i++) {
                if (i == row.length - 1) {
                    str += row[i] + "|\n";
                } else {
                    str += row[i] + "|";
                }
            }
        }
        System.out.println(str);
    }

    private boolean checkWin() {
        for (int i = 0; i < this.board.length; i++) {
            if (this.board[i][0] == this.turn && this.board[i][1] == this.turn && this.board[i][2] == this.turn) {
                return true;
            }
            if (this.board[i][0] == this.turn && this.board[i][1] == this.turn && this.board[i][2] == this.turn) {
                return true;
            }
        }
        if (this.board[0][0] == this.turn && this.board[1][1] == this.turn && this.board[2][2] == this.turn) {
            return true;
        }
        if (this.board[2][0] == this.turn && this.board[1][1] == this.turn && this.board[0][2] == this.turn) {
            return true;
        }
        return false;
    }

    public void runGame() {
        while (!this.gameOver) {
            System.out.println(
                    "It's " + this.turn + "'s turn! Enter coordinates of where you'd like to play in the format x,y");
            // read
            String input = in.nextLine();
            String coords[] = input.split(",");
            int x, y;
            try {
                x = Integer.parseInt(coords[0]);
                y = Integer.parseInt(coords[1]);
            } catch (Exception e) {
                System.out.println("Please provide a valid set of coordinates.");
                continue;
            }
            if (x < 0 || x > 2 || y < 0 || y > 2) {
                System.out.println("Please provide a valid set of coordinates.");
                continue;
            }

            if (this.board[x][y] == '_') {
                this.board[x][y] = this.turn;
                this.numTurns++;
            } else {
                System.out.println("That coordinate has already been played.");
                continue;
            }
            this.printBoard();
            if (checkWin()) {
                System.out.println("Congratulations, " + this.turn + " wins!");
                this.gameOver = true;
            } else if (numTurns == 9) {
                System.out.println("This game was a tie!");
                this.gameOver = true;
            }
            this.turn = this.turn == 'X' ? 'O' : 'X';
        }
    }

}