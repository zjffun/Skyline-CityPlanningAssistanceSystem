var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', () => {
  exec('rollup -c', function(err, stdout, stderr) {
    console.log(stderr);
  });
});

gulp.task('watch', () => {
  gulp.watch(['./src/js/*.js', './src/rollup.js', './app.js', './dapp.js'], ['build']);
})

gulp.task('start_app', () => {
  exec('node app', function(err, stdout, stderr) {
    console.log(stderr);
  });
  exec('node dapp', function(err, stdout, stderr) {
    console.log(stderr);
  });
  gulp.watch(['./app.js'], ['build']);
})

gulp.task('default', ['build', 'watch', 'start_app']);

