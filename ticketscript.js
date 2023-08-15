const ticketForm = document.getElementById("ticketForm");

const title = document.getElementById("title");
const description = document.getElementById("description");
const priority = document.getElementById("priority");
const submit = document.getElementById("submitTicket");

submit.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const titleValue = title.value;
  const desc = description.value;
  const priorityValue = priority.value;
  const id = Date.now();
  

  const ticketData = new FormData()
  ticketData.append("id", id);
  ticketData.append("title", titleValue);
  ticketData.append("description", desc);
  ticketData.append("priority", priorityValue);
  console.log(ticketData)
  fetch("/ticketData", {
    method: "POST",
    body: ticketData,
  }).then(function (response) {
    if (response.ok) {
      // Parse the response as JSON to get the newTodo object
      return response.json();
    } 
    // else if (response.status === 401) {
    //   // window.location.href = "/login";
    // }
     else {
      throw new Error("Something went wrong");
    }
  }).then(function (newTicket) {
  // Display todo in UI using the newTodo object
  // showTicketinUi(newTicket)
  title.value = "";
}).catch(function (error) {
  // Handle any errors that occurred during the request
  alert("An error occurred while saving the todo.");
  console.error(error);
})
});

