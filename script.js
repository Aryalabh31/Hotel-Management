// Room Rent Calculation
document.getElementById('calculateRoomRent').addEventListener('click', function () {
    const roomType = parseInt(document.getElementById('roomType').value); // Get room type value
    const nights = parseInt(document.getElementById('nights').value); // Get number of nights

    // Ensure the number of nights is at least 1
    const totalRoomRent = roomType * (nights > 0 ? nights : 1);
    document.getElementById('roomRentResult').innerText = `Room Rent: Rs ${totalRoomRent}`;
});

// Food Cost Calculation
document.getElementById('calculateFoodCost').addEventListener('click', function () {
    // Get the quantities from each input field
    const dessertQty = parseInt(document.getElementById('dessertQty').value) || 0;
    const drinksQty = parseInt(document.getElementById('drinksQty').value) || 0;
    const breakfastQty = parseInt(document.getElementById('breakfastQty').value) || 0;
    const lunchQty = parseInt(document.getElementById('lunchQty').value) || 0;
    const dinnerQty = parseInt(document.getElementById('dinnerQty').value) || 0;

    // Calculate total food cost based on quantities and unit prices
    const foodCost = (dessertQty * 100) + (drinksQty * 50) + (breakfastQty * 90) + (lunchQty * 110) + (dinnerQty * 150);
    document.getElementById('foodCostResult').innerText = `Food Cost: Rs ${foodCost}`;
});

// Total Cost Calculation
document.getElementById('showTotalCost').addEventListener('click', function () {
    // Extract the calculated room rent and food cost
    const roomRentText = document.getElementById('roomRentResult').innerText;
    const foodCostText = document.getElementById('foodCostResult').innerText;

    // Parse the numeric values from the text (remove "Rs " part)
    const roomRent = parseInt(roomRentText.replace('Room Rent: Rs ', '')) || 0;
    const foodCost = parseInt(foodCostText.replace('Food Cost: Rs ', '')) || 0;

    // Calculate total cost
    const totalCost = roomRent + foodCost;
    document.getElementById('totalCostResult').innerText = `Total Cost: Rs ${totalCost}`;
});