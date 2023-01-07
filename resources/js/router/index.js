import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";

const routes = [
    {
        // Design Done, Josue develop.
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/admin",
        meta: { isLayoutDisabled: true, requiredAdminAuth: true },
        component: () => import("../views/AdminLayaout.vue"),
        children: [
            {
                path: "",
                name: "AdminDashboard",
                component: () => import("../views/Admin/Dashboard.vue"),
            },
            {
                path: "product",
                name: "ProductManager",
                component: () => import("../views/Admin/ProductManager.vue"),
            },
            {
                path: "user",
                name: "UserManager",
                component: () => import("../views/Admin/UserManager.vue"),
            },
            {
                path: "register",
                name: "AdminRegister",
                component: () => import("../views/Admin/AdminRegister.vue"),
            },
        ],
    },
    {
        // Design done, Josue develop.
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        // Design pendant
        path: "/contact",
        name: "Contacto",
        component: () => import("../views/Contact.vue"),
    },
    {
        path: "/login",
        name: "AdminLogin",
        component: () => import("../views/Admin/Login.vue"),
        meta: { isLayoutDisabled: true },
    },
    {
        path: "/products",
        name: "Productos",
        component: () => import("../views/Products.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// Proteccion de rutas
router.beforeEach(async (to) => {
    if (!store.state.auth.isReady)
        await new Promise((r) => window.addEventListener("authready", r));

    const isAdmin = store.getters["auth/isLoggedIn"];

    if (!isAdmin && to.matched.some((route) => route.meta.requiredAdminAuth))
        return { name: "AdminLogin" };
});

export default router;
