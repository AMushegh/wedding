import { defineConfig } from "vite";
import { resolve, extname } from "path";
import { readdirSync } from "fs";

const getPages = () => {
  const files = readdirSync(resolve(__dirname));
  const htmlFiles = files.filter((file) => extname(file) === ".html");

  const pages = htmlFiles.reduce((acc, fileName) => {
    acc[fileName.replace(".html", "")] = resolve(__dirname, fileName);
    return acc;
  }, {});

  console.log(pages);
  return pages;
};

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hy: "/hy/index.html",
      },
    },
  },
});
