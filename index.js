// ==UserScript==
// @name         Test
// @namespace    https://www.beihuolang.net
// @version      0.1
// @description  free copy csdn code !
// @author       superhan
// @match        https://blog.csdn.net/*
// @icon           https://g.csdnimg.cn/static/logo/favicon32.ico
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let codes = document.querySelectorAll("code");
    codes.forEach(c=>{
        c.contentEditable="true";
    })
})();
