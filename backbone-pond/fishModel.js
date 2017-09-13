// Please modify this file!

var Fish = Backbone.Model.extend({
   defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
	toggleDescription:function () {


	var x =this.get('displayInfo');

    this.set('displayInfo',!x);
  this.trigger('toggle:description',this.render,this)

	},
  

 
  render:function(){
  	defaults.description.$el.append('<tr>')
  }

});
