import { safeParseInt } from "./common";

export function expectEnvExists(envName: string): string {
    if (!process.env[envName]) {
        throw new Error(`Expected environment variable ${envName} to exist!`);
    }

    return process.env[envName]!;
}

export function expectIntEnvExists(envName: string, dfltVal?: number): number {
    const value = process.env[envName];
    if (value == null) {
        if (dfltVal == null) {
            throw new Error(`Expected environment variable ${envName} to exist!`);
        }

        return dfltVal;
    }

    const parsed = safeParseInt(value);
    if (parsed == null) {
        throw new Error(`Expected environment variable ${envName} to be an integer!`);
    }

    return parsed;
}
