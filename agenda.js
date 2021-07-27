`use strict`

window.addEventListener('load', (event) => {
    // Init app.
    // TODO: Add to an 'app' file.
    document.body.innerHTML += `
        <div class="app-container">
            <div class="fake-rounded-corners">
            </div>
        </div>
    `
    var appRootEl = document.getElementsByClassName(`fake-rounded-corners`)[0]

    // ...
    scaffold(appRootEl, navBar(),,)
})


// UI.
// TODO: Add to a UI library file.

class Scaffold {
    constructor(parentEl, navBar, contentEl, optBottomBar) {
        let scaffoldEl = document.createElement(`DIV`)
        scaffoldEl.classList.add(`scaffold`)
        parentEl.appendChild(scaffoldEl)
    
        return this
    }
}

class NavBar {
    constructor(leftEls, titleEl, rightEls, expandable) {
        this.expandable = expandable
        return this
    }
}