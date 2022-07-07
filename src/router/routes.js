const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "/menu",
        name: "menu",
        component: () => import("pages/Menu.vue"),
      },
      {
        path: "/parcels",
        name: "parcels",
        component: () => import("pages/Parcels/Parcels.vue"),
      },
      {
        path: "/parcels/:id",
        name: "parcel-details",
        props: true,
        component: () => import("pages/Parcels/ParcelDetails.vue"),
      },
      {
        path: "/declarations",
        name: "declarations",
        component: () => import("pages/Declarations/Declarations.vue"),
      },
      {
        path: "/declarations/:id",
        name: "declaration-details",
        props: true,
        component: () => import("pages/Declarations/DeclarationDetails.vue"),
      },
      {
        path: "/declarations/update/:id",
        name: "update-declaration",
        component: () => import("pages/Declarations/UpdateDeclaration.vue"),
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("pages/Orders/Orders.vue"),
      },
      {
        path: "/orders/new",
        name: "new-order",
        component: () => import("pages/Orders/NewOrder.vue")
      }
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("pages/Login.vue"),
      },
      {
        path: "register",
        name: "registration",
        component: () => import("pages/Registration.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
