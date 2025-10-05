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


tep 3: What is a DocumentFragment (and why use it)?

Think of a DocumentFragment as a temporary mini-DOM in memory —
you can build or clone elements inside it without touching the real DOM yet.
That makes it much faster when inserting lots of elements.

🧠 Key idea

Updating the DOM (the visible page) is expensive —
each change can cause repaint, reflow, and layout recalculation.

But when you use a DocumentFragment, the browser doesn’t render it —
so you can prepare a whole “batch” of elements first,
then append them to the DOM once.

```htm
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}

document.body.appendChild(fragment);

```

>>🧠 Here’s what happens:

>>We build 5 <li> elements inside the fragment (not yet on the page).

>>When we finally append the fragment to document.body,
>>all its children move into the DOM at once.

>>Only one reflow occurs — not five.