import { navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to) => {
    // if (!useAuth().isAuthenticated) {
    //     return navigateTo("/login");
    // }
    // if (useAuth().isAuthenticated && to.path === "/login") {
    //     return navigateTo("/dashboard");
    // }
});
