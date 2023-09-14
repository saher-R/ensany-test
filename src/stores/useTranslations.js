import { ref, computed, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import {
  NavBar_Translations,
  Footer_Translations,
  FromOurBlog_Translations,
  GeneralSec_Translations,
  SecondSlider_Translations,
  NumbersCompany_Translations,
  AboutUs_Translations,
  CommonQuestions_Translations,
  PrivacyQuestions_Translations,
  Affiliate_Translations,
  Campaigns_Translations,
  Contact_Translations,
  SingleDonationPage_Translations,
  TheSwitchBtnSec_Translations,
  TheFinalDonationPage_Translations,
} from "./Translations/Translations";

export const useTranslations = defineStore("translations", () => {
  const currentLanguage = ref(checkLocaleStorageLang());

  function checkLocaleStorageLang() {
    const lang = localStorage.getItem("currentLang");
    switch (lang) {
      case "en":
        return "en";
      case "ar":
        return "ar";
      case "tr":
        return "tr";
      default:
        return "en";
    }7
  }

  onMounted(() => {
    if (currentLanguage.value === "ar") document.body.classList.add("rtl");
    else document.body.classList.remove("rtl");
  });

  watch(currentLanguage, () => {
    if (currentLanguage.value === "ar") document.body.classList.add("rtl");
    else document.body.classList.remove("rtl");
  });

  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  //
  return {
    currentLanguage,
    NavBar_Translations,
    Footer_Translations,
    FromOurBlog_Translations,
    GeneralSec_Translations,
    SecondSlider_Translations,
    NumbersCompany_Translations,
    AboutUs_Translations,
    CommonQuestions_Translations,
    PrivacyQuestions_Translations,
    Affiliate_Translations,
    Campaigns_Translations,
    Contact_Translations,
    SingleDonationPage_Translations,
    TheSwitchBtnSec_Translations,
    TheFinalDonationPage_Translations,
  };
});
