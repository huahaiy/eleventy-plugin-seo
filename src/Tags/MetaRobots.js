const BaseTag = require("./BaseTag");

class MetaRobots extends BaseTag {
  render(pageNumber) {
    let robots = "index,follow";

    if (pageNumber > 0) {
      robots = `no${robots}`;
    }

    return robots;
  }

  liquidRender(scope, hash) {
    // Get page number from pagination.
    const pageNumber = this.keyPathVal(
      scope.contexts[0],
      "pagination.pageNumber",
      0
    );

    return Promise.resolve(this.render(pageNumber));
  }

  nunjucksRender(self, context) {
    const tagPageNumber = self.keyPathVal(context.ctx, "tag.pageNumber");
    const pageNumber = (tagPageNumber != undefined) ? tagPageNumber : self.keyPathVal(context.ctx, "pagination.pageNumber", 0);

    return self.render(pageNumber);
  }
}

module.exports = MetaRobots;
