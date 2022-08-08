# Rockstar Games Service Status
Get the Rockstar Games Service Status (for GTA Online, RDRO, and Social Club) easier with this package

Revised version of [Androz2091's package](https://github.com/Androz2091/rockstar-games-status), but with promises

### Usage
```js
const { getStatus } = require("./index.js")

getStatus()
  .then(statuses => {
    console.log(statuses)
  })
```
Expected result: `{redDeadOnline: {…}, gtaOnline: {…}, socialClub: {…}, launcher: {…}, lastUpdated: {…}} . . .`


### Previews
![image](https://user-images.githubusercontent.com/107329072/182990952-838df6da-2600-4865-a108-1a6053d57cdd.png)

![image](https://user-images.githubusercontent.com/107329072/182990869-2d185f87-d8aa-42dc-becd-9eda2ce85237.png)

