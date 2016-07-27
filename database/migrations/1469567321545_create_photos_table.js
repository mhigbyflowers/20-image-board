'use strict'

const Schema = use('Schema')

class CreatePhotosTableSchema extends Schema {

 up () {
   this.create('photos', (table) => {
     table.increments()
     table.string('url');
     table.string('caption');
     table.timestamps()
   })
 }

 down () {
   this.drop('photos')
 }

}

module.exports = CreatePhotosTableSchema
