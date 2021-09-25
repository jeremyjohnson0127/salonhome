function removeHoverCSSRule(){if('createTouch'in document){try{var ignore=/:hover/;for(var i=0;i<document.styleSheets.length;i++){var sheet=document.styleSheets[i];if(!sheet.cssRules){continue;}
for(var j=sheet.cssRules.length-1;j>=0;j--){var rule=sheet.cssRules[j];if(rule.type===CSSRule.STYLE_RULE&&ignore.test(rule.selectorText)){sheet.deleteRule(j);}}}}
catch(e){}}}
window.onload=function(){var dispositivo=navigator.userAgent.toLowerCase();if(dispositivo.search(/iphone|ipod|ipad|android/)>-1){removeHoverCSSRule();}}