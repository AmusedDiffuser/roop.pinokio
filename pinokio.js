const path = require('path')
const { existsSync } = require('fs')

module.exports = {

  title: 'Roop',

  description: 'Deepfake face swapping for images and video',
  
  isInstalled: () => {
    return existsSync(path.resolve(__dirname, 'roop', 'env'))
  },

  update: () => {
    return 'update.json'
  },

  start: () => {
    if (module.exports.isInstalled()) {
      return 'run.json'
    }
  },

  menu: async (kernel) => {
    let installed = module.exports.isInstalled()
    if (installed) {
      return {
        html: "<i class='fa-solid fa-check'></i> Roop Installed",
        href: "run.json"  
      }
    } else {
      return {
        html: "<i class='fa-solid fa-arrow-down'></i> Install Roop",
        href: "install.json"
      }
    }
  }

}