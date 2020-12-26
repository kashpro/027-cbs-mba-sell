/* App styles */
import "@/scss/main.scss";

/* Development stats */
import addWindowStatsElement from './modules/dev.js';
if (process.env.NODE_ENV === "development") {addWindowStatsElement();}

/* Project modules */
import programTabs from "./modules/programTabs.js";
programTabs();
import showMoreSpeakers from "./modules/showMoreSpeakers.js";
showMoreSpeakers();
import resultSlider from "./modules/resultSlider.js";
resultSlider();
import feedbackSlider from "./modules/feedbackSlider.js";
feedbackSlider();
import countdown from "./modules/countdown.js";
countdown();
import increment from "./modules/increment.js";
increment();
import fancybox from "./modules/fancybox.js";
fancybox();