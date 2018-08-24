/** Example JSON data **/
var listBrand = [
  {id : 1, name : 'volkswagen'},
  {id : 2, name : 'audi'},
  {id : 3, name : 'mersedes'},
  {id : 4, name : 'ford'}
];

var listModel = [
  {id : 1, name : 'polo', brand : 1},
  {id : 2, name : 'tiguan', brand : 1},
  {id : 3, name : 'jetta', brand : 1},
  {id : 4, name : 'golf', brand : 1},
  {id : 5, name : 'a3', brand : 2},
  {id : 6, name : 'q8', brand : 2},
  {id : 7, name : 'r8', brand : 2},
  {id : 8, name : 'a4', brand : 2}
];

var listCompolect = [
  {id : 1, name : 'standart volkswagen polo', model : 1, price :  300},
  {id : 2, name : 'comfort volkswagen polo', model : 1,  price :  400},
  {id : 3, name : 'base volkswagen polo', model : 1, price :  500},
  {id : 4, name : 'standart volkswagen tiguan', model : 2,  price :  600},
  {id : 5, name : 'comfort volkswagen tiguan', model : 2,  price :  700},
  {id : 6, name : 'base volkswagen tiguan', model : 2,  price :  800}
];

/** html blocks **/
var blockBrand = $('#brand');
var blockModel = $('#model');
var blockComplect = $('#complect');

/**
 * Build html list on select by options object
 * @param select  jquery block selector
 * @param options {id  , name } to value , text
 * @param filter object with filtered keys
 */
function renderOptions(select, options, filter) {

  var blockOptions = $(options);


  if(filter) {
    for (var property in filter) {

      blockOptions = blockOptions.filter(function(item, value){

        return value[property] == filter[property];
      })
    }
  }

  var lengthList = blockOptions.length;
  var label = lengthList > 0 ? 'Please select...' : 'empty';

  select.empty().append($("<option>")
    .attr('disabled', true)
    .attr('selected', true)
    .text(label));

  blockOptions.each(function() {
    select.append($("<option>")
      .attr('value', this.id)
      .text(this.name));
  });
}


/** events **/
blockBrand.on('change', function(value){
  var selectedBrand = parseInt(this.value);

  renderOptions(blockModel, listModel, {brand : selectedBrand});
});

blockModel.on('change', function(value){
  var selecteModel = parseInt(this.value);

  renderOptions(blockComplect, listCompolect, {model : selecteModel});
});



/** On start app **/
renderOptions(blockBrand, listBrand);