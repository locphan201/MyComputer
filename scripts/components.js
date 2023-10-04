
// class App {
//     constructor(jsonData) {
//         this.title = jsonData["title"];
//         this.icon = jsonData["icon"];
//         this.window = new Window(jsonData["title"], jsonData["icon"]);
//     }
// }

function createFolderView(items) {
    if (items.length == 0) {
        const pTag = document.createElement("p");
        pTag.textContent = "Empty Folder";
        return pTag;
    }

    const view = document.createElement("div");
    items.forEach(item => {
        const itemTag = document.createElement("div");
        itemTag.className = "folder-item"

        const imgTag = document.createElement("img");
        imgTag.src = item.icon;

        const titleTag = document.createElement("p");
        titleTag.textContent = item.title;

        itemTag.appendChild(imgTag);
        itemTag.appendChild(titleTag);

        itemTag.addEventListener("dbclick", () => {
            console.log(item.items)
        });

        view.appendChild(itemTag);
    });
    return view;
}
