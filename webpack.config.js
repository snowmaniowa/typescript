module.exports = {
    
    entry: './src/app.ts',  //# this is our entry file

    output: {
        filename: 'app.js.',        //# where to place the compiled output file
        path: __dirname + './dist'  //# path of the directory to keep the compiled output file
    },
    resolve: {
        extensions: ['.ts', '.js']  //# tell webpack what to resolve
    },
    module: {
        rules: [                    //# setup array of rules for compilation
            {   
                test: /\.ts$/,                      //# look for ts files
                use: 'awesome-typescript-loader'    //# look for ts loader package
            }
        ]
    },
    devServer: {
        port: 3000
    }
};