# Ragnarok Dungeons
This is the repository for the 2D Top-down RPG Game "Ragnarok Dungeons". 

### Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

### Available Commands

| Command           | Description                                                                       |
|---------          |-------------                                                                      |
| `npm install`     | Install project dependencies                                                      |
| `npm run dev`     | Build project and open web server running project, watching for changes           |
| `npm run build`   | Builds code bundle with production settings (minification, no source maps, etc..) |

### Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm run watch`. The first time you run this you should see the following demo run:

After starting the development server with `npm run dev`, you can edit any files in the `src` folder
and Rollup will automatically recompile and reload your server (available at `http://localhost:42069`
by default).

### Configuring Webpack

* Edit the file `webpack.config.js` to edit the development build.

Note that due to the build process involved, it can take around 20 seconds to build the initial bundle. Times will vary based on CPU and local drive speeds. The development config does not minify the code in order to save build time, but it does generate source maps. If you do not require these, disable them in the config to speed it up further.