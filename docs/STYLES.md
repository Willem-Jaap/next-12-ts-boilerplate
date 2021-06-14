# **Styles**

##### Styling architecture guide by [Willem-Jaap Klepper.](https://www.linkedin.com/in/willem-jaap-klepper-5778a0195/)

### **Structure**

The styles architecture of this project is seperated into different layers. This way of splitting CSS is based on [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) but with some changes.

### **Classes**

Classnames are written in [BEM.](http://getbem.com/introduction/)
This stands for Block Element Modifier

### **Examples:**

```html
<div className="card card--black">
    <img src="" className="card__banner" />
    <!-- If the design is consistent you can use HTML tags withouth aditional styling. otherwise this h2 would have a 'card__title' class. -->
    <h2>Lorem ipsum</h2>
    <!-- card__description if you need to style this. -->
    <p>Lorem ipsum dolor sit amet consectetur.</p>
</div>
```

```scss
// Card is the block or component. In react every block is often a component if you split your code.
.card {
    background: white;
    padding: 2rem;

    // Element (__). The banner is an element of the card block.
    &__banner {
        height: 20rem;
        object-fit: cover;
    }

    // Modifier (--). Modifies component or element. this class modifies existing styling.
    &--dark {
        background: black;
        color: white;
    }
}

// Another example.
.btn {
    // This would be all the styling for a basic button.
    &--primary {
        // This would contain additional styling for a button with the classes 'btn btn--primary'.
    }
}
```

Every SCSS partial starts with an underscore. All these files get imported in the correct order in `_imports.scss`. This file gets imported in `style.scss`

### **Abstracts**

The first layer of CSS which does not contain actual styling. It contains [mixins](https://sass-lang.com/documentation/at-rules/mixin), [functions](https://sass-lang.com/documentation/at-rules/function) & [variables](https://sass-lang.com/documentation/variables) for the project.

### **Settings**

Styling resets and all base styling for bare HTML tags. also contains font definitions e.t.c.

### **Components**

This folder contains styling per component. For example the styling for a sidebar would be placed in `/components/_sidebar.scss`.

### **Layouts**

Placed here are specific layouts for views. You shouldn't need this much as your HTML markup & styling from the components will do most of the work. Extra margin, padding or flex layouts can be made with utility classes (like Bootstrap)

### **Utilities**

Utility classes to add quick styling to a HTML tag. Mostly use these to create layouts or for things like text styling.

### Example:

```html
<!-- Display flex utility class. -->
<div className="flex--center">
    <!-- Text bold class. -->
    <p className="t--bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum ab ratione voluptas iste
        inventore?
    </p>
</div>
```