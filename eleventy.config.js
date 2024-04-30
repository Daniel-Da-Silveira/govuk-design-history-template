module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      organisationLogo: false,
      productName: 'Forms designer',
      logotype: { // Corrected syntax for defining 'logotype'
        text: 'Defra'
      }, // Added a comma to separate 'logotype' from other properties
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    }
  });

  eleventyConfig.addCollection('creating-forms', collection => {
    return collection.getFilteredByGlob('app/posts/creating-forms/*.md')
  })

  eleventyConfig.addCollection('managing-forms', collection => {
    return collection.getFilteredByGlob('app/posts/managing-forms/*.md')
  })

  eleventyConfig.addCollection('onboarding', collection => {
    return collection.getFilteredByGlob('app/posts/onboarding/*.md')
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    }
  }
}
