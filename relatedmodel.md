relatedmodel.md


Problems to solve:

- sharing model references
- Store reference in models (each Model.all() has it's own cache store? kinda spine-like)
- memorystore (shared-collections)
- create new model, find, or fetch
- support thin/fat model pattern
- model relations: choose associations or relational and implement. (tied to shared collections for a cache store)


- how to expire removed models from shared collections.
  e.g. how can the labeled mixin add a collection.remove handler?

**Backbone.Relational is pretty awesome, but I get caught up on:**
- egg.has('bacon') returns undefined instead of id, it becomes a model after fetchRelated.


MemoryStore
  - stores references
  - findOrCreate(type, id) // but what if it does't save?
  - get(cachekey)
  - set(cachekey)
  - register(type, initialData)
  - unset(cacheKey)

RelModel
  - has a relations hash (one and many are inferred by value)
  - fetchRelated('key' || all)


  - override fetch

    relations: [
      {
        type: Backbone.One,
        key: 'bacon',
        relatedModel: Bacon,
        // possibly?
        // includeInJSON?
      }


## api scratch

fetchRelated(key<string>, [options<object>], [update<boolean>])
Klass.findOrCreate(attributes<string|number|object>, [options<object>])

getRelation(name<string>

getRelations()


set(key<string>, value, [options<object>]) or set(attributes<object>, [options<object>])

  // Backbone-relational
  relations: [
    {
      type: Backbone.HasMany,
      key: 'customers',
      relatedModel: 'Customer',
      autoFetch: true
    }
  ]

  //Backbone Associations
  relations: [
    {
      type: Backbone.One, //nature of the relationship
      key: 'manager', // attribute of Employee
      relatedModel: 'Employee' //AssociatedModel for attribute key
    }
  ],