function templateHelper(name, sym, num, desc){
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Elements - Hydrogen</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <h1>${name}</h1>
  <h2>${sym}</h2>
  <h3>${num}</h3>
  <p>${desc}</p>
  <p><a href="/">back</a></p>
</body>
</html>
`}

module.exports = templateHelper