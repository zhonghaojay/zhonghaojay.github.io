var spawn = require('child_process').spawn;

// Hexo 2.x
hexo.on('new', function(path){
    spawn('open -a "/Applications/MWeb.app" ' + data.path);
});