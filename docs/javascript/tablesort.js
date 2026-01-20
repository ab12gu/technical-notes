document$.subscribe(function() {
  // add custom sorter first
  Tablesort.extend('day', function(item) {
    return /M|Tu|W|Th|F|Sa|Su/i.test(item);
  }, function(a, b) {
    const order = ['M','Tu','W','Th','F','Sa','Su'];
    return order.indexOf(a) - order.indexOf(b);
  });


  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})
