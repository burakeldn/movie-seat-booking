const container = document.querySelector('.container')
const selectSeat = document.getElementById('selectSeatNumber')
const ticketPrice = document.getElementById('totalTicket')
const button = document.querySelector('.btnBuy')

container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected')
       
        let selectedSeatCount = container.querySelectorAll('.seat.selected').length
        ticketPrice.innerText = '$ '+selectedSeatCount * 12
        selectSeat.innerText = selectedSeatCount

        button.addEventListener('click', () => {
            if(e.target.classList.contains('selected')){
                e.target.classList.toggle('reserved')
            }
            ticketPrice.innerText = selectedSeatCount - selectedSeatCount
            selectSeat.innerText = "THANK YOU!!"
        })
    }
})
