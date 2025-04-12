const boardSize = 20;
const cellSize = 30;
let board = [];
let currentPlayer = 'X';
let gameEnded = false;

const boardDiv = document.getElementById("board");
const messageDiv = document.getElementById("message");

// Tạo mảng 2 chiều lưu trạng thái
for (let i = 0; i < boardSize; i++) {
    board[i] = [];
    for (let j = 0; j < boardSize; j++) {
        board[i][j] = '';
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.left = `${j * cellSize}px`;
        cell.style.top = `${i * cellSize}px`;
        cell.dataset.row = i;
        cell.dataset.col = j;
        boardDiv.appendChild(cell);
    }
}

// Sự kiện click
boardDiv.addEventListener("click", function (e) {
    if (gameEnded) return;
    const target = e.target;
    if (!target.classList.contains("cell")) return;

    const row = parseInt(target.dataset.row);
    const col = parseInt(target.dataset.col);

    if (board[row][col] !== '') return;

    board[row][col] = currentPlayer;
    target.innerText = currentPlayer;

    if (checkWin(row, col)) {
        messageDiv.innerText = `Người chơi ${currentPlayer} thắng!`;
        gameEnded = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

// Hàm kiểm tra thắng
function checkWin(row, col) {
    return (
        checkDirection(row, col, 0, 1) + checkDirection(row, col, 0, -1) + 1 >= 5 || // ngang
        checkDirection(row, col, 1, 0) + checkDirection(row, col, -1, 0) + 1 >= 5 || // dọc
        checkDirection(row, col, 1, 1) + checkDirection(row, col, -1, -1) + 1 >= 5 || // chéo /
        checkDirection(row, col, 1, -1) + checkDirection(row, col, -1, 1) + 1 >= 5    // chéo \
    );
}

// Hàm đếm số lượng ô giống nhau theo 1 hướng
function checkDirection(row, col, dx, dy) {
    let count = 0;
    let i = row + dx;
    let j = col + dy;
    while (
        i >= 0 && i < boardSize &&
        j >= 0 && j < boardSize &&
        board[i][j] === currentPlayer
        ) {
        count++;
        i += dx;
        j += dy;
    }
    return count;
}