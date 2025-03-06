
function submitTicketOrder() {

    const ticketPerson = document.getElementById("ticketPerson").value;
    const ticketEmail = document.getElementById("ticketEmail").value;
    const ticketReason = document.getElementById("ticketReason").value;

    if(ticketPerson !="") {
        if(ticketEmail !="") {
            if(ticketReason !="") {

                const ticket =  {
                    owner: ticketPerson,
                    email: ticketEmail,
                    response: ticketReason,
                }
                console.log(ticket);
 
            alert( "Grattis " + ticket.owner +  " du deltar nu i tävlingen");
            } else { 
                alert("Du har inte angett någon motivering")
            }
        } else { 
            alert("Du har inte fyllt i någon mailaddress");
        }
    } else { 
        alert("Du har inte fyllt i något namn");
    }
    
}