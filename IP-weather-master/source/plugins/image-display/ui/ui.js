import Images from "./views/Images.vue";
export function setup(options, imports, register) {
    let routes = [];
    let image_display = {};
    imports.workspace.registerWorkspaceRoutes([{
            path: '/images',
            component: Images
        }]);
    register(null, {
        image_display
    });
}
