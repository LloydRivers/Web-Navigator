// src/logger.ts

class Logger {
  static Log(message: string) {
    console.log(`INFO: ${message}`);
  }

  static Error(message: string) {
    console.error(`ERROR: ${message}`);
  }

  static Debug(message: string) {
    console.debug(`DEBUG: ${message}`);
  }
}

export default Logger;
