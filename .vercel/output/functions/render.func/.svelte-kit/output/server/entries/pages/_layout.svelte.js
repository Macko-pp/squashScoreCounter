import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar shadow-lg flex items-center justify-center font-bold"}">Squash Score Counter
</div>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
