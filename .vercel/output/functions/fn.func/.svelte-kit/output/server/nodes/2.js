

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CKhkBwQ_.js","_app/immutable/chunks/scheduler.9Q9YTp9e.js","_app/immutable/chunks/index.C1dxgIUi.js"];
export const stylesheets = [];
export const fonts = [];
