// ==UserScript==
// @name         跑马灯
// @namespace    http://ai-chan.top/
// @version      0.1
// @description  对浏览器打开过的链接增加跑马灯效果
// @author       酷酷的哀殿
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const addCssRule = function() {
        // 创建一个 style， 返回其 stylesheet 对象
        function createStyleSheet() {
            var style = document.createElement('style');
            style.type = 'text/css';
            document.head.appendChild(style);
            return style.sheet;
        }

        // 创建 stylesheet 对象
        const sheet = createStyleSheet();

        // 返回接口函数
        return function(selector, rules, index) {
            index = index || 0;
            if (sheet.rules.length > 0) {
                sheet.removeRule(0)
            }
            sheet.insertRule(selector + "{" + rules + "}", index);
        }
    }();
    const arr = ['#1e73be', '#8224e3', '#81d742', '#eeee22', '#dd9933', '#dd3333'];
    const lenth = arr.length;
    let i = 0;
    debugger;
    setInterval(function() {
        i++;
        i = i % lenth;
        addCssRule('.mblink:visited, a:visited', 'color:' + arr[i] + ' !important', 0);
    }, 1000);
})();