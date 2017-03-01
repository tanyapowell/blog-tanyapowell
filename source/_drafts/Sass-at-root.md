---
title: Sass-at-root
categories: technology
tags:
---

I'm a fan of Sass, but I have to admit I only use a fraction of its capabilities. When reviewing a colleague's

## Background on BEM
- **B:** Block
- **E:** Element
- **M:** Modifier

```
block{} //the section of the content
  .block__element{} //an individual element inside of the content section
    .block--modifier{} //specifically edited element pieces
```

## So what is the `@at-root` directive?
The `@at-root` allows you to nest your sass without nesting your output.

**E.g.** SCSS
```
.block {
  color: red;

  .block__header {
    color: blue;
  }

  .block__text {
    color: black;

    .block_text--link {
      color: pink;
    }
  }
}
```

This is pretty ugly nesting, and if I look th
