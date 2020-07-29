function getDestinations() {
   const uri = "https://services.odata.org/Northwind/Northwind.svc/Orders?orderby=OrderID&$select=OrderID,ShipName,ShipAddress,ShipCity,ShipPostalCode,ShipCountry&$format=json";
   const xhr = new XMLHttpRequest();
   xhr.open("GET", uri, true);
   xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      showDestinations(resp.value);
   }
   xhr.send(null);
}

function showDestinations(destinations) {
   let tableContent = "<tr class='orderTitle'><td>Order Id</td><td>Destination</td></tr>\n";
   let odd = true;
   const addRecord = (record) => {
      const addrs = record.ShipName + ", " + record.ShipAddress + ", " + record.ShipCity + ", " + record.ShipPostalCode + ", " + record.ShipCountry;
      if (odd) { // odd row
         tableContent += "<tr class='orderOdd'>";
      }
      else { // even row
         tableContent += "<tr class='orderEven'>";
      }
      odd = !odd;
      tableContent += "<td>" + record.OrderID + "</td><td>" + addrs + "</td></tr>\n";
   }
   for (let record of destinations) {
      addRecord(record);
   }
   document.getElementById("showTab").innerHTML = tableContent;
}