function findAndHighlight() {
    clear();

    let text = document.getElementById("search").value;

    let elements = document.querySelectorAll("p");
    
    for(let i = 0; i < elements.length; i++) {
        let paragraph = elements[i];
        paragraph.innerHTML = paragraph.innerHTML.replaceAll(text, '<span class="find">' + text + '</span>');
    }
}

function clear() {
    let elements = document.querySelectorAll("p");

    for(let i = 0; i < elements.length; i++) {
        let paragraph = elements[i];
        let text = paragraph.innerHTML;
        let startIndex = text.indexOf('<span class="find">');
        let endIndex = -1;

        if(startIndex === -1) continue;

        while(startIndex !== -1) {
            endIndex = text.indexOf('</span>', startIndex);
            let newText = text
                .substr(startIndex, endIndex - startIndex)
                .replace('<span class="find">', '')
                .replace('</span>');

            text = text.substr(0, startIndex) + newText + text.substr(endIndex + 7)

            startIndex = text.indexOf('<span class="find">');
            endIndex = -1;
        }

        paragraph.innerHTML = text;
    }
}