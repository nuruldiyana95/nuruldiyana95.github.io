function GetBookings(){
    let url = 'https://api.sheety.co/3f902d0ad0c8d4f2e64f2f7a3013751d/bookingApp/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.sheet1S);
        });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click",function(){
    GetBookings();
})