import { Configuration as WebpackConfiguration } from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import * as Path from 'path';

const configuration:WebpackConfiguration = {
    mode:"development",
    entry:"./scripts/index.tsx",
    module: { 
        rules: [ { 
            test: /\.tsx?$/, 
            use: 'ts-loader', 
            exclude: /node_modules/, 
        }, ],
    }, 
    resolve: { 
        extensions: [ '.tsx', '.ts', '.js' ], 
    }, 
    output: { 
        filename: 'index.js', 
        path: Path.resolve(__dirname,"dist"), 
    }, 
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: Path.resolve(__dirname,"content"),
                to: Path.resolve(__dirname,"dist"),
            }]
        }) ],
    devServer: {
        contentBase: Path.resolve(__dirname,"dist"),
        port: 7531,
      },
    


};

export default configuration;