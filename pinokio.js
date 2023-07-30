module.exports = {
  title: "roop",
  description: "One click face-swap GUI",
  icon: "icon.png",
  update: async (kernel) => {
    return "update.json"
  },
  menu: [{
    html: '<i class="fa-solid fa-microchip"></i> Install',
    href: "install.json"
  }, {
    html: '<i class="fa-solid fa-rocket"></i> Launch',
    href: "start.json"
  }]
}
