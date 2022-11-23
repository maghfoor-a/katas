/*
What the board looks like:

1       2       3

4       5       6

7       8       9


possible ways of winning:

123
456
789
147
258
369
159
359

if either of those numbers have ONLY the values of either X OR O, then they win.

come back to this later
*/
interface BoardState {
    1: 'X'|'O'| '',
    2: 'X'|'O'| '',
    3: 'X'|'O'| '',
    4: 'X'|'O'| '',
    5: 'X'|'O'| '',
    6: 'X'|'O'| '',
    7: 'X'|'O'| '',
    8: 'X'|'O'| '',
    9: 'X'|'O'| '',
}

interface WinState {
    winner: 'X won!'| 'O won!'|'Draw!'
}


function calcWinState(boardState: BoardState): WinState {
    const winnerResult: WinState = {winner: 'X won!'} 


    return winnerResult
}