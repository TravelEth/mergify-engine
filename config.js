npm install --save \
    css-loader@5 \
    postcss-loader@4 \
    raw-loader@4 \
    style-loader@2 \
    webpack@5 \
    webpack-cli@4
// webpack.config.js

'use strict';

const path = require( 'path' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

module.exports = {
    // https://webpack.js.org/configuration/entry-context/
    entry: './app.js',

    // https://webpack.js.org/configuration/output/
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,

                use: [ 'raw-loader' ]
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,

                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: styles.getPostCssConfig( {
                                themeImporter: {
                                    themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                                },
                                minify: true
                            } )
                        }
                    }
                ]
            }
        ]
    },

    // Useful for debugging.
    devtool: 'source-map',

    // By default webpack logs warnings if the bundle is bigger than 200kb.
    performance: { hints: false }
};
npm install --save \
    @ckeditor/ckeditor5-dev-utils \
    @ckeditor/ckeditor5-editor-classic \
    @ckeditor/ckeditor5-essentials \
    @ckeditor/ckeditor5-paragraph \
    @ckeditor/ckeditor5-basic-styles \
    @ckeditor/ckeditor5-theme-lark
// app.js

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Paragraph, Bold, Italic ],
        toolbar: [ 'bold', 'italic' ]
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );

./node_modules/.bin/webpack --mode development
yarn run build
p@m /workspace/quick-start> ./node_modules/.bin/webpack --mode development
Hash: c96beab038124d61568f
Version: webpack 5.58.1
Time: 3023ms
Built at: 2022-03-02 17:37:38
        Asset      Size  Chunks             Chunk Names
    bundle.js  2.45 MiB    main  [emitted]  main
bundle.js.map  2.39 MiB    main  [emitted]  main
[./app.js] 638 bytes {main} [built]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 489 bytes {main} [built]
[./node_modules/webpack/buildin/harmony-module.js] (webpack)/buildin/harmony-module.js 573 bytes {main} [built]
    + 491 hidden modules


