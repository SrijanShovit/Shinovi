const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))  //requiring from function
const purgecss = require('gulp-purgecss')

//asterisk used to look for any file name in this folder or subfolder with this extension
function buildStyles(){
    return src('sasscustom/**/*.scss')   //relative path of source scss file
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html']})) //which files to look what css is being used and what not
        .pipe(dest('css'))      //dump into css folder after compiling sass to css

}

function watchTasks(){
    watch(['sasscustom/**/*.scss','*.html'],buildStyles)   //watch for changes in given file and then run the given function on chnage
}
//export and run a series of functions
exports.default = series(buildStyles, watchTasks);