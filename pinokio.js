const path = require('path')
const { existsSync } = require('fs')
const { writeFileSync } = require('fs')

module.exports = {

  //...other functions  

  menu: async (kernel) => {

    let menuObject

    try {

      let installed = module.exports.isInstalled()

      if (installed) {
        menuObject = {
          html: "<i class='fa-solid fa-check'></i> Roop Installed",
          href: "run.json"
        }
      } else {
        menuObject = {
          html: "<i class='fa-solid fa-arrow-down'></i> Install Roop",
          href: "install.json"
        }
      }

    } catch (err) {
      console.error('Error generating menu', err)
    }
    
    // Log menu object
    writeFileSync('pinokio-menu.log', JSON.stringify(menuObject))

    return menuObject

  }

}
