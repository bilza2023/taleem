// src/renderer-web/templates/index.js

import { renderTitleSlide } from "./titleSlide.html.js";
import { renderTitleAndSubtitle } from "./titleAndSubtitle.html.js";
import { renderBulletList } from "./bulletList.html.js";
import { renderTwoColumnText } from "./twoColumnText.html.js";
import { renderTitleAndPara } from "./titleAndPara.html.js";

import { renderImageSlide } from "./imageSlide.html.js";
import { renderImageWithTitle } from "./imageWithTitle.html.js";
import { renderImageWithCaption } from "./imageWithCaption.html.js";
import { renderImageLeftBulletsRight } from "./imageLeftBulletsRight.html.js";
import { renderImageRightBulletsLeft } from "./imageRightBulletsLeft.html.js";
import { renderFillImage } from "./fillImage.html.js";

import { renderTable } from "./table.html.js";
import { renderStatistic } from "./statistic.html.js";
import { renderBigNumber } from "./bigNumber.html.js";
import { renderBarChart } from "./barChart.html.js";
import { renderDonutChart } from "./donutChart.html.js";

import { renderQuoteSlide } from "./quoteSlide.html.js";
import { renderQuoteWithImage } from "./quoteWithImage.html.js";
import { renderCornerWordsSlide } from "./cornerWordsSlide.html.js";
import { renderContactSlide } from "./contactSlide.html.js";

import { renderEq } from "./eq.html.js";
import { renderSvgPointer } from "./svgPointer.html.js";

export const renderTemplates = {
  titleSlide: renderTitleSlide,
  titleAndSubtitle: renderTitleAndSubtitle,
  bulletList: renderBulletList,
  twoColumnText: renderTwoColumnText,
  titleAndPara: renderTitleAndPara,

  imageSlide: renderImageSlide,
  imageWithTitle: renderImageWithTitle,
  imageWithCaption: renderImageWithCaption,
  imageLeftBulletsRight: renderImageLeftBulletsRight,
  imageRightBulletsLeft: renderImageRightBulletsLeft,
  fillImage: renderFillImage,

  table: renderTable,
  statistic: renderStatistic,
  bigNumber: renderBigNumber,
  barChart: renderBarChart,
  donutChart: renderDonutChart,

  quoteSlide: renderQuoteSlide,
  quoteWithImage: renderQuoteWithImage,
  cornerWordsSlide: renderCornerWordsSlide,
  contactSlide: renderContactSlide,

  eq: renderEq,
  svgPointer: renderSvgPointer
};
