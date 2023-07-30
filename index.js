const path = require('path')

class Roop {

  async install(req, ondata, kernel) {

    // Clone repo
    await kernel.shell.run('git clone https://github.com/s0md3v/roop', {cwd: path.resolve(__dirname)})

    // Create and activate venv
    if (process.platform === 'win32') {
      await kernel.shell.run(`python -m venv env`, {cwd: path.resolve(__dirname, 'roop')})  
      await kernel.shell.enter('env\\Scripts\\activate.bat', {cwd: path.resolve(__dirname, 'roop')})
    } else {
      await kernel.shell.run(`python3 -m venv env`, {cwd: path.resolve(__dirname, 'roop')})
      await kernel.shell.enter('source env/bin/activate', {cwd: path.resolve(__dirname, 'roop')})
    }

    // Install requirements
    await kernel.pip.install('-r requirements.txt', {cwd: path.resolve(__dirname, 'roop')})

    // Notify success
    await kernel.input.form({
      title: 'Roop Installed',
      description: 'Installation complete! You can now run roop.'
    })

  }

  async run(req, ondata, kernel) {
    let args = req.params || {}
    if (process.platform === 'win32') {
      await kernel.python(path.resolve(__dirname, 'roop/run.py'), args, {cwd: path.resolve(__dirname)}) 
    } else {
      await kernel.python(path.resolve(__dirname, 'roop/run.py'), args, {cwd: path.resolve(__dirname)})
    }
  }

}

module.exports = Roop