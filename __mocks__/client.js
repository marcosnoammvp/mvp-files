const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="test">test</div>
</body>
</html>`);
global.document = dom.window.document;
global.window = dom.window;
