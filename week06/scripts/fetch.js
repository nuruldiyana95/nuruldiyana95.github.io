function GetBookings(){
    let url = 'https://api.sheety.co/3f902d0ad0c8d4f2e64f2f7a3013751d/bookingApp/bookings';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.bookings);
});
            let bookingList = getElementById("bookingList");
            bookingList.innerHTML = "";
            for(let i=0; i < json.sheet1S.length;i++){
                let gName = json.sheet1S[i].name;
                let gEmail = json.sheet1S[i].email;
                let gPax = json.sheet1S[i].pax;
                let gId = json.sheet1S[i].id;

                bookingList.innerHTML += gId + "-" + gName + ","+
                gEmail + ", pax:" + gPax + "<br>";
            }
        });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click",function(){
    GetBookings();
});