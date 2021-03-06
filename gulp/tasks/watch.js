var gulp = require( 'gulp' ),
    config = require( '../config' );

gulp.task( 'watch', function(){
  gulp.watch( [ config.dev + 'scripts/*.js', config.dev + 'scripts/**/*.js' ], [ 'lint', 'scripts' ] );
  gulp.watch( [ config.dev + 'styles/*.styl' ], [ 'styles' ] );
  gulp.watch( [ config.dev + 'assets/**/*' ], [ 'assets' ] );
  gulp.watch( [ config.dev + 'pages/**/*.jade', config.dev + 'assets/**/*.json' ], [ 'pages' ] );
  gulp.watch( [ config.dev + 'assets/**/*.jade' ], [ 'scripts' ] );

});
