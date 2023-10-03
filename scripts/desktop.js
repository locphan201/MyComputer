const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const numRows = 5
const numCols = 16

const appWidth = (screenWidth - 100) / numCols;
const appHeight = (screenHeight - 100) / numRows - 10;

var current_col = 0;
var current_row = 0;

class Computer {
    constructor() {
        this.desktop = [new Folder(
            "My Computer",
            "https://i.pinimg.com/originals/71/c4/14/71c41419a3a25b09742aaf3dc648bb11.png"
        )];
        this.window = document.getElementById("desktop");
        this.initWindow();
    }

    initWindow() {
        this.desktop.forEach(app => {
            const appDiv = document.createElement("div");
            appDiv.className = "app";

            const appIcon = document.createElement("img");
            appIcon.classList = "desktop-app-icon";
            appIcon.src = app.icon;

            const appTitle = document.createElement("p");
            appTitle.className = "desktop-app-title";
            appTitle.textContent = app.title;

            appDiv.appendChild(appIcon);
            appDiv.appendChild(appTitle);

            appDiv.style.width = `${appWidth}px`;
            appDiv.style.height = `${appHeight}px`;
            appDiv.style.position = "absolute";
            appDiv.style.left = `${(appWidth + 15) * current_col + 15}px`;
            appDiv.style.top = `${(appHeight + 20) * current_row + 20}px`;

            current_row++;
            if (current_row >= numRows) {
                current_col++;
                current_row = 0;
            }

            appDiv.addEventListener('dblclick', () => {
                this.allOnBackground();
                if (!document.getElementById(app.title.toLowerCase().replace(" ", "-"))) {
                    this.createAppWindow(app);
                } else {
                    document.getElementById(app.title.toLowerCase().replace(" ", "-")).style.display = "block";
                }
            }) 
            this.window.appendChild(appDiv);
        })
    }

    allOnBackground() {
        const allAppWindows = document.getElementById("window").getElementsByClassName("app-window");
        Array.from(allAppWindows).forEach(window => {
            window.style.display = "none";
        })
    }

    createAppWindow(app) {
        // Create window
        const app_window = document.createElement("div");
        app_window.className = "app-window";
        app_window.id = app.title.toLowerCase().replace(" ", "-");

        const window_bar = document.createElement("div");
        window_bar.className = "window-bar";

        // Left components
        const window_bar_left = document.createElement("div");
        window_bar_left.className = "window-bar-left";

        const window_icon = document.createElement("img");
        window_icon.src = app.icon;

        const window_title = document.createElement("span");
        window_title.textContent = app.title;

        window_bar_left.appendChild(window_icon);
        window_bar_left.appendChild(window_title);

        // Right components
        const window_bar_right = document.createElement("div");
        window_bar_right.className = "window-bar-right";

        const window_minimize_btn = document.createElement("span");
        window_minimize_btn.className = "window-btn";
        window_minimize_btn.innerHTML = "&#10134;";
        window_minimize_btn.addEventListener("click", () => {
            app_window.style.display = "none";
        });

        const window_close_btn = document.createElement("span");
        window_close_btn.className = "window-btn";
        window_close_btn.innerHTML = "&#10006;";
        window_close_btn.addEventListener("click", () => {
            document.getElementById(app.title.toLowerCase().replace(" ", "-")).remove();
            document.getElementById("toolbar-" + app.title.toLowerCase().replace(" ", "-")).remove();
        });

        window_bar_right.appendChild(window_minimize_btn);
        window_bar_right.appendChild(window_close_btn);

        // Combine together
        window_bar.appendChild(window_bar_left);
        window_bar.appendChild(window_bar_right);

        app_window.appendChild(window_bar)

        // Append app content
        //

        document.getElementById("window").appendChild(app_window);

        // Create icon on toolbar
        const toolbar_app_icon = document.createElement("img");
        toolbar_app_icon.src = app.icon;
        toolbar_app_icon.className = "toolbar-app-icon";
        toolbar_app_icon.id = "toolbar-" + app.title.toLowerCase().replace(" ", "-");
        toolbar_app_icon.addEventListener("click", () => {
            app_window.style.display = "block";
        });

        document.getElementById("on-running").appendChild(toolbar_app_icon);
    }
}

var myComputer = new Computer();