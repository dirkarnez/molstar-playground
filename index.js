const pdfjsLib = require("pdfjs-dist");

const PAGE_NUMBER = 1;

pdfjsLib
.getDocument("ctn.pdf").promise
.then(pdfDocument => pdfDocument.getPage(PAGE_NUMBER))
.then(page => page.getTextContent())
.then(textContent => console.log(textContent.items.map(item => item.str).join("")))
.catch(e => {
    console.error(e);
});