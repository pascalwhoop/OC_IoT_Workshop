Reveal.initialize({

    width: 1920,
    height: 1080,
    margin: 0.2,

    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: '../common/js/classList.js', condition: function () {
            return !document.body.classList;
        } },
        { src: '../common/js/markdown/marked.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        } },
        { src: '../common/js/markdown/markdown.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        } },
        { src: '../common/js/highlight/highlight.js', async: true, callback: function () {
            hljs.initHighlightingOnLoad();
        } },
        { src: '../common/js/zoom-js/zoom.js', async: true, condition: function () {
            return !!document.body.classList;
        } },
        { src: '../common/js/notes/notes.js', async: true, condition: function () {
            return !!document.body.classList;
        } }/*,
         { src: '../common/js/remotes/remotes.js', async: true, condition: function () {
         return !!document.body.classList;
         } }*/

    ]
});