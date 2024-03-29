import strings from '_localization';

class UserController {
  static async login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          resolve({ username });
        } else {
          reject(new Error(strings.login.invalidCredentials));
        }
      }, 500);
    });
  }

  static async logout() {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }

  static async forgotPassword() {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
}

export default UserController;
