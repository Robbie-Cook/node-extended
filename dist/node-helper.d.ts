/**
 * A collection of node helper functions
 */
/**
 * Execute a command
 *
 * @param command
 */
declare function execute(command: string): Promise<string>;
/**
 * Read input from the user
 *
 * @param input
 * @returns {Promise<string>}
 */
declare function input(input: string): Promise<string>;
/**
 * Whether the user accepted the input
 *
 * @param input
 */
declare function isAnswerYes(input: string): boolean | null;
/**
 * Fetch a file from an endpoint
 *
 * @param endpoint
 * @param bearerToken
 */
declare function fetchFile(endpoint: string, bearerToken?: string): Promise<ArrayBuffer>;
declare const _default: {
    execute: typeof execute;
    isAnswerYes: typeof isAnswerYes;
    input: typeof input;
    fetchFile: typeof fetchFile;
};
export default _default;
