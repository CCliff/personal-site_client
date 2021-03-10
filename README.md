Writing a new site trying some shit I haven't used yet

# Next.js
I like Nuxt for SSR Vue, I might like Next for SSR React.

## Issues
Getting a linter up and running for this project has been a massive pain. There is some wierdness to the Next.js API that causes a host of problems

```
https://nextjs.org/learn/basics/navigate-between-pages/link-component
<Link> components take a child <a> tag, but the <a> tag doesn't get an href
That causes all sorts of errors in a linter: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402
```