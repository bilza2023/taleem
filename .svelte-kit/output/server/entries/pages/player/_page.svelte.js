import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { T as ToolbarDiv } from "../../../chunks/slideObject.js";
import "katex";
import "../../../chunks/client.js";
import "howler";
import { r as registerSlideTypes, O as OpenFileButton } from "../../../chunks/registerSlideTypes.js";
const PlayerWithSound = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slides } = $$props;
  let { audioData } = $$props;
  let { assets } = $$props;
  let { isBlob = false } = $$props;
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0) $$bindings.slides(slides);
  if ($$props.audioData === void 0 && $$bindings.audioData && audioData !== void 0) $$bindings.audioData(audioData);
  if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0) $$bindings.assets(assets);
  if ($$props.isBlob === void 0 && $$bindings.isBlob && isBlob !== void 0) $$bindings.isBlob(isBlob);
  return `${$$result.head += `<!-- HEAD_svelte-1i48p6k_START --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous"><!-- HEAD_svelte-1i48p6k_END -->`, ""}    <div class="h-full w-full bg-gray-800 text-white">${``}</div>`;
});
const PlayerNs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slides } = $$props;
  let { assets } = $$props;
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0) $$bindings.slides(slides);
  if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0) $$bindings.assets(assets);
  return `${$$result.head += `<!-- HEAD_svelte-1i48p6k_START --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous"><!-- HEAD_svelte-1i48p6k_END -->`, ""}    <div class="h-full w-full bg-gray-800 text-white">${``}</div>`;
});
const Player = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasAudio;
  let assets = null;
  registerSlideTypes();
  let { slides } = $$props;
  let { audioData = void 0 } = $$props;
  let { isBlob = false } = $$props;
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0) $$bindings.slides(slides);
  if ($$props.audioData === void 0 && $$bindings.audioData && audioData !== void 0) $$bindings.audioData(audioData);
  if ($$props.isBlob === void 0 && $$bindings.isBlob && isBlob !== void 0) $$bindings.isBlob(isBlob);
  hasAudio = audioData !== void 0;
  return `${hasAudio && slides && assets ? `${validate_component(PlayerWithSound, "PlayerWithSound").$$render($$result, { slides, audioData, isBlob, assets }, {}, {})}` : `${slides ? `${validate_component(PlayerNs, "PlayerNs").$$render($$result, { slides, assets }, {}, {})}` : ``}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = [];
  function callback(incomming) {
    if (typeof incomming !== "object") {
      alert("The imported slide is not an object");
    }
    slides = [...incomming];
  }
  return `${validate_component(ToolbarDiv, "ToolbarDiv").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(OpenFileButton, "OpenFileButton").$$render(
        $$result,
        {
          callback,
          importAccept: ".js",
          regexReplaceFilter: /export\s+const\s+\w+\s*=\s*/
        },
        {},
        {}
      )}`;
    }
  })} <div class="bg-gray-800 text-white w-full">${slides ? `<div class="flex justify-center w-full border-white border-2 text-center rounded-lg ">${validate_component(Player, "Player").$$render(
    $$result,
    {
      isBlob: false,
      slides,
      audioData: "/music1.opus"
    },
    {},
    {}
  )}</div>` : ``}</div>`;
});
export {
  Page as default
};
