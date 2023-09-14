import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/single-donation-page",
      name: "single-donation-page",
      component: () => import("../views/SingleDonationPage.vue"),
    },
    {
      path: "/the-final-donation-page",
      name: "the-final-donation-page",
      component: () => import("../views/TheFinalDonationPage.vue"),
    },
    {
      path: "/all-news",
      name: "all-news",
      component: () => import("../views/AllNews.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/campaigns",
      name: "campaigns",
      component: () => import("../views/Campaigns.vue"),
    },
    {
      path: "/affiliate",
      name: "affiliate",
      component: () => import("../views/Affiliate.vue"),
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/common-questions",
      name: "common-questions",
      component: () => import("../views/CommonQuestions.vue"),
    },
    {
      path: "/privacy-questions",
      name: "privacy-questions",
      component: () => import("../views/PrivacyQuestions.vue"),
    },
    {
      path: "/search-page",
      name: "search-page",
      component: () => import("../views/SearchPage.vue"),
    },
    {
      path: "/new-details",
      name: "new-details",
      component: () => import("../views/NewDetails.vue"),
    },
    {
      path: "/featured-videos",
      name: "featured-videos",
      component: () => import("../views/FeaturedVideos.vue"),
    },
    {
      path: "/Add_NGO",
      name: "Add_NGO",
      component: () => import("../views/Add_NGO.vue"),
    },
    {
      path: "/Customer_Dashboard",
      name: "Customer_Dashboard",
      component: () => import("../views/CustomerDashboard.vue"),
    },
    {
      path: "/Customer_CampaignCreate",
      name: "Customer_CampaignCreate",
      component: () => import("../views/Customer_CampaignCreate.vue"),
    },
    {
      path: "/Signin-user",
      name: "Signin-user",
      component: () => import("../views/Singin_user.vue"),
    },
    {
      path: "/Signup-user",
      name: "Signup-user",
      component: () => import("../views/Singup_user.vue"),
    },
    {
      path: "/Login_boss",
      name: "Login_boss",
      component: () => import("../views/Login_boss.vue"),
    },
    {
      path: "/Thanks_page",
      name: "Thanks_page",
      component: () => import("../views/Thanks_page.vue"),
    },
  ],
});

export default router;
