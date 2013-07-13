BEM.JSON.decl({name: 'articles'}, {

    onBlock: function(ctx) {
        var data = {
            module: ctx.param('module')
        };
        ctx.defer(
            BEM.blocks['i-api']
            .module(data)
            .then(function(result) {
                ctx.content([
                    {
                        block: 'b-link',
                        url: '/create/',
                        content: '[+]'
                    },
                    {
                        elem: 'title',
                        tag: 'h4',
                        content: 'Table of Content'
                    },
                    {
                        elem: 'toc',
                        tag: 'ul',
                        content: result.articles.map(function(item) {
                            return [
                                {
                                    tag: 'li',
                                    content: {
                                        block: 'b-link',
                                        content: item.title,
                                        url: '/articles/' + item._id
                                    }
                                }
                            ]
                        })
                    }
                ]);
            })
        // ctx.defer
        );
    }

});