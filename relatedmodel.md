relatedmodel.md


Problems to solve:

- fetch model, create new model, find, or fetch
- cleanly collect array of models to a fetchAll method

- sharing model references
- Store reference in models (each Model.all() has it's own cache store? kinda spine-like)
- memorystore (shared-collections)


- support thin/fat model pattern (manuall recall what's been fetched?)
- model relations: choose associations or relational and implement. (tied to shared collections for a cache store)

- how to avoid circular/reverse references that'll kill requirejs dependency tree

- how to expire removed models from shared collections.
  e.g. how can the labeled mixin add a collection.remove handler?

**Backbone.Relational is pretty awesome, but I get caught up on:**
- egg.has('bacon') returns undefined instead of id, it becomes a model after fetchRelated.

**supermodel is much more in line with functional, but looks stale, must try!!!**

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


## Use cases

    // get a related model, if it exists
    var sms;
    if(campaign.has('sms')){
      sms = campaign.getRelated('sms');
      // OR
      campaign.fetchRelated('sms')
    }
    // saving
    campaign.setRelated('sms', newSMSModel);
    campaign.setRelated('rules', newRuleCollection);

    // fetch related models, after getting a refreshed campaign
    campaign
      .fetch()
      .done(function(){
        jQuery.when(
          campaign.fetchOrCreateRelated('list'),
          campaign.fetchOrCreateRelated('sms')
        ).done(onFetched)});

## Crap I'd like to replace

    // determine if this is a /new model or existing, fetching if existing.
    var fetchCampaign = function(id){
      var dfr = new jQuery.Deferred();
      var campaign;
      if(id){
        campaign = campaigns.get(id);
        campaign.fetch().done(function(){
          dfr.resolve(campaign);
        });
      } else {
        campaign = new Campaign({channel: Campaign.Channels.SMS});
        dfr.resolve(campaign);
      }
      return dfr.promise();
    };

    var segmentation = new Segmentation({id: id});
    // gets the subscriber list from the campaign if there is one
    var fetchList = function(){
      var dfr = new jQuery.Deferred();
      if(campaign.has('list')){
        list = new List({id: campaign.get('list')});
        lists = new Lists([list]);
        list.fetch().done(dfr.resolve);
      } else {
        dfr.resolve();
      }
      return dfr.promise();
    };


## random thoughts
- stop worring about caching, first tackle relations
- backbone collection.add disallow duplicates, use collection for storage!
- Model.all is a good idea for storage, combine it with using a generic collection? beware of URL!
- use requirejs path to models/collections to avoid circular references

- super model, looks, well, pretty super.
- model registry is pretty cool: https://github.com/rhysbrettbowen/Backbone.ModelRegistry