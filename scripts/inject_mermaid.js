const css = hexo.extend.helper.get("css").bind(hexo);
const js = hexo.extend.helper.get("js").bind(hexo);

hexo.extend.injector.register("body_end", `
<script src="${hexo.config.root}js/3rd/mermaid11/dist/mermaid.min.js"></script>
<script>
    mermaid.initialize({ startOnLoad: true });
</script>
`);

hexo.extend.injector.register("head_end", () => { return css("/css/mermaid.css"); });
