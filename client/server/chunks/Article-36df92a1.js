import { w as writable } from './index2-424249a2.js';
import { c as create_ssr_component, b as add_attribute, e as escape, f as each } from './index-74f9d4dd.js';

const products = writable([]);
const articles = writable([]);
const Article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  const tags = article.tags.split(", ");
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  return `
<div class="${"max-h-[500px] text-[#fff] rounded-sm cursor-pointer transition hover:-translate-y-1"}">${article.image.src ? `<img class="${"aspect-video object-cover w-full rounded-t-md"}"${add_attribute("src", article.image.src, 0)} alt="${""}">` : ``}
  <div class="${"p-4 bg-black rounded-b-md"}"><h2>${escape(article.title)}</h2>
    <h3 class="${"text-teal pb-3"}">By ${escape(article.author)} - <span class="${"text-green"}">${escape(article.published_at.split("T")[0])}</span></h3>
    <div class="${"flex space-x-2"}">${each(tags, (tag) => {
    return `<p class="${"bg-lightBlue text-black rounded-sm py-1 px-2"}">${escape(tag)}</p>`;
  })}</div></div></div>`;
});

export { Article as A, articles as a, products as p };
//# sourceMappingURL=Article-36df92a1.js.map
