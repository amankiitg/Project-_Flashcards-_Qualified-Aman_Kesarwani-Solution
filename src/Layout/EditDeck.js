import React, { useEffect, useState } from "react";

function EditDeck({ deckId }) {
  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function loadUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${deckId}`
      );
      const userFromAPI = await response.json();
      setDeck(userFromAPI);
    }

    loadUser();
  }, [deckId]); // <-- Added dependency on `userID`

//   useEffect(() => {
//     if (user.username) {
//       document.title = `${user.username} : Edit Profile`;
//     } else {
//       document.title = "Edit Profile";
//     }
//   }, [user]); // Rerun this effect when the user changes

  const changeHandler = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

//   const submitHandler = async (event) => {
//     event.preventDefault();
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userID}`,
//       {
//         method: "PUT",
//         body: JSON.stringify(user),
//       }
//     );
//     const savedData = await response.json();
//     console.log("Saved user!", savedData);
//   };

//   if (user.id) {
//     return (
//       <form name="profileEdit" onSubmit={submitHandler}>
//         <fieldset>
//           <legend>API User ID: {user.id}</legend>
//           <div>
//             <label htmlFor="username">User Name:</label>
//             <input
//               id="username"
//               name="username"
//               type="text"
//               required={true}
//               value={user.username}
//               onChange={changeHandler}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required={true}
//               value={user.email}
//               onChange={changeHandler}
//             />
//           </div>
//           <button type="submit">Save</button>
//         </fieldset>
//       </form>
//     );
//   }
  return "Loading...";
}

export default EditDeck;