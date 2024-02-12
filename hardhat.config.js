require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
};

task("remappings", "Outputs the remappings for the project").setAction(
  async (_, hre) => {
    const paths = hre.config.paths;
    const fs = require("fs");
    const path = require("path");

    const getDirectories = (srcPath) => {
      return fs
        .readdirSync(srcPath)
        .filter((file) => fs.statSync(path.join(srcPath, file)).isDirectory());
    };

    console.log(paths);

    const remappings = getDirectories(paths.sources).map((dir) => {
      const libPath = path.join(paths.sources, dir);
      return `${dir}=${libPath}`;
    });

    console.log(remappings.join("\n"));
  }
);
