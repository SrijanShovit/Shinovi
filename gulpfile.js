const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))  //requiring from function

//asterisk used to look for any file name in this folder or subfolder with this extension
function buildStyles(){
    return src('shinovi/**/*.scss')   //relative path of source scss file
        .pipe(sass())
        .pipe(dest('css'))      //dump into css folder after compiling sass to css

}

function watchTasks(){
    watch(['shinovi/**/*.scss'],buildStyles)   //watch for changes in given file and then run the given function on chnage
}
//export and run a series of functions
exports.default = series(buildStyles, watchTasks);