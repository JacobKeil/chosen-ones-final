import { c as create_ssr_component, v as validate_component, d as subscribe, f as each } from './index-74f9d4dd.js';
import { a as articles, A as Article } from './Article-36df92a1.js';
import './index2-424249a2.js';

const AllBlogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $articles, $$unsubscribe_articles;
  let { articles: articles2 } = $$props;
  $$unsubscribe_articles = subscribe(articles2, (value) => $articles = value);
  $articles[0];
  if ($$props.articles === void 0 && $$bindings.articles && articles2 !== void 0)
    $$bindings.articles(articles2);
  $$unsubscribe_articles();
  return `

<section id="${"allblogs"}" class="${"relative bg-white overflow-hidden"}"><div class="${"p-8"}"><p class="${"text-2xl"}">All Blogs</p></div>
  <div class="${"px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-4"}">${each($articles, (article, index) => {
    return `${article.tags.includes("Article") ? `${validate_component(Article, "Article").$$render($$result, { article }, {}, {})}` : ``}`;
  })}</div>
  <div class="${"p-12"}"><p class="${"text-lg text-center text-black"}"></p></div>
  ${``}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(AllBlogs, "AllBlogs").$$render($$result, { articles }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bed4c32f.js.map
