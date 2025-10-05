What is a **<template> **element?

Let’s begin with a small HTML setup:

```html
<template id="user-card">
  <div class="card">
    <h2 class="name"></h2>
    <p class="email"></p>
  </div>
</template>

<div id="container"></div>
```

*Now — can you tell me what happens if you open this HTML in a browser?
👉 Will anything from inside** <template>** be visible?
*
Why** <template>** content isn’t displayed

> The **<template>** tag is like a hidden blueprint — its content is stored in memory, not rendered in the DOM.
> 
> You can think of it as a draft or HTML snippet waiting to be cloned later by JavaScript.