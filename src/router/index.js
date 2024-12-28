import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContributeView from "../views/ContributeView.vue";
import CookieSettingsView from "../views/CookieSettingsView.vue";
import ContributeSubmissionView from "../views/ContributeSubmissionView.vue";
import TeamMemberView from "../views/TeamMemberView.vue";
import IndependentCategoryView from "../views/IndependentCategoryView.vue";
import AnnaulThemeView from "@/views/AnnaulThemeView.vue";
import CelebratingIconsView from "@/views/CelebratingIconsView.vue";
import MemoryLuminariesView from "@/views/MemoryLuminariesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about/story",
      name: "about",
      component: AboutView,
    },
    {
      path: "/magazine",
      name: "contribute",
      component: ContributeView,
    },
    {
      path: "/magazine/topics",
      name: "independentCategory",
      component: IndependentCategoryView,
    },
    {
      path: "/magazine/theme",
      name: "annualTheme",
      component: AnnaulThemeView,
    },
    {
      path: "/magazine/celebration",
      name: "annualCelebration",
      component: CelebratingIconsView,
    },
    {
      path: "/magazine/memory",
      name: "obituary",
      component: MemoryLuminariesView,
    },

    {
      path: "/cookie-settings",
      name: "cookie",
      component: CookieSettingsView,
    },
    {
      path: "/about/team",
      name: "team-members",
      component: TeamMemberView,
    },
    {
      path: "/submission-form/:topicName?",
      name: "submission",
      component: ContributeSubmissionView,
      props: true,
    },
  ],
  // When you route to any page it will take you to the top of the page
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top of the page on navigation
    return { top: 0, left: 0 };
  },
});

export default router;
