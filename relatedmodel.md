relatedmodel.md


Problems to solve:

- sharing model references
- Store reference in models (each Model has it's own cache store?)
- memorystore (shared-collections)
- create new model, find, or fetch
- support thin/fat model pattern
- model relations: choose associations or relational and implement. (tied to shared collections for a cache store)


- how to expire removed models from shared collections.
  e.g. how can the labeled mixin add a collection.remove handler?


MemoryStore
  - stores references
  - findOrCreate(type, id)

BaseModel
  - has a relations hash (one and many are infered by value)
  - fetchRelated()

  - override fetch

    relations: [
      {
        type: Backbone.One,
        key: 'bacon',
        relatedModel: Bacon
      }
