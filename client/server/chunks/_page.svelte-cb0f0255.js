import { c as create_ssr_component, v as validate_component, b as add_attribute, d as subscribe, f as each, e as escape } from './index-74f9d4dd.js';
import { a as articles, p as products, A as Article } from './Article-36df92a1.js';
import './index2-424249a2.js';

const image1 = "/_app/immutable/assets/banner2-85fbb9c4.jpg";
const image2 = "/_app/immutable/assets/banner3-7ac48cc7.jpg";
const image3 = "/_app/immutable/assets/banner4-e0eda3e5.jpg";
const image4 = "/_app/immutable/assets/banner5-e45d50c4.jpg";
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [image1, image2, image3, image4];
  let currentImage = 0;
  return `<section id="${"banner"}" class="${"relative h-md text-black bg-[#fff]"}">
  <div id="${"carousel-left"}" class="${"absolute flex justify-center items-center top-[47%] left-4 p-1 z-10 rounded-full bg-white/75 cursor-pointer"}"><box-icon class="${"fill-black cursor-pointer"}" name="${"chevron-left"}"></box-icon></div>
  
  <div id="${"carousel-right"}" class="${"absolute flex justify-center items-center top-[47%] right-4 p-1 z-10 rounded-full bg-white/75 cursor-pointer"}"><box-icon class="${"fill-black cursor-pointer"}" name="${"chevron-right"}"></box-icon></div>
  <div id="${"image"}" class="${"object-cover h-full w-full"}"><img class="${"object-cover h-full w-full"}"${add_attribute("src", images[currentImage], 0)} alt="${""}"></div></section>`;
});
const Mission = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="${"mission"}" class="${"text-xl px-8 py-4 bg-white"}"><div class="${"py-4 text-black"}"><p class="${"text-2xl"}">Our Mission</p></div>
  <box-icon class="${"fill-black"}" name="${"quote-left"}" type="${"solid"}"></box-icon>
  Help others realize their potential and purpose using our God given resources with a touch of creativity.
  Clothing, assisting, and inspiring our neighbors in aim to spark ambition and faith. ChosenOnes is
  within and we strive to bring it out of you.
  <box-icon class="${"fill-black"}" name="${"quote-right"}" type="${"solid"}"></box-icon>
  <div class="${"p-3"}"></div></section>`;
});
const Artist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  article.tags.split(", ");
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  return `
<div class="${"text-[#fff] rounded-sm shadow-xl cursor-pointer transition hover:-translate-y-1"}"><img class="${"aspect-video object-cover object-top w-full rounded-t-md"}"${add_attribute("src", article.image.src, 0)} alt="${""}">
  <div class="${"p-4 bg-[#fff] text-black rounded-b-md"}"><h2 class="${"text-green font-semibold"}">${escape(article.title)}</h2>
    <p class="${"text-[14px]"}">${escape(article.body_html.slice(0, 80))}... <a class="${"underline"}" href="${"/"}">Read more</a></p></div></div>`;
});
const FeaturedArtists = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $articles, $$unsubscribe_articles;
  let { articles: articles2 } = $$props;
  $$unsubscribe_articles = subscribe(articles2, (value) => $articles = value);
  let artistNum = [];
  $articles[0];
  function incrementArtistNum() {
    artistNum.push(1);
    console.log(artistNum);
    return "";
  }
  if ($$props.articles === void 0 && $$bindings.articles && articles2 !== void 0)
    $$bindings.articles(articles2);
  $$unsubscribe_articles();
  return `

<section id="${"artists"}" class="${"relative bg-black overflow-hidden"}"><div class="${"p-8 text-[#fff]"}"><p class="${"text-2xl"}">Featured Artists</p></div>
  <div class="${"px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4"}">${each($articles, (article, index) => {
    return `${article.tags.includes("Artist") && artistNum.length < 4 ? `${validate_component(Artist, "Artist").$$render($$result, { article }, {}, {})}
        ${escape(incrementArtistNum())}` : ``}`;
  })}</div>
  <div class="${"p-6"}"></div>
  ${``}</section>`;
});
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  let textColor = product.variants[0].inventory_quantity <= 5 ? "text-red" : "text-green";
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `
<div class="${"text-black rounded-sm shadow-xl cursor-pointer transition hover:-translate-y-1"}"><img class="${"aspect-video object-cover w-full rounded-t-md"}"${add_attribute("src", product.images[0].src, 0)} alt="${""}">
  <div class="${"p-4 bg-white rounded-b-md"}"><h2>${escape(product.title)}</h2>
    <div class="${"flex justify-between items-center pt-1"}"><h3${add_attribute("class", textColor, 0)}>${escape(product.variants[0].inventory_quantity)} in stock
      </h3>
      <h3 class="${"py-1 px-2 bg-[#4b9257] text-white font-bold rounded-md"}">$${escape(product.variants[0].price)}</h3></div></div></div>`;
});
const Store = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $products, $$unsubscribe_products;
  let { products: products2 } = $$props;
  $$unsubscribe_products = subscribe(products2, (value) => $products = value);
  let productNum = [];
  $products[0];
  function incrementProductNum() {
    productNum.push(1);
    return "";
  }
  if ($$props.products === void 0 && $$bindings.products && products2 !== void 0)
    $$bindings.products(products2);
  $$unsubscribe_products();
  return `

<section id="${"store"}" class="${"relative bg-black overflow-hidden"}"><div class="${"p-8 text-[#fff]"}"><p class="${"text-2xl"}">Store</p></div>
  <div class="${"px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4"}">${each($products, (product, index) => {
    return `${productNum.length < 4 ? `${validate_component(Product, "Product").$$render($$result, { product }, {}, {})}
        ${escape(incrementProductNum())}` : ``}`;
  })}</div>
  <div class="${"p-12"}">
    <p class="${"text-lg text-center text-white underline cursor-pointer"}">Browse store...
    </p></div>
  ${``}</section>`;
});
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $articles, $$unsubscribe_articles;
  let { articles: articles2 } = $$props;
  $$unsubscribe_articles = subscribe(articles2, (value) => $articles = value);
  let blogNum = [];
  $articles[0];
  function incrementBlogNum() {
    blogNum.push(1);
    console.log(blogNum);
    return "";
  }
  if ($$props.articles === void 0 && $$bindings.articles && articles2 !== void 0)
    $$bindings.articles(articles2);
  $$unsubscribe_articles();
  return `

<section id="${"blog"}" class="${"relative bg-white overflow-hidden"}"><div class="${"p-8"}"><p class="${"text-2xl"}">Blog</p></div>
  <div class="${"px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4"}">${each($articles, (article, index) => {
    return `${article.tags.includes("Article") && blogNum.length < 4 ? `${validate_component(Article, "Article").$$render($$result, { article }, {}, {})}
        ${escape(incrementBlogNum())}` : ``}`;
  })}</div>
  <div class="${"p-12"}">
    <p class="${"text-lg text-center text-black underline cursor-pointer"}">Read more...
    </p></div>
  ${``}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}
${validate_component(FeaturedArtists, "FeaturedArtists").$$render($$result, { articles }, {}, {})}
${validate_component(Mission, "Mission").$$render($$result, {}, {}, {})}
${validate_component(Store, "Store").$$render($$result, { products }, {}, {})}
${validate_component(Blog, "Blog").$$render($$result, { articles }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cb0f0255.js.map
