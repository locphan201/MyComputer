// DOMAIN
const domainURL = "https://gameserver.locphan201.repl.co";

// VARIABLES
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const desktop = document.getElementById("desktop");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const numRows = 5
const numCols = 16
const appWidth = (screenWidth - 100) / numCols;
const appHeight = (screenHeight - 100) / numRows - 10;
var current_col = 0;
var current_row = 0;