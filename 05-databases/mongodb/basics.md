# Using MongoDB

## MongoDB Useful Commands

### Let's get Started!

We can access our MongoDB databases through two main methods: one would be through the Mongo Shell utility, and through it's different drivers for programming languages. To start the mongo shell, simply type `mongo`:

```
$ mongo

MongoDB shell version: 3.0.1
connecting to: test
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
  http://docs.mongodb.org/
Questions? Try the support group
  http://groups.google.com/group/mongodb-user
>
```

### Let's get some help!

#### Main Help
```
> help
  db.help()                    help on db methods
  db.mycoll.help()             help on collection methods

  help connect                 connecting to a db help
  help misc                    misc things to know

  show dbs                     show database names
  show collections             show collections in current database
  show users                   show users in current database
  use <db_name>                set current database

  db.foo.find()                list objects in collection foo
  db.foo.find( { a : 1 } )     list objects in foo where a == 1
  it                           result of the last line evaluated; use to further iterate

  exit                         quit the mongo shell
```

## Managing the Database

After starting the mongo shell, your session will use the `test` database by default.

```
> db                    // What's the current database?
test

> show dbs              // List all the dabatases in the server
local  0.078GB

> use db_wdi            // Create a new Database "db_wdi"
switched to db db_wdi
```


## Collections

A database contains zero or more `Collections`. A `Collection` is a grouping of MongoDB documents (the equivalent of an RDBMS table). A collection exists within a single database (you can't have a collection divided across multiple dabatases).

Collections do not enforce a particular [schema](http://en.wikipedia.org/wiki/Database_schema). Therefore, documents within a collection can have different fields.

Typically, all documents in a collection have a similar or related purpose.


## MongoDB NameSpaces

A “namespace” is the concatenation of the database name and the collection names with a period character in between.

Collections are **containers for documents that share one or more indexes**. Databases are groups of collections stored on disk using a single set of data files.

For an example in the `db_wdi.students` namespace, `db_wdi` is the database name and `students` is the collection name.

*Period characters can occur in collection names, so that wdi_db.students.grades is a valid namespace, with `wdi_db` as the database name, and `students.grades` as the collection name.*

More info: [MongoDB NameSpaces](http://docs.mongodb.org/manual/faq/developers/#faq-dev-namespace)

## Documents

Collections are composed of documents, but collections are just like folders in our filesystem, they allow us to group documents but they don't contain the data itself, for that we need documents.

Documents are JSON-like field and value pairs. Documents are analogous to data structures in programming languages that associate keys with values (e.g. dictionaries, hashes, maps, and associative arrays).


```js
{
   _id: ObjectId("5099803df3f4948bd2f98391"),
   name: { first: "Alan", last: "Turing" },
   birth: new Date('Jun 23, 1912'),
   death: new Date('Jun 07, 1954'),
   male: true,
   contribs: [ "Turing machine", "Turing test", "Turingery" ],
   views : NumberLong(1250000)
}
```

The above fields have the following data types:

- **_id**: holds an ObjectId, a unique number to represent that document
- **name**: holds an embedded document that contains the fields first and last
- **birth and death**: hold values of the Date type
- **male**: hold values of the Boolean type
- **contribs**: holds an array of strings
- **views**: holds a value of the NumberLong type

#### Field Names

The field name **_id** is reserved for use as a [primary key](http://en.wikipedia.org/wiki/Unique_key); its value must be unique in the collection, is [immutable](http://en.wikipedia.org/wiki/Immutable_object), and may be of any type other than an array.

*Field Names **cannot** start with a `$`, contain a `.` or contain `null`*

## Modelling Data

Data in MongoDB has a flexible schema. Unlike SQL databases, where you must determine and declare a table’s schema before inserting data, MongoDB’s collections do not enforce document structure. This flexibility facilitates the mapping of documents to an entity or an object. Each document can match the data fields of the represented entity, even if the data has substantial variation. In practice, however, the documents in a collection share a similar structure.

The key challenge in data modeling is balancing the needs of the application, the performance characteristics of the database engine, and the data retrieval patterns. When designing data models, always consider the application usage of the data (i.e. queries, updates, and processing of the data) as well as the inherent structure of the data itself.

### Document Structure

The key decision in designing data models for MongoDB applications revolves around the structure of documents and how the application represents relationships between data. There are two tools that allow applications to represent these relationships: references and embedded documents.

## Basics Queries

#### Inserting Data into a Collection

This how we can create and insert a document into a collection named _people_:

```
> db.people.insert({
    name: "Fred", // Don't type the dots, they are from the
    age: 21     // shell, indicating multi-line mode
})
```

Using a collection for the first time creates it!

#### Adding Lots of New Documents

In a moment we'll practice querying our database, but let's get more data in there. Here are few more documents to put in your _people_ collection. We can simply provide this __array__ to the _insert_ method and it will create a document for each object in the array.

```js
[
  {
    "name": "Emma",
    "age": 20
  },
  {
    "name": "Ray",
    "age": 45
  },
  {
    "name": "Celeste",
    "age": 33
  },
  {
    "name": "Stacy",
    "age": 53
  },
  {
    "name": "Katie",
    "age": 12
  },
  {
    "name": "Adrian",
    "age": 47
  }
]
```

> Note: Be sure to type the closing paren of the _insert_ method!


#### Find

To list all documents in a collection, we use the _find_ method on the collection without any arguments:

```
> db.people.find()
```

Again, unlike the rows in a relational database, our documents don't have to have the same fields!

#### More Specific Queries

We can also use the `find()` method to query the collection by passing in an argument – a JS object containing criteria to query with.

```
> db.people.find( {name: "Miguel"} )
```

There are a handful of special criteria variables we can use, too. Here's how we can use MongoDB's `$gt` query operator to return all _people_ documents with an age greater than 20:

```
> db.people.find( {age: { $gt: 20 } } )
```

MongoDB comes with a slew of built-in [query operators](http://docs.mongodb.org/manual/reference/operator/query/#query-selectors) we can use to write complex queries.

__How would we write a query to retrieve people that are less than or equal to age 20?__

In addition to selecting which data is returned, we can modify how that data is returned by limiting the number of documents returned, sorting the documents, and by projecting which fields are returned.

This sorts our age query and sorts by _name_:

```
> db.people.find( {age: { $gt: 20 } } ).sort( {name: 1} )
```
The "1" indicates ascending order.

[This documentation](http://docs.mongodb.org/manual/core/read-operations-introduction/) provides more detail about reading data.

#### Updating Data

In MongoDB, we use the `update()` method of collections by specifying the _update criteria_ (like we did with `find()`), and use the `$set` action to set the new value.

```
> db.people.update( { name: "Miguel" }, { $set: { age: 99 } })
```

By default `update()` will only modify a single document. However, with the `multi` option, we can update all of the documents that match the query.

```
> db.people.update( { name: { $lt: "M" } }, { $inc: { age: 10 } }, { multi: true } )
```
We used the `$inc` update operator to increase the existing value.

Here is the [list of Update Operators](http://docs.mongodb.org/manual/reference/operator/update/) available.

#### Removing Data

We use the `remove()` method to data from collections.

If you want to completely remove a collection, including all of its indexes, use `[name of the collection].drop()`.

Call `remove({})` on the collection to remove all docs from a collection. Note: all documents will match the "empty" criteria.

Otherwise, specify a criteria to remove all documents that match it:

```
>db.people.remove( { age: { $lt: 16 } } )
```
