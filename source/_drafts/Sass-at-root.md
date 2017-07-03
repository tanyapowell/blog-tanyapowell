---
title: Sass-at-root
categories: Technology
tags:
---

I'm a fan of Sass, but I have to admit I only use a fraction of its capabilities. When reviewing a colleague's pull request recently I looked at one particular scss file and thought _mess_. Not that it was bad, but it was HEAVILY nested, because of it's use of **BEM**. As a supportive team member I turned to any software engineer's go to tool, Uncle Google, to see if we could make this sass more readable. It's easy to forget the importance of readability, IMO our code should flow like a good story. Fortunately it didn't take long before I stumbled upon `@at-root`.

## Very Quick Intro to BEM
Before jumping into `@at-root` I want to give a very quick background to ***BEM***
- ***B:*** Block
- ***E:*** Element
- ***M:*** Modifier

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

This is pretty ugly nesting, and if you look at the output you might scream.  
