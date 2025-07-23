const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app/index.tsx", // Входная точка
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js", // Хеширование для кэширования
    clean: true, // Очистка папки dist перед сборкой
    publicPath: "/", // Для корректных путей в SPA
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Автоматическое разрешение расширений
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
    },
  },
  module: {
    rules: [
      // TypeScript + Babel
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Изображения
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // Шрифты
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Шаблон HTML
      favicon: "./public/favicon.ico", // Иконка
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    historyApiFallback: {
      disableDotRule: true,
      htmlAcceptHeaders: ["text/html"],
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    hot: true,
    open: true,
    compress: true,
    port: 3000,
  },
  performance: {
    hints: false, // Отключаем предупреждения о размере бандла
  },
};
