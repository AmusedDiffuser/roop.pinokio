const path = require('path')

class Roop {

  async install(req, ondata, kernel) {

    // Clone repo
    await kernel.shell.run('git clone https://github.com/s0md3v/roop', {cwd: path.resolve(__dirname)})
    
    // Create venv
    await kernel.shell.run('python -m venv env', {cwd: path.resolve(__dirname, 'roop')})

    // Activate venv
    if (process.platform === 'win32') {
      await kernel.shell.enter('env\\Scripts\\activate.bat', {cwd: path.resolve(__dirname, 'roop')})
    } else { 
      await kernel.shell.enter('source env/bin/activate', {cwd: path.resolve(__dirname, 'roop')})
    }

    // Install requirements
    await kernel.pip.install('-r requirements.txt', {cwd: path.resolve(__dirname, 'roop')})

  }

  //...other methods 

}
