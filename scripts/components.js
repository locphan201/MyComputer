// Windows
class Window {
    constructor() {
        this.html = document.createElement("div");
    }

    add_component(component) {
        this.html.appendChild(component);
    }
}

class App {
    constructor(jsonData) {
        this.title = jsonData["title"];
        this.icon = jsonData["icon"];
        this.window = new Window(jsonData["title"], jsonData["icon"]);
    }
}
class Folder extends App {
    constructor(title, icon="") {
        super({
            "title" : title,
            "icon" : icon || "https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
        });
        this.items = []
    }

    createWindow() {
        if (this.items.length == 0) {
            const pTag = document.createElement("p");
            pTag.textContent = "Empty Folder";
            this.window.add_component(pTag);
            return;
        }

        this.items.forEach(item => {
            const imgTag = document.createElement("img");
            imgTag.src = item.icon;
            this.window.add_component(imgTag);
        });
    }

    add_item(item) {
        this.items.push(item);
    }
}