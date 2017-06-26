var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e,a=/\blang(?:uage)?-(\w+)\b/i,b=0,c=_self.Prism={manual:_self.Prism&&_self.Prism.manual,util:{encode:function(a){return a instanceof d?new d(a.type,c.util.encode(a.content),a.alias):"Array"===c.util.type(a)?a.map(c.util.encode):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++b}),a.__id},clone:function(a){var d,e,b=c.util.type(a);switch(b){case"Object":d={};for(e in a)a.hasOwnProperty(e)&&(d[e]=c.util.clone(a[e]));return d;case"Array":return a.map&&a.map(function(a){return c.util.clone(a)})}return a}},languages:{extend:function(a,b){var e,d=c.util.clone(c.languages[a]);for(e in b)d[e]=b[e];return d},insertBefore:function(a,b,d,e){var f,g,h,i;if(e=e||c.languages,f=e[a],2==arguments.length){d=arguments[1];for(g in d)d.hasOwnProperty(g)&&(f[g]=d[g]);return f}h={};for(i in f)if(f.hasOwnProperty(i)){if(i==b)for(g in d)d.hasOwnProperty(g)&&(h[g]=d[g]);h[i]=f[i]}return c.languages.DFS(c.languages,function(b,c){c===e[a]&&b!=a&&(this[b]=h)}),e[a]=h},DFS:function(a,b,d,e){e=e||{};for(var f in a)a.hasOwnProperty(f)&&(b.call(a,f,a[f],d||f),"Object"!==c.util.type(a[f])||e[c.util.objId(a[f])]?"Array"!==c.util.type(a[f])||e[c.util.objId(a[f])]||(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,f,e)):(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,null,e)))}},plugins:{},highlightAll:function(a,b){var e,f,g,d={callback:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};for(c.hooks.run("before-highlightall",d),f=d.elements||document.querySelectorAll(d.selector),g=0;e=f[g++];)c.highlightElement(e,a===!0,d.callback)},highlightElement:function(b,d,e){var f,g,h,i,j,k;for(h=b;h&&!a.test(h.className);)h=h.parentNode;return h&&(f=(h.className.match(a)||[,""])[1].toLowerCase(),g=c.languages[f]),b.className=b.className.replace(a,"").replace(/\s+/g," ")+" language-"+f,h=b.parentNode,/pre/i.test(h.nodeName)&&(h.className=h.className.replace(a,"").replace(/\s+/g," ")+" language-"+f),i=b.textContent,j={element:b,language:f,grammar:g,code:i},c.hooks.run("before-sanity-check",j),j.code&&j.grammar?(c.hooks.run("before-highlight",j),d&&_self.Worker?(k=new Worker(c.filename),k.onmessage=function(a){j.highlightedCode=a.data,c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(j.element),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)},k.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))):(j.highlightedCode=c.highlight(j.code,j.grammar,j.language),c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(b),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)),void 0):(j.code&&(c.hooks.run("before-highlight",j),j.element.textContent=j.code,c.hooks.run("after-highlight",j)),c.hooks.run("complete",j),void 0)},highlight:function(a,b,e){var f=c.tokenize(a,b);return d.stringify(c.util.encode(f),e)},matchGrammar:function(a,b,d,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,i=c.Token;for(j in d)if(d.hasOwnProperty(j)&&d[j]){if(j==h)return;for(k=d[j],k="Array"===c.util.type(k)?k:[k],l=0;l<k.length;++l)for(m=k[l],n=m.inside,o=!!m.lookbehind,p=!!m.greedy,q=0,r=m.alias,p&&!m.pattern.global&&(s=m.pattern.toString().match(/[imuy]*$/)[0],m.pattern=RegExp(m.pattern.source,s+"g")),m=m.pattern||m,t=e,u=f;t<b.length;u+=b[t].length,++t){if(v=b[t],b.length>a.length)return;if(!(v instanceof i)){if(m.lastIndex=0,w=m.exec(v),x=1,!w&&p&&t!=b.length-1){if(m.lastIndex=u,w=m.exec(a),!w)break;for(y=w.index+(o?w[1].length:0),z=w.index+w[0].length,A=t,B=u,C=b.length;C>A&&(z>B||!b[A].type&&!b[A-1].greedy);++A)B+=b[A].length,y>=B&&(++t,u=B);if(b[t]instanceof i||b[A-1].greedy)continue;x=A-t,v=a.slice(u,B),w.index-=u}if(w){if(o&&(q=w[1].length),y=w.index+q,w=w[0].slice(q),z=y+w.length,D=v.slice(0,y),E=v.slice(z),F=[t,x],D&&(++t,u+=D.length,F.push(D)),G=new i(j,n?c.tokenize(w,n):w,r,w,p),F.push(G),E&&F.push(E),Array.prototype.splice.apply(b,F),1!=x&&c.matchGrammar(a,b,d,t,u,!0,j),g)break}else if(g)break}}}},tokenize:function(a,b){var f,d=[a],e=b.rest;if(e){for(f in e)b[f]=e[f];delete b.rest}return c.matchGrammar(a,d,b,0,0,!1),d},hooks:{all:{},add:function(a,b){var d=c.hooks.all;d[a]=d[a]||[],d[a].push(b)},run:function(a,b){var e,f,d=c.hooks.all[a];if(d&&d.length)for(f=0;e=d[f++];)e(b)}}},d=c.Token=function(a,b,c,d,e){this.type=a,this.content=b,this.alias=c,this.length=0|(d||"").length,this.greedy=!!e};return d.stringify=function(a,b,e){var f,g,h;return"string"==typeof a?a:"Array"===c.util.type(a)?a.map(function(c){return d.stringify(c,b,a)}).join(""):(f={type:a.type,content:d.stringify(a.content,b,e),tag:"span",classes:["token",a.type],attributes:{},language:b,parent:e},"comment"==f.type&&(f.attributes.spellcheck="true"),a.alias&&(g="Array"===c.util.type(a.alias)?a.alias:[a.alias],Array.prototype.push.apply(f.classes,g)),c.hooks.run("wrap",f),h=Object.keys(f.attributes).map(function(a){return a+'="'+(f.attributes[a]||"").replace(/"/g,"&quot;")+'"'}).join(" "),"<"+f.tag+' class="'+f.classes.join(" ")+'"'+(h?" "+h:"")+">"+f.content+"</"+f.tag+">")},_self.document?(e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop(),e&&(c.filename=e.src,!document.addEventListener||c.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(c.highlightAll):window.setTimeout(c.highlightAll,16):document.addEventListener("DOMContentLoaded",c.highlightAll))),_self.Prism):_self.addEventListener?(_self.addEventListener("message",function(a){var b=JSON.parse(a.data),d=b.language,e=b.code,f=b.immediateClose;_self.postMessage(c.highlight(e,c.languages[d],d)),f&&_self.close()},!1),_self.Prism):_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,Prism.languages.json={property:/"(?:\\.|[^\\"])*"(?=\s*:)/gi,string:/"(?!:)(?:\\.|[^\\"])*"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,"boolean":/\b(true|false)\b/gi,"null":/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json,Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-_\w]+/,variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss),!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(a){var b,c,d,e,f,g;a.code&&(b=a.element.parentNode,c=/\s*\bline-numbers\b\s*/,b&&/pre/i.test(b.nodeName)&&(c.test(b.className)||c.test(a.element.className))&&!a.element.querySelector(".line-numbers-rows")&&(c.test(a.element.className)&&(a.element.className=a.element.className.replace(c,"")),c.test(b.className)||(b.className+=" line-numbers"),e=a.code.match(/\n(?!$)/g),f=e?e.length+1:1,g=new Array(f+1),g=g.join("<span></span>"),d=document.createElement("span"),d.setAttribute("aria-hidden","true"),d.className="line-numbers-rows",d.innerHTML=g,b.hasAttribute("data-start")&&(b.style.counterReset="linenumber "+(parseInt(b.getAttribute("data-start"),10)-1)),a.element.appendChild(d)))})}();