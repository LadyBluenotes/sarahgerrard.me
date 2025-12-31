---
title: "HTML for Beginners: Tags and Accessibility"
summary: Discover the role of HTML tags and how they make your website accessible
date: 2023-01-01T12:00:00.000Z
tags: [ 'html', 'accessibility', 'technical' ]
---

![](https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/6b40d743c5e58ff0d5234629059ec5a0.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)

## What is HTML?

HTML, or HyperText Markup Language, is a standard language that all modern web browsers use as it plays a crucial part
in the way that the internet functions. Specifically, it is used to create and structure the content of a website. It
defines the structure and layout of a webpage, including the text, images, and other media that appear on the page.

HTML is written using a series of tags, which are elements of the language, that enclose content within a page. These
tags define the structure and formatting of the content, such as headings, paragraphs, lists, and links. It is often
used in conjunction with other technologies, such as Cascading Style Sheets (CSS) and JavaScript, to create more
interactive and dynamic websites. Together, these are important tools for web developers and designers as it allows them
to create websites that are visually appealing, easier to navigate, and accessible to users.

## The role of tags in HTML

HTML tags are elements that are used to structure and format the content of a website. They enclose the content within a
webpage and usually have an opening and closing tag. For example, the `<p>` tag is used to create a paragraph and looks
like the following:

```xml

<p>This is a paragraph of text.</p>
```

The opening `<p>` tag indicates the start of the paragraph and the closing `</p>` tag indicates the end of the
paragraph. The content that appears between the opening and closing tags - in this case, "This is a paragraph of
text." - is the content formatted as a paragraph.

Some common HTML tags include:

* `<h1>` : create a heading
* `<p>` : creates a paragraph
* `<img>` : inserts an image
* `<div>` : creates a container for content
* `<ol>` : creates an ordered list
* `<ul>` : creates an unordered list
* `<form>` : creates a form for user input

These are just a few examples of the many available HTML tags. Each tag has a specific purpose and function and can be
combined and used in different ways to create a wide variety of web content and layouts.

A more comprehensive list of these tags can be found on the MDN web
docs [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories).

## The semantics of it all

Using the correct HTML tags and maintaining a clear and logical structure is important for several reasons:

* It helps make content easier to understand for both humans and assistive technologies.
* It allows search engines to index and understand the content on a website, which can improve ranking in search
  results.
* It makes the HTML code easier to maintain and read, as it indicates the structure and purpose of the content.

Using the correct HTML tags also plays an important role for accessibility. By using semantic tags to indicate the
structure and purpose of the content, users with disabilities can easily understand and navigate content.

The context in which a developer uses an HTML tag is used is important as it helps convey the meaning and purpose of the
content it encloses. Additionally, it helps make the website more user-friendly and accessible to a wider range of
visitors.

Some examples of proper semantic HTML:

* Using the `<h1>` tag for the main heading of a page and using `<h2>`, `<h3>`, etc. for subheadings:

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

* Using the `<p>` tag for paragraphs of text:

```xml

<p>This is a paragraph of text.</p>
<p>This is another paragraph of text.</p>
```

* Using the `<ul>` and `<li>` tags for an unordered list:

```xml

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### Deprecated tags

With the evolution of CSS, certain HTML tags have become deprecated as they are no longer used in the context of
styling. It's important to note that while some HTML tags have been deprecated, others are still in use and supported by
modern browsers. However, examples of some more commonly deprecated tags are:

* `<big>` and `<small>` : These tags were used to increase or decrease the size of text, but have been deprecated in
  favour of CSS for styling.

* `<s>` and `<strike>` : These tags were used to strike through text, but have been deprecated in favour of `<del>` tag.

* `<spacer>` : This tag was used to display preformatted text on a webpage but has been deprecated in favour of the
  `<pre>` tag.

* `<b>` : This tag was once used to display bolded text but has been deprecated in favour of CSS for styling. Should the
  developer wish to emphasize content they are recommended to use `<strong>`.

* `<i>` : This tag was used to indicate italicized text, but it has since been deprecated; `<em>` which is semantically
  more appropriate as it indicates emphasis and is not just stylistically needed.

It is generally recommended to use modern HTML tags and techniques to create web content and to avoid using deprecated
tags as they may not be supported by all browsers or accessible to all users. Some tags are to be used with caution,
such as `<table>`, as they can create accessibility issues for users of assistive technology.

In using HTML tags and techniques, you can create web content that is more accessible, user-friendly, and compatible
with a wide range of devices and browsers.

## Now let's make it accessible

Accessibility refers to the practice of designing web content and applications that can be used by people with
disabilities or impairments. This includes individuals who need assistive technologies, such as screen readers, as well
as those with visual, auditory, motor, or cognitive impairments.

To make a website more accessible, it is important to use HTML tags correctly and consistently. This includes semantic
tags (which provide meaning to the content they enclose) to indicate the structure and purpose of the content. For
example, you would use `h1` to indicate the most important heading on the page and `<h6>` to indicate the least
important subheading.

Attributes are another aspect of HTML tags that are critical in creating accessible environments. They provide
additional information about an element or its content that can be used with assistive technologies, add additional
information about the element, or modify the default behaviour. Several attributes can be used by assistive
technologies, some of the more critical ones are mentioned below.

### The `alt` Attribute

This attribute is used to provide a text alternative for images and other media. As an important attribute,`alt`
introduces a way for users who are unable to see the content to understand the content and context of the image. An
example of how it is used:

```html
<img src="image.jpg" alt="A photograph of the night sky over the ocean">
```

There are a few general guidelines to follow when writing `alt` attribute text:

* If the image is purely decorative and adds no meaningful content to the page, the attribute should be left empty (
  `alt=""`). This tells the assistive technologies to *ignore* the image.

* If the image conveys important information or is a part of the content of the page, a brief, concise description of
  the image should be provided.

* If the image is complex or contains a lot of details, a more detailed description of the content and context should be
  added.

By using the `alt` attribute correctly, you can make your website more accessible and user-friendly for a wider range of
users.

### `aria-*` attributes

Accessible Rich Internet Applications, or ARIA, attributes are a set of HTML attributes that can be used to improve the
accessibility of a website. These provide additional information about the role and state of an element and are
particularly useful for custom widgets and interactive elements that may not have a corresponding HTML tag.

Using ARIA attributes can help make websites more user-friendly and accessible to a wider range of users because it
provides additional information for assistive technologies.

Some common ARIA attributes include:

* `aria-labelledby`: This attribute is used to associate an element with a label that is defined elsewhere on the page.
  The value of the attribute is the `id` of the element that contains the label text. For example:

```html
<label id="name-label">Name:</label>
<input type="text" aria-labelledby="name-label">
```

In this example, it associates the input field with the "Name:" label. This helps users understand the purpose of the
field and can be read by assistive technologies.

* `aria-describedby`: This attribute is used to associate an element with a description that is defined elsewhere on the
  page. The value of the attribute is the `id` of the element that contains the description text. For example:

```html

<div id="description">Please enter your name in the field above.</div>
<input type="text" aria-describedby="description">
```

In this example, it is used to associate the input field with the description text. This provides additional context and
instructions for the field and can be read by assistive technologies.

* `aria-hidden`: This attribute is used to indicate that an element is not visible to users and should be ignored by
  assistive technologies. The value of the attribute is a boolean (`true` or `false`). For example:

```xml

<div aria-hidden="true">This content is hidden and will not be read by assistive technologies.</div>
```

In this example, the `aria-hidden` attribute is set to `true`, which indicates that the content of the `div` element
should be ignored by assistive technologies.

* `aria-expanded`: This attribute is used to indicate whether an element is expanded or collapsed. It is often used with
  widgets such as accordions and tree views. The value of the attribute is a boolean (`true` or `false`). For example:

```xml

<button aria-expanded="false">Show More</button>
```

In this example, the `aria-expanded` attribute is set to `false`, which indicates that the content associated with the
button is currently collapsed. When the button is clicked and the content is expanded, the value of the attribute can be
changed to `true`.

In using these and other ARIA attributes correctly, you can provide additional context and information about an element
that can help users with disabilities better understand and interact with your website.

## Wrap up

With HTML being the foundation of the web, it is critical that whoever develops websites and web-based applications have
a solid understanding of the basics of HTML. By better understanding these basics, you can see how web pages and
applications are constructed as well as how to create and manipulate content using tags and attributes. In addition,
HTML can create more accessibility within websites.

HTML accessibility is important because it helps to ensure that web content is accessible to as many users as possible,
including those with disabilities or impairments that may make it difficult for them to access the content
traditionally.

Many different types of disabilities and impairments can affect a person's ability to access web content, including
those of a visual, motor, cognitive, and hearing nature. By creating content that is accessible to users with these and
other disabilities, you can help to make the web more inclusive and user-friendly for everyone.

In addition to being the right thing to do, creating accessible HTML content can also have practical benefits for your
website or business. By using semantic HTML tags to provide context to the content, and by following the best
accessibility
practices, developers can create web pages and applications that are more user-friendly and accessible to all users,
including those with disabilities or impairments.

Understanding the basics of HTML and following accessibility guidelines can help developers to create web content that
is more inclusive, user-friendly, and accessible to a wide range of visitors and devices.