(()=>{"use strict";var e={147:e=>{e.exports=require("fs")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.packageJSONtoMd=void 0;const t=o(147);function n(e,t,o,r){const s=Object.keys(e).sort();for(const a of s){const s=e[a],c=t+"<br>."+a,u=i(s);r.write(`| ${c} | ${u} | ${o} | ${s.description} |\n`),s.properties&&n(s.properties,c,o,r)}}function i(e){const t=" &#124; ";if(Array.isArray(e.type))return e.type.join(t);if(e.properties)return"object";if("array"!==e.type||!e.items)return e.anyOf||e.oneOf?o(e):e.type?e.type:"??";if("string"==typeof e.items)return e.items+"[]";if(e.items.properties)return"object[]";if(e.items.anyOf||e.items.oneOf)return o(e.items);if(e.items.type)return i(e.items)+"[]";function o(e){const o=[];let r=!1;for(const t of e.anyOf||e.oneOf){const e=i(t);-1===o.findIndex((t=>t===e))&&o.push(i(t)),(t.itemms||t.properties||t.anyOf||t.oneOf)&&(r=!0)}return r?"{"+o.join(t)+"}":o.join(t)}}function s(e,o){var r,s,a,c,u;let l;try{const o=t.readFileSync(e);l=JSON.parse(o.toString())}catch(t){return console.error(`Error: Could not open/read file ${e}`,t),1}const d=null===(r=null==l?void 0:l.contributes)||void 0===r?void 0:r.debuggers;if(!d)return console.error(`No "debuggers" found in file ${e}`),1;for(const e of d){const r=e.configurationAttributes,l=null===(s=null==r?void 0:r.attach)||void 0===s?void 0:s.properties,d=null===(a=null==r?void 0:r.launch)||void 0===a?void 0:a.properties;if(!l)return console.error('"attach" properties not found'),1;if(!d)return console.error('"launch" properties not found'),1;let f=Object.keys(l),y=Object.keys(d);const b={};for(const e of y)(null===(c=l[e])||void 0===c?void 0:c.deprecated)||(null===(u=d[e])||void 0===u?void 0:u.deprecated)?(delete d[e],delete l[e]):-1!==f.findIndex((t=>t===e))&&(b[e]=d[e],d[e].description!==l[e].description&&console.warn(`Warning: Description does not match for property ${e} between attach and launch`),delete d[e],delete l[e]);f=Object.keys(l).sort(),y=Object.keys(d).sort();const h=Object.keys(b).sort(),v=f.concat(y).concat(h).sort();try{const e=t.createWriteStream(o);(p=e).write("There are many `User/Workspace Settings` to control things globally. You can find these in the VSCode Settings UI. `launch.json`"),p.write(" can override some of those settings. There is a lot of functionality that is available via `Settings` and some may be useful in a"),p.write(" team environment and/or can be used across all cortex-gdb sessions\n\n"),p.write("![](./images/cortex-gdb-settings.png)\n\n"),p.write("The following attributes (properties) can be used in your `launch.json` to control various aspects of debugging."),p.write(" Also `IntelliSense` is an invaluable aid while editing `launch.json`. With `IntelliSense`, you can hover over an attribute to get"),p.write(" more information and/or help you find attributes (just start typing a double-quote, use Tab key) and provide defaults/options.\n\n"),p.write("If the type is marked as `{...}` it means that it is a complex item can have multiple types. Possibly consult our Wiki\n"),e.write("| Attribute | Type | Launch/ Attach | Description |\n"),e.write("| --------- | ---- | ---------------- | ----------- |\n");for(const t of v){let o=b[t],r="Both";o||(o=d[t],o?r="Launch":(o=l[t],r="Attach"));const s=i(o);e.write(`| ${t} | ${s} | ${r} | ${o.description} |\n`),o.properties?n(o.properties,t,r,e):o.items}}catch(e){console.error(`Could not write to file ${o}`)}break}var p}e.packageJSONtoMd=s,s("./package.json","./debug_attributes.md")})(),module.exports=r})();
//# sourceMappingURL=docgen.js.map