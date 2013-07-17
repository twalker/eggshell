relatedmodel.md


Problems to solve:

- sharing model references
- Store reference in models (each Model.all() has it's own cache store? kinda spine-like)
- memorystore (shared-collections)
- create new model, find, or fetch
- support thin/fat model pattern
- model relations: choose associations or relational and implement. (tied to shared collections for a cache store)

- how to avoid circular/reverse references that'll kill requirejs dependency tree

- how to expire removed models from shared collections.
  e.g. how can the labeled mixin add a collection.remove handler?

**Backbone.Relational is pretty awesome, but I get caught up on:**
- egg.has('bacon') returns undefined instead of id, it becomes a model after fetchRelated.

**supermodel looks stale**

**backbone associations is focused on events**

** relational, associations, supermodel, etc. the require my model extend/inherit theirs. I want a mixin **

MemoryStore
The memory store gets and sets collection and model references for re-use accross
the application.

  - stores references
  - findOrCreate(type, id) // but what if it doesn't save?
  - get(cachekey)
  - set(cachekey)
  - register(type, initialData)
  - unset(cacheKey)

RelModel
  - has a relations hash (one and many are inferred by value)
  - fetchRelated('key' || all)


  - override fetch?!? YAGNI?

    relations: [
      {
        type: Backbone.One, // infer from string or array?
        key: 'bacon',
        relatedModel: Bacon,
        // possibly includeInJSON?
        // possibly autofetch
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


## Use case

    // in route
    var campaign = refStore.get("campaigns").get(id);
    campaign
      .fetch()
      .then(function(){
        campaign
          .fetchOrCreateRelated('sms')
          .done(onFetched);
      });

    
