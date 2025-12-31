---
title: How I Learned to Code
summary: From learning the basics of HTML to the complexities of data structures and algorithms
date: 2022-12-26T12:00:00.000Z
tags: []
---

![](https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/3a4af70585c1df5bd94a5f4df6af9346.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)

## Starting with HTML

HTML, short for HyperText Markup Language, is where I initially started my journey many years ago by altering my Tumblr
blog templates to better suit my style. HTML is a markup language used to structure and organize web content. It defines
the structure of web pages by using a series of elements and tags which are then interpreted by web browsers to display
content correctly.

When I initially started learning HTML, it taught me to alter the **content** of the page. More specifically, it allowed
me to specify how different types of content, such as text, images, audio, etc., should be displayed. When I had
reinvigorated my learning of programming (the whole story can be
read [here](/posts/gamer-to-dev), this is where I started—I had
several reasons why I started here, which I didn't understand initially, but that has become clearer as time has
passed.

For one, HTML is the foundation of the web—it is the standard markup language used for creating pages as well as web
applications. In addition, it is easy to learn and use. The syntax is straightforward and uses familiar elements (
headers,
paragraphs, lists). From a developer's standpoint, HTML is essential for SEO as search engines use the structure and
content of a webpage, defined as HTML, to understand the **content** and **context** of a page.

Finally, HTML is widely used and supported by all modern web browsers and is the basis for many other technologies and
frameworks, such as CSS and JavaScript. It is also _crucial_ to know the more intimate details of HTML to
ensure accessibility for individuals who need it.

What was the first task I tackled using HTML? Writing out the content of a brownie recipe web page, as seen below.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
</body>
</html>
<h1>Deep Dish Brownies</h1>

<img
	src="https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg"
	alt="Brownies">

<h4>Recipe by: Biz McMahon</h4>

<h2>Related Recipes</h2>
<ul>
	<li>
		<a href="#">Chewiest Brownies</a>
	</li>

	<li>
		<a href="#">Can't Tell They're Low-fat Brownies</a>
	</li>

	<li>
		<a href="#">Bodacious Brownies</a>
	</li>

	<li>
		<a href="#">Katrina's Best-Ever Chocolate Brownies</a>
	</li>

	<li>
		<a href="#">Easy Fudge Brownies</a>
	</li>
</ul>

<h2>Prep Time</h2>
<span>60 mins</span>

<h3>Servings</h3>
<span>9</span>

<h2>Ingredients</h2>
<ul>
	<li>3/4 cup butter, melted</li>
	<li>1 1/2 cups white sugar</li>
	<li>1 1/2 teaspoons vanilla extract</li>
	<li>3 eggs</li>
	<li>3/4 cup all-purpose flour</li>
	<li>1/2 cup unsweetened cocoa powder</li>
	<li>1/2 teaspoon baking powder</li>
	<li>1/2 teaspoon salt</li>
</ul>


<h2>Directions</h2>

<ol>
	<li>Preheat oven to 350 degrees F (175 degrees C) and Grease an 8 inch square pan.</li>

	<li>In a large bowl, blend melted butter, sugar, and vanilla.</li>

	<li>Beat in eggs one at a time.</li>

	<li>Combine the flour, cocoa, baking powder, and salt. Gradually blend into the egg mixture.</li>

	<li>Spread the batter into the prepared pan.</li>

	<li>Bake in preheated oven for 40 to 45 minutes, or until brownies begin to pull away from the sides of the pan.
	</li>

	<li>Let brownies cool, then cut into squares. Enjoy!</li>
</ol>


<h3>Tip</h3>

<p>Aluminum foil can be used to keep food moist, cook it evenly, and make clean-up easier.</p>


<h6>Nutritional Info</h6>

<span>340 cals</span>


<p>Find this recipe
	<a href="http://allrecipes.com/recipe/11063/deep-dish-brownies">here</a>
</p>
```

## Styling with CSS

Just like my experience with HTML, I originally used CSS, or Cascading Style Sheets, to fiddle around with colors and
text sizes. CSS describes the _look_ and _formatting_ of a document written in HTML. It is an important part of modern
web development because it allows developers to separate the content of the webpage (HTML) from its presentation (CSS).
Because of this, I was able to create a web page that not only contained the content I wanted, but that looked good as
well.

CSS, while able to make things look good, has other benefits. It allows you to centralize styling information for a
website, so you don't have to repeat the same styling constructions for every webpage and element. Furthermore, it
allows for greater control over the appearance of a website. CSS grants fine-grained control over the look and feel of a
website by specifying different styles for various elements, devices, and screen sizes. That means you can create a
responsible and adaptive website that looks great on any device.

Using CSS can improve the performance of a website since it can minimize the use of HTML tags, as it allows you to
define styles for multiple elements in a single stylesheet, rather than repeating the same styles for each element in
the HTML. In addition, it allows the browser to apply the styles to the web page without having to parse and apply the
styles directly in the HTML. Since the HTML document will be smaller and more streamlined and the browser only has to
read and apply the styles once, versus for each element in the HTML document, this improves the overall performance of
the web page.

To get a better understanding of how HTML and CSS interacted, I spent some time cloning some popular
websites, [TechCrunch](https://github.com/LadyBluenotes/100Devs/tree/main/Front%20End/HTML%20%26%20CSS%20-%20TechCrunch%20Clone), [BBC](https://github.com/LadyBluenotes/100Devs/tree/main/Front%20End/HTML%20%26%20CSS%20-%20BBC%20Clone)
and [Khan Academy](https://github.com/LadyBluenotes/100Devs/tree/main/Front%20End/HTML%20%26%20CSS%20-%20Khan%20Academy%20Clone),
to better understand how the content and styling of the website interacted with one another.

## Bringing it all together with JavaScript

JavaScript (JS) is a powerful and versatile programming language that can create interactive and dynamic websites and
applications. Not only is it powerful since it permits the creation of complex programs, but it is widely supported
and popular. I can best describe JS as a way to add certain behaviors to web pages.

When a user loads a webpage that contains JavaScript, their web browser executes the JS code. This allows for the page
to be more interactive and dynamic versus the more traditional static document. Since this code can be used to access
and manipulate the HTML and CSS of a page, it offers new functionality like showing items in a drop-down menu or
animating elements by changing their style property. JS, while able to be used to manipulate style, has many more
complex capabilities.

JavaScript is capable of full-stack development. On the front-end, a developer can use it to build the user interface
of a web application using libraries and frameworks like React, Angular, and Vue.js. These libraries provide the tools
for building an interactive and responsive user interface and allow developers to create single-page applications that
can run in a web browser, improving the user experience, reducing server load, and providing faster performance as well
as better search engine optimization.

On the back-end, JavaScript can be used to build the server-side of a web application using a runtime environment like
Node.js, which helps developers use JS for tasks like handling HTTP requests, accessing databases, and more.

In addition to front and back-end development, JS also excels at tasks such as testing, automation, and deployment.
There
are frameworks like Mocha and Jasmine to test your code, and tools like Grunt or Gulp to automate tasks such as
minification and optimization. JS can also create interactive data visualizations using libraries like D3.js, making it
easier to understand and analyze data.

Being as powerful as it is, JavaScript introduced the possibility of developing full-stack applications, which include
the client and server-side functionality. In exploring this topic, I made an effort to build something at every major
milestone—including building when I was introduced to a new framework or library. Some of the projects I did were:

- Create a task list
- Used a cocktail API that users could interact with
- Using NASA API to showcase daily photos
- Make a pokedex

You can find projects I've made on [my GitHub](https://github.com/LadyBluenotes).

## Where data structures and algorithms come in

Entering web development, I thought I would just create some pretty websites or useful applications or potentially
contribute to software that I enjoy using myself. The development of applications requires some foundational knowledge
of data structures and algorithms (DSA). So what are they and why are they important?

Data structures specialize in storing and organizing data in a specific way that enables efficient access and
modification. Algorithms, on the other hand, are step-by-step procedures to solve a problem or achieve a goal. They are
typically designed to be executed by a computer, but they can also manipulate data structures as well as perform tasks
such as searching, sorting, and pattern matching.

In programming, DSAs are important because they provide the foundation for efficient and effective problem-solving.
Choosing the right DSA for a given task improves the performance of the program—something that is otherwise known as
Big O Complexity.

Big O Complexity is basically a measure of efficiency used to describe performance. Big O, where the O stands for "order
of growth" is also used to determine the worst-case scenario to see how well things will perform under different
conditions. The two aspects of Big O are time, which assesses how long it will take for the function to execute, and
space, which looks at how much space will be taken up.

Now, why is this needed and why should you have a good understanding? Some will say it's to pass the interviews and, to
a point, that's true. In pursuing a career in software you must understand DSA as they are commonly involved in the
interview process—specifically they're a part of technical tests. However, there is more to it than just passing a
technical test.

DSA forms the foundation of computer science and is used in many areas of software development, including database
systems, operating systems, and computer networks. Knowing how different DSAs can help you make more informed decisions
leads to more efficient and effective solutions.

### What I learned

While learning these topics, I discovered that learning and building in tandem were what worked best for me. I managed
to learn the fundamentals of some important topics as well as build projects to showcase my skills. I did all of this
while expanding my understanding of the nuances of each aspect and creating a solid foundation before moving on to the
next task.

Each project taught me something different, each topic introduced me to a world of opportunities. Having learned things
this way, I feel that going forward I can easily apply what I know to other languages to better pick things up.

I'm currently focusing on building some more involved projects with the stack I have now, as mentioned above, all while
growing my understanding of DSAs.

Isn't learning fun?
