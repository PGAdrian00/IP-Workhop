/** This file is automatically generated by webpack plugins, no not edit
 *
 * In server/server.ts, import this file
 * import { Imports, RegisterFunction } from "./server_types";
 */

import { image_display } from "./server_exports";
export * from "./server_exports";

export interface Imports
{
}


export interface Exports
{
	image_display: image_display;
}

export type RegisterFunction = (error: null | Error, provides: Exports) => void;
