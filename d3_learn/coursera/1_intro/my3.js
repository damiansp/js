let itemList = d3.select("#itemlist");

function count() { return itemList.selectAll("li").size(); }


function addItem() {
  let nItems = count() + 1;
  itemList.append("li").text("Item " + nItems);
}

function removeAllItems() { itemList.selectAll("li").remove(); }

function removeLastItem() { itemList.select("li:last-child").remove(); }
