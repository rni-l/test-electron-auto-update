if (process.env.VITE_APP_VERSION === undefined) {
  const now = new Date;
  process.env.VITE_APP_VERSION = `${now.getUTCFullYear() - 2000}.${now.getUTCMonth() + 1}.${now.getUTCDate()}-${now.getUTCHours() * 60 + now.getUTCMinutes()}`;
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  directories: {
    output: 'dist',
    buildResources: 'buildResources',
  },
  files: [
    'packages/**/dist/**',
  ],
  extraMetadata: {
    version: process.env.VITE_APP_VERSION,
  },
  "build": {
    "win": {
      "target": ["msi","nsis"],        //安装包的格式，默认是"nsis"
      "icon": "build/icons/icon.ico"   //安装包的图标
    },
    
    // //"target"值"nsis"打包出来的就是exe文件
    // //nsis是windows系统安装包的制作程序，它提供了安装、卸载、系统设置等功能
    // //关于"nsis"的一些配置
    // "nsis": {                          
    //   "oneClick": false,               //是否一键安装，默认为true
    //   "language": "2052",              //安装语言，2052对应中文
    //   "perMachine": true,              //为当前系统的所有用户安装该应用程序
    //   "allowToChangeInstallationDirectory": true   //允许用户选择安装目录
    // }
  }
};

module.exports = config;
