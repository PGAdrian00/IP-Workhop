import { Imports, RegisterFunction } from "./ui_types";
import Images from "./views/Images.vue";
import { RouteConfig } from "vue-router";

import Cmp from "./views/Cmp.vue";

export function setup (options: any, imports: Imports, register: RegisterFunction)
{
    let routes:RouteConfig[] = [];

    let image_display = {};

    
    imports.application.registerView(Cmp);


    imports.workspace.registerWorkspaceRoutes ([{
        path: '/images',
        component: Images
    }]);

    register (null, {
        image_display
    });
}