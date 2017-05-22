# HTML: Introduction

### Objectives
*After this lesson, students will be able to:*

- Understand the two key concepts behind HTML: `HyperText` and `Markup`
- Create a simple HTML document using common HTML tags
- Type a beautfully *indented* HTML document

### Preparations
If you have ever used a web browser to look at a web site, then you are all set!!

## HTML (HyperText Markup Language)

#### Two new concepts:
- *HyperText* is a text which contains links to other texts.
- *Markup language* is used to control the presentation of data.

#### What is HTML?
HTML is a markup language which instructs a Web browser how to display a web page. HTML uses a set of `tags` to describe different type of `content`. 

For example, in HTML, we display a new paragrah in an article by enclosing the text of the paragran with the opening tag `"<p>"` and the closing tag `"</p>"`.
```html
<p>Look, Ma! I have created a new paragraph using HTML!</p>
```
The idea is to wrap the **content** within the HTML tags. When the browser reads the HTML file, it can determine how the content should be structured based on the tags.

*IMPORTANT*: Always remember the closing tags. In fact, the *BEST* practice is to always type the closing tag *RIGHT AFTER* you have typed the opening tag, then insert the content between the tags. This will save you from hours of painful wild goose chase of the missing closing tag.


## Basic structure of a HTML page

#### HTML (HyperText Markup Language)
A HTML document always starts with these. 
```html
<!DOCTYPE html>
<html lang="en-US">
  (content)
</html>
```

#### Head and Body
Then put in a `<head>` tag and the `<body>` tag.
```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
  </head>
  <body>
  </body>
</html>
```

#### Metadata
The `<meta>` tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable. Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata.
In other words, **metadata** is a set of data that describes and gives information about **other data**
```html
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <title>Breeding Dogs—Tips about Alsatians</title>
    <meta name="description" content="How to breed Alsatians, tips on proper breeding and information about common issues with this breed.">
    <meta name="keywords" content="Dogs,Alsatian,Breeding,Dog,Tips,Free,Pet">
    <link rel="stylesheet" type="text/css" media="screen" href="styles.css">
    <script src="myJavascript.js"></script>
  </head>

  <body>
  </body>
</html>
```

#### HTML Tags
- HTML tags do NOT, on their own, define the styling (look) of the website.
- Any difference in the look of the page as a result of ONLY HTML is simply the default styling that the browser applies to the HTML, and this can differ between browsers.
- "Styling" via just HTML tags is unreliable and not standards-compliant.
    - `<i>` represents some text in an alternate voice or mood
    - `<i>Hello</i>` will appear in italic style on browsers, but you should never use `<i>` just to make text italic.
- Using the correct tags in your HTML is essential for creating a meaningful website for the blind and webcrawlers
- The documentation is your best friend. Bookmark it: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

###### Basic elements
| Element | Description |
|---------|--------------|
| `<html>` | The HTML root element (&lt;html&gt;) represents the root of an HTML document. All other elements must be descendants of this element. |
| `<head>` | The HTML Head Element (&lt;head&gt;) provides general information (metadata) about the document, including its title and links to or definitions of scripts and style sheets |
| `<link>` | The HTML Link Element (&lt;link&gt;) specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation. This Element is most used to link to style sheets. |
| `<meta>` | The HTML Meta Element (&lt;meta&gt;) represents any metadata information that cannot be represented by one of the other HTML meta-related elements |
| `<title>` | The HTML &lt;title&gt; element (HTML Title Element) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted. |
| `<body>` | The HTML &lt;body&gt; element represents the content of an HTML document. There is only one <body> element in a document. |
| `<h1>..<h6>` | Heading elements implement six levels of document headings, `<h1>` is the most important and `<h6>` is the least.  |
| `<nav>` | The HTML Navigation Element (&lt;nav&gt;) represents a section of a page that links to other pages or to parts within the page: a section with navigation links. |
| `<div>` | The HTML &lt;div&gt; element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. |
| `<figure>` | The HTML &lt;figure&gt; Element represents self-contained content, frequently with a caption (&lt;figcaption&gt;), and is typically referenced as a single unit.  |
| `<li>` | The HTML List item element (&lt;li&gt;) is used to represent a list item. |
| `<p>` | The HTML &lt;p&gt; element (or HTML Paragraph Element) represents a paragraph of text. |
| `<a>` | The HTML &lt;a&gt; Element (or the HTML Anchor Element) defines a hyperlink, the named target destination for a hyperlink, or both. |
| `<script>` | The HTML &lt;script&gt; element is used to embed or reference an executable script within an HTML or XHTML document. |

#### Secret to type beautfiul HTML: Indentations
- Use precise indentation - Be a neat freak!

#### Semantic Tags
- Uses **semantic** tags to give meaning to the document for webcrawlers and screen readers for the blind
- **Semantic** - gives **meaning** in language or logic
```html
<div>
  <div>
    <h1>How to write good HTML?</h1>
    <p>Make sure you close the tags and use indentations properly.</p>
  </div>
</div>
```
```html
<article>
  <section>
    <header>How to write good HTML?</header>
    <p>Make sure you close the tags and use indentations properly.</p>
  </section>
</article>
```

| Tag | Description |
|---------|--------------|
| `<article>` | Defines an article |
| `<aside>` | Defines content aside from the page content |
| `<details>` | Defines additional details that the user can view or hide |
| `<figcaption>` | Defines a caption for a <figure> element |
| `<figure>` | Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. |
| `<footer>` | Defines a footer for a document or section |
| `<header>` | Specifies a header for a document or section |
| `<main>` | Specifies the main content of a document |
| `<mark>` | Defines marked/highlighted text |
| `<nav>` | Defines navigation links |
| `<section>` | Defines a section in a document |
| `<summary>` | Defines a visible heading for a &lt;details&gt; element |
| `<time>` | Defines a date/time |

#### Thought Experiment
- You know what a website means because you can see the website - see the navbar, see the login section, see the titles for each article, etc.
- **Imagine** that you are blind. 
    - You are a blind person who depends on a machine to read you the parts of a website and give you their meaning.
    - You are a blind automated web crawler (like Google) that needs to go through the code of your website and figure out what parts of your website mean (so it can give its users more accurate search results).
- **How do you figure out what sections of the website are for?**


#### Independent Practices
- Create a new folder called `MyWebsite`
- Create a file called `index.html`
- Open up in Sublime
- Refer to this morning's assessment, present 2 of the questions and YOUR answers using HTML.
  - Present one question using HTML tags and then present the other using semantic tags.
- Bonus: 
  - Try to display the headers of the assessment page in the HTML file.
  - Try to present Question 7 using HTML tags.
  - Try to copy and paste this line and add this to the line after the &lt;body&gt; tag. What would happen?
  ```html
<p>This is a the <div> tag</p>
```
