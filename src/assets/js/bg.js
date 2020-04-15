let bgFunc = {
    before(to, from, next) {
        let bodyDom = window.document.body;
        let note = {
            backgroundImage: "url(" + require("../../assets/img/bg.jpg") + ")"
        };
        // ...
        bodyDom.style.background = note.backgroundImage;
        bodyDom.style.display = "flex";
        bodyDom.style.justifyContent = "center";
        bodyDom.style.alignContent = "center";
        bodyDom.style.alignItems = "center";
        next();
    },
    Leave(to, from, next) {
        // ...
        window.document.body.style.background = "";
        next();
    }
}

export default bgFunc