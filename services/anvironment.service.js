require('dotenv').config()

class Environment{

  static hostName = process.cwd();

  static server(){
    
    if(this.hostName.includes('api.leibish.pit')) return 'dev';
    if(this.hostName.includes('api.stage.leibish.com')) return 'stage';
    if(this.hostName.includes('api.leibish.com')) return 'prod';
   
  }

  static isProduction(){
    return this.server() == 'prod';
  }

  static isdev(){
    return this.server() == 'dev';
  }

  static dbHost(){
    if (this.isdev()) return '192.168.11.128';
    return 'localhost';
  }

    static dbUserName(){
    if (this.isdev()) return 'root';
    return process.env.DB_USERNAME;
  }

  static dbPassword(){
    if (this.isdev()) return '';
    return process.env.DB_PASSWORD;
  }


}

module.exports = Environment;

