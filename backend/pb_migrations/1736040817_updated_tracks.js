/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_327047008")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != '' && @request.auth.verified = true && owner.id = @request.auth.id",
    "viewRule": "@request.auth.id != '' && @request.auth.verified = true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_327047008")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != '' && owner.id = @request.auth.id",
    "viewRule": "@request.auth.id != ''"
  }, collection)

  return app.save(collection)
})