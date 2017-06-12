# Building & Submitting Forms

### Objectives

- Write an HTML form that relates to a model's attributes
- Describe how inputs transform into a params hash on the server side
- Use params to create a new instance of a model

### Preparation

*Before this lesson, students should already be able to:*

- Identify HTTP verbs
- Create a model
- Build a RESTful controller

## Intro 

We have learned the basics of Rails, ActiveRecord (Model), Routes, Controllers and Views (ERB, Layout & Partial) last week. Today we will take a closer look at the one thing that ties all the MVC components together -- the HTML forms.

You have used HTML forms previously in the second project. As a quick refresher, we use HTML form to submit data from the browser to the backend. The key things we need to specify in a form are the `method` and the `action`. The `method` is one of the HTTP verbs: GET, POST, PUT (and PATCH) and DELETE. The `action` is the URL to which we are sending the quest.

In this lesson we are going to use the [Book Club](https://github.com/wdi-hk-10/sample-rails-book-club) Rails project as an example to understand how we can use HTML forms in Rails.

## Rails Routes and HTML Forms - Revisited

By now you should have a good understanding on how we can map a Rails route and a HTTP verb to a Rails controller method. If you have forgotten about them, this is now a good time to review them:

| Controller#Action | HTTP Verb | URI Pattern                   |
|-------------------|-----------|-------------------------------|
|   posts#index     |    GET    |  /posts(.:format)             |
|   posts#create    |    POST   |  /posts(.:format)             |
|   posts#new       |    GET    |  /posts/new(.:format)         |
|   posts#edit      |    GET    |  /posts/:id/edit(.:format)    |
|   posts#show      |    GET    |  /posts/:id(.:format)         |
|   posts#update    |    PUT    |  /posts/:id(.:format)         |
|   posts#destroy   |    DELETE |  /posts/:id(.:format)         |

## New 

### Create the link to the NEW form
We use the `new` action to open a form to collect user's input. Note that this action **DOES NOT** add a new object in database.

First we need to create a link in the main page so that user can click on it to open the form:

```html
<a href="<%=new_book_path%>">ADD</a>
```

The `new_book_path` is a path helper created by Rails. The path helper will return the route as defined in the results of `rake routes` (**Question**: Can you see why the path helper is called `new_book_path`?).

```
       new_book GET    /books/new(.:format)                       books#new
```

And the actual HTML looks like this:

```
<a href="/books/new">ADD</a>
```

### The NEW Controller method
In the Controller, our usual practice is to define a `new` method and then inside the method, we will create a blank object of the corresponding Model class. For example, if we need to create a new book, we should define the `new` method in the BooksController.

```ruby
  def new
    @book = Book.new
  end
```

`Book.new` will instantiate an empty `Book` object and we need to assign this object to an instance variable in the controller. The reason is that we want to use this variable in the form. Next Rails will render the file `app/views/books/new.html.erb` by default.

### View Pages

The view file `app/views/books/new.html.erb` is pretty simple as it simply renders the form partial files.

In the partial file `app/views/books/_form.html`, we use the `form_for` helper to create a HTML form:

```ruby
<%= form_for @book do |f| %>
```

The `@book` empty `Book` object is the same one we created in the controller. The `form_for` helper will create a HTML form with these attributes (the rest of the form are not shown):

```html
<form class="new_book" id="new_book" action="/books" accept-charset="UTF-8" method="post">
```

When the Rails router receives this request, the `action` value `/books` plus the `method` value `post` will be mapped to 'books#create'.

### Independent Practice - The New Form (15 mins)

This is an excerpt of the NEW form generated:

```html
<form class="new_book" id="new_book" action="/books" accept-charset="UTF-8" method="post">
  <div class="field">
    <label for="book_title">Title</label><br>
    <input type="text" name="book[title]" id="book_title">
  </div>
  <div class="field">
    <label for="book_author">Author</label><br>
    <input type="text" name="book[author]" id="book_author">
  </div>
  <div class="field">
    <label for="book_url">Url</label><br>
    <input type="text" name="book[url]" id="book_url">
  </div>
  <div class="field">
    <label for="book_isbn">Isbn</label><br>
    <input type="text" name="book[isbn]" id="book_isbn">
  </div>
  <div class="actions">
    <input type="submit" name="commit" value="Create Book">
  </div>
</form>
```
Compare this with `app/views/books/_form.html` and think about:
  - How are the HTML `<input>` tags generated?
  - What is the naming convention used in the `name` attribute of the `<input>` tags?
  - Why does the submit button have the label `Create Book`?

Bonus: How can we style a HTML form generated by the `form_for` helper?

## Create

In order for the previous form to work, the next thing we need to do is to define the `create` method in the `BooksController`.

### Strong Parameters

In Rails 4, we need to **whitelist** the attributes of a Active Model for mass assignment. Mass Assignment is a convenient way to populate attributes of an Active Model object by passing in a Hash to its `create` or `update_attributes` method. In this case we want to whitelist an pre-approved list of parameters which we can use for Mass Assignment. [Strong Parameters](https://github.com/rails/strong_parameters) is a plugin for the Action Controller that handles the whitelisting process.

In the Book Controller, we have to define a `private` method called `book_params`. The name of the method follows the `Strong Parameters`' naming convention.
``` ruby
  private
    def book_params
      params.require(:book).permit(:title, :url, :author, :isbn)
    end
```

### Create a book

We simply perform a mass assignment by directly passing the whitelisted request parameters into the `create` method.

``` ruby
  def create
    Book.create(book_params)

    redirect_to main_path
  end
```

### Independent Practice - Edit and Update (30 mins)

Take a look at the code in [Book Club](https://github.com/wdi-hk-10/sample-rails-book-club) and try to figure out how to implement **Edit** and **Update** based on the above example? Try to work with a partner if you like.

Here are the questions you need to answer:
  - What is the path helper that can generate a route to the Edit form?
  - Which additional methods we need to add in the Book Controller?
  - Which `html.erb` page do we need to add?

You don't really need to clone the repo and write the code as it requires some data preparation. But if you really want to give it a shot, feel free to try.

## Delete

A delete action does not require a new page but it is usually triggered by links or buttons. In this case, we just need to generate the right path in your HTML/ERB and the implement the `destroy` method in the controller. Here is an example of how to create a link that triggers the delete action of a review, in `app/views/reviews/index.html.erb`.

```html
  <%= link_to review_path(review), method: :delete confirm: 'Are you sure?' } do %>
    <i class="fa fa-times"></i>
  <% end %>
```

The `review_path` helper generates the path `/reviews/1` where `1` is the ID of the review we plan to delete. And we also need to specify the HTTP method using `method: :delete`.

The in the `ReviewsController`, we should define the `destroy` method:

```ruby
  def destroy
    # Let's just do hard delete for now
    # And yeah this :update is also a class method 
    Review.delete(params[:id])

    redirect_to user_reviews_path(@current_user)
  end
```

After deleting the review, we will redirect back to the Reviews index page.

## Using Path Helper for Nested Resources

Let's take a look at how we can use path helper on nested resources.

Hmm... what are nested resources, you say? Let's check out the `routes.rb` in the Book Club sample.

```ruby
  resources :books do
    resources :reviews, only: [:new, :create, :edit, :update]
  end
```

Here, Review is a nested resource of Book. So the paths generated by this block will look like this.

```
    book_reviews POST   /books/:book_id/reviews(.:format)          reviews#create
 new_book_review GET    /books/:book_id/reviews/new(.:format)      reviews#new
edit_book_review GET    /books/:book_id/reviews/:id/edit(.:format) reviews#edit
     book_review PATCH  /books/:book_id/reviews/:id(.:format)      reviews#update
                 PUT    /books/:book_id/reviews/:id(.:format)      reviews#update
```

In order to create a form for new review, we need to first create a link to opem the form. This is done in `app/views/home/main.html.erb` by using the `new_book_review_path` helper. We need to pass in a `Book` object here because the path requires the `:book_id`. 

```html
<a href="<%=new_book_review_path(book)%>"><img src="<%=book.url%>"></a>
``` 

Then we will need a form for users to type the review. Here we need to use the `form_for` helper again. You can find this in `app/views/reviews/_form.html`:

```ruby
<%= form_for [@book, @review] do |f| %>
```

This form will be used for both `new` and `edit` so the `form_for` helper will generate two paths depends on the situation.

  - `new`  : `@review` is an empty review with no `id` so the path generated will be the same as `book_reviews_path(@book)` using method `POST`.
  - `edit` : `@review` will be a review with an `id` so the path generated will be the same as `book_review_path(@book, @review)` using method `PUT`. 

## Conclusions

The path helper, form helper and various other helpers in Rails are convenient tools when we need to render paths and forms in our View files. However, what we have reviewed in this lesson is just a practical example of how we can use them. To understand more, please read the official guides:

 - [Rails Guides: Form Helpers](http://guides.rubyonrails.org/form_helpers.html)
 - [Rails Guides: Path and URL Helpers](http://guides.rubyonrails.org/routing.html#path-and-url-helpers)



