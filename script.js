var ObCarSelector = {
  /**
   * html blocks
   */
  blockBrand : $('#brand'),
  blockModel : $('#model'),
  blockComplect : $('#complect'),

  /**
   * JSON data
   */
  listBrand : [
    {id : 1, name : 'volkswagen'},
    {id : 2, name : 'audi'},
    {id : 3, name : 'mersedes'},
    {id : 4, name : 'ford'}
  ],

  listModel : [
    {id : 1, name : 'polo', brand : 1},
    {id : 2, name : 'tiguan', brand : 1},
    {id : 3, name : 'jetta', brand : 1},
    {id : 4, name : 'golf', brand : 1},
    {id : 5, name : 'a3', brand : 2},
    {id : 6, name : 'q8', brand : 2},
    {id : 7, name : 'r8', brand : 2},
    {id : 8, name : 'a4', brand : 2}
  ],

  listCompolect : [
    {id : 1, name : 'standart volkswagen polo', model : 1, price :  300},
    {id : 2, name : 'comfort volkswagen polo', model : 1,  price :  400},
    {id : 3, name : 'base volkswagen polo', model : 1, price :  500},
    {id : 4, name : 'standart volkswagen tiguan', model : 2,  price :  600},
    {id : 5, name : 'comfort volkswagen tiguan', model : 2,  price :  700},
    {id : 6, name : 'base volkswagen tiguan', model : 2,  price :  800}
  ],


  /**
   * Clear select and set label in option disabled
   * @param select  jquery block selector
   * @param lengthList boolean  is empty select
   */ 
  resetSelectBlock : function(select, lengthList) {

    var label = lengthList ? 'Please select...' : 'empty';

    select.empty().append($("<option>")
      .attr('disabled', true)
      .attr('selected', true)
      .text(label));
  },
  /**
   * Build html list on select by options object
   * @param select  jquery block selector
   * @param options {id  , name } to value , text
   * @param filter object with filtered keys
   */
  renderOptions : function(select, options, filter) {

    var blockOptions = $(options);

    if(filter) {
      for (var property in filter) {

        blockOptions = blockOptions.filter(function(item, value){

          return value[property] == filter[property];
        })
      }
    }

    var lengthList = blockOptions.length;

    this.resetSelectBlock(select, lengthList > 0);

    blockOptions.each(function() {
      select.append($("<option>")
        .attr('value', this.id)
        .text(this.name));
    });
  },
  events : function(){
    component = this;

    this.blockBrand.on('change', function(value){
      var selectedBrand = parseInt(this.value);

      component.renderOptions(component.blockModel, component.listModel, {brand : selectedBrand});
      component.resetSelectBlock(component.blockComplect);
    });

    this.blockModel.on('change', function(value){
      var selecteModel = parseInt(this.value);

      component.renderOptions(component.blockComplect, component.listCompolect, {model : selecteModel});
    });
  }, 
  init : function() {

    this.events();

    this.renderOptions(this.blockBrand, this.listBrand);
  }    
};


ObCarSelector.init();
