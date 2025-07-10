hexo.extend.filter.register("before_post_render", function (data) {
    // 匹配 $$...$$ 的块级公式
    data.content = data.content.replace(/\$\$(.+?)\$\$/gs, (match, formula) => {
        return `<span>\n$$${formula}$$\n</span>`;
    });

    // 匹配 $...$ 的行内公式（避免嵌套 $$ 内部）
    data.content = data.content.replace(/(^|[^$])\$([^\$]+?)\$/g, (match, pre, formula) => {
        return `${pre}<span>\$${formula}\$</span>`;
    });

    return data;
}, 0);
