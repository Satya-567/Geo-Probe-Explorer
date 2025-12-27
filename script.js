const landData = [
  { landNumber: "KHM-00012", owner: "Lakshmi Narayana", location: "Khammam", size: "2.5 acres", value: "$100,000" },
  { landNumber: "KHM-00025", owner: "Pooja Sharma", location: "Khammam", size: "1.7 acres", value: "$72,000" }
];

document.getElementById("landForm").addEventListener("submit", function(e){
    e.preventDefault();
    const landNo = document.getElementById("landNumber").value;
    const result = document.getElementById("result");

    const land = landData.find(l => l.landNumber === landNo);

    result.innerHTML = land
        ? `<p><b>Owner:</b> ${land.owner}<br>
           <b>Location:</b> ${land.location}<br>
           <b>Size:</b> ${land.size}<br>
           <b>Value:</b> ${land.value}</p>`
        : "<p>❌ Land number not found</p>";
});
