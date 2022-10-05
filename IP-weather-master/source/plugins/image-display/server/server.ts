
import { Imports, RegisterFunction } from "./server_types";


export function setup (options: any, imports: Imports, register: RegisterFunction)
{
    let image_display = {
    };
    
    register (null, {
        image_display
    });
}