exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-scroll/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
