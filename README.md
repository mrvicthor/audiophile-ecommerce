# Frontend Mentor - Audiophile e-commerce website

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://audiophile-ecommerce-mrvicthor.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCss](https://tailwindcss.com/) - For styles

### What I learned

I experimented with typescript. Additionally, this project gave me the opportunity to use grid and flex box for web layout purposes. It allowed me improve my css and javascript skills. I also discovered a react hook library where i experimented with useLocalStorage hook to provide a temporary backend for storing data in local storage.
Furthermore, i also got a better understanding of how asynchronous programming can cause bugs(i.e hydration, where server rendered html does not correspond with client side) in software development. Here is an example code of how i manage to overcome this challenge with asynchronous programming

```js
const [hasMounted, setHasMounted] = useState < boolean > false;

useEffect(() => {
  setHasMounted(true);
}, []);

if (!hasMounted) {
  return null;
}
```

Finally, this function below helped shift focus back to the top of the checkout page so that users can view the confirmation order dialog.

```js
const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
```

### Continued development

I will refactor the code and use redux for state management.

### Useful resources

- [Nextjs](https://nextjs.org/) - This helped me understand some of the features of nextjs and their new updates.
- [React Docs](https://beta.reactjs.org/) - This is an amazing article which helped me finally understand the basic concepts of react. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Victor Eleanya](https://t.co/Gp89XxT3bs)
- Frontend Mentor - [@mrvicthor](https://www.frontendmentor.io/profile/mrvicthor)
- Twitter - [@eva_skillz](https://twitter.com/eva_skillz)

## Acknowledgments

I want to acknowledge that this project would not have been possible without the help of Babatunde for always making out time for code review sessions. And i will also like to thank the online coding community for their contributions through articles and post.
