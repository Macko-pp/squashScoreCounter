import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang$1 = "";
const css$1 = {
  code: ".plus.svelte-x3u8hu.svelte-x3u8hu{border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem\n}.minus.svelte-x3u8hu.svelte-x3u8hu{border-bottom-right-radius:0.375rem;border-bottom-left-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0.5rem\n}.changer.svelte-x3u8hu.svelte-x3u8hu{display:flex;flex-direction:column;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}.changer.svelte-x3u8hu button.svelte-x3u8hu:active{--tw-bg-opacity:1;background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-shadow:inset 0 2px 4px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.score.svelte-x3u8hu.svelte-x3u8hu{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem\n}",
  map: null
};
const Page$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let score1 = 0;
  let score2 = 0;
  $$result.css.add(css$1);
  return `<div class="${"flex justify-center"}"><div class="${"changer p1 svelte-x3u8hu"}"><button class="${"plus svelte-x3u8hu"}">+</button>
		<button class="${"minus svelte-x3u8hu"}">-</button></div>
	
	<div class="${"flex h-full mt-5"}"><score class="${"score p1 svelte-x3u8hu"}">${escape(score1)}</score>
		<divider class="${"px-2"}">-</divider>
		<score class="${"score p2 svelte-x3u8hu"}">${escape(score2)}</score></div>

	<div class="${"changer p2 svelte-x3u8hu"}"><button class="${"plus svelte-x3u8hu"}">+</button>
		<button class="${"minus svelte-x3u8hu"}">-</button></div>
	
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".Counter.svelte-14xyepw{margin-top:80px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"grid grid-cols-5 grid-rows-3"}"><div class="${"avatar col-start-2 row-start-3 flex justify-center"}"><div class="${"w-20 rounded-lg"}"><img src="${"/Player 1.png "}" alt="${"stock avatar"}"></div></div>
	<div class="${"row-start-4 col-start-2 flex justify-center"}"><p contenteditable="${"true"}">Player 1</p></div>
	
	<div class="${"avatar col-start-4 row-start-4 row-end-3 flex justify-center"}"><div class="${"w-20 rounded-lg"}"><img src="${"/Player 2.png "}" alt="${"stock avatar"}"></div></div>
	<div class="${"row-start-4 col-start-4 flex justify-center"}"><p contenteditable="${"true"}">Player 2</p></div></section>

<div class="${"Counter svelte-14xyepw"}">${validate_component(Page$1, "Counter").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
