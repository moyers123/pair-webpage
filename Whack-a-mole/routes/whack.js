const html = require('html-template-tag')
module.exports = (upgrades) => html`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Whack-a-mole</title>
    <link rel="stylesheet" href="style.css"/>
    <script src="index.js" defer></script>
  </head>
  <body>
  <div class='left'>
  </div>
    <div class='terminal'>
      <h1 id="score">0</h1>
      <div id="whack-a-mole">
        <div class="hole"></div>
        <div class="hole"></div>
        <div class="hole"></div>
        <div class="hole"></div>
        <div class="hole"></div>
        <div class="hole"></div>
        <div class="hole"></div>
        <div class="hole"></div>
        <div class="hole"></div>
      </div>
    </div>
    <div class='right'>
    <-- upgrades -->
    </div>
  </body>
  </html>
`