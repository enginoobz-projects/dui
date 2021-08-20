/*-------------------------
      Framework Resources
-------------------------*/
const localFrameworkPath = '/dui';
// remote paths: ad-hoc fallback to load file on remote server for different projects
// TODO: resolve CORS or use CDN
const remoteFrameworkPath = 'https://enginoobz.com/dui';
export const settingFilePath = `${localFrameworkPath}/setting.html`;
export const fallbackSettingFilePath = `${remoteFrameworkPath}/setting.html`;
export const settingButtonFilePath = `${localFrameworkPath}/setting-button.html`;
export const fallbackSettingButtonFilePath = `${remoteFrameworkPath}/setting-button.html`;
export const dynamicUIJs = {
  name: "DynamicUI.js",
  src: `${localFrameworkPath}/js/dynamic/DynamicUI.js`,
  isModule: true,
};
export const fallbackDynamicUIJs = {
  name: "DynamicUI.js",
  src: `${remoteFrameworkPath}/js/dynamic/DynamicUI.js`,
  isModule: true,
};
/*-------------------------
      Required Resources
-------------------------*/
/*Required CSS */
export const animateCss = {
  name: "animate.min.css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
  // triggerClasses: ["animate__animated"]
};
export const bootstrap4MinCss = {
  name: "bootstrap.min.css",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
};
export const bootstrap5MinCss = {
  name: "bootstrap.min.css",
  href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css",
  integrity: "sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
};
export const fontawesomeCss = {
  name: "fontawesome",
  href: "https://use.fontawesome.com/releases/v5.15.0/css/all.css",
  // triggerClasses: ["fa", "fab", "fas"]
};
/*Required JS */
export const jqueryMinJs = {
  name: "jquery",
  src: "https://code.jquery.com/jquery-3.6.0.min.js",
  integrity: "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
};
export const popperMinJs = {
  name: "popper.min.js",
  src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
};
export const bootstrap4MinJs = {
  name: "bootstrap.min.js",
  src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
  integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
};
export const bootstrap5MinBundleJs = {
  name: "bootstrap.bundle.min.js",
  src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js",
  integrity: "sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
};
export const tinyColorMinJs = {
  name: "tinycolor.min.js",
  src: "https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.4.2/tinycolor.min.js",
  integrity: "sha512-+aXA9mgbUvFe0ToTlbt8/3vT7+nOgUmFw29wfFCsGoh8AZMRSU0p4WtOvC1vkF2JBrndPN2TuNZsHPAKPPxe8Q=="
};
/*-------------------------
      Optional Resources (defer loading when needed)
-------------------------*/
export const prismCoreMinJs = {
  name: "prism-core.min.js",
  src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js",
  integrity: "sha512-hM0R3pW9UdoNG9T+oIW5pG9ndvy3OKChFfVTKzjyxNW9xrt6vAbD3OeFWdSLQ8mjKSgd9dSO3RXn3tojQtiA8Q==",
  triggerClasses: ["code-block"]
};
export const prismAutoloaderMinJs = {
  name: "prism-autoloader.min.js",
  src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js",
  integrity: "sha512-xCfKr8zIONbip3Q1XG/u5x40hoJ0/DtP1bxyMEi0GWzUFoUffE+Dfw1Br8j55RRt9qG7bGKsh+4tSb1CvFHPSA==",
  triggerClasses: ["code-block"]
};
export const prismMinCss = {
  name: "prism.min.css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css",
  integrity: "sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ==",
  triggerClasses: ["code-block"]
};
export const webfontJs = {
  name: "webfont.js",
  src: "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
};
export const interactMinJs = {
  name: "interact.min.js",
  src: "https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"
};
