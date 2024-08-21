import chalk from "chalk";

export default {

    backend: (...args: unknown[]) => {
        console.log(
            `\x1b[37m[\x1b[34mBACKEND\x1b[0m\x1b[37m]`,
            ...args.map((arg) =>
                typeof arg === "string" ? chalk.gray(arg) : chalk.gray(JSON.stringify(arg)),
            ),
        );
    },

    debug(...messages: string[]) {
        console.log(`\x1b[37m[\x1b[36mDEBUG\x1b[0m\x1b[37m]`, ...messages);
    },

    auth(...messages: string[]) {
        console.log(`\x1b[37m[\x1b[31mAUTH\x1b[0m\x1b[37m]`, ...messages);
    },

    frontend(...messages: string[]) {
        console.log(`\x1b[37m[\x1b[35mFRONTEND\x1b[0m\x1b[37m]`, ...messages);
    },

    startup: (...args: unknown[]) => {
        console.log(
            ...args.map((arg) =>
                typeof arg === "string" ? chalk.gray(arg) : chalk.gray(JSON.stringify(arg)),
            ),
        );
    },

    error: (...args: unknown[]) => {
        console.log(
            chalk.bgRed(" ERROR "),
            ...args.map((arg) =>
                typeof arg === "string" ? chalk.gray(arg) : chalk.gray(JSON.stringify(arg)),
            ),
        );
    },
};