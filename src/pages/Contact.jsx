import {useState} from 'react'
import { Button, Input, Textarea } from '@material-tailwind/react';

const Contact = () => {
 // Il faut envoyer les données de ce formulaire dans le localStorage,
 // RAPPEL: Il faut récupérer le LS, puis ajouter une nouvelle valeur pour ne pas
 // écraser anciennes valeurs
 const [userPseudo, setUserPseudo] = useState({
   pseudo : "",
   message : ""
 })
     
     
     const handleChange = (e) => {
       const {id, value} = e.target
       setUserPseudo({...userPseudo, [id]:value})
     }


    const handleSubmit = (e) => {
      e.preventDefault()
      const getUsersPseudo = JSON.parse(window.localStorage.getItem("userPseudo")) || []
      getUsersPseudo.push(userPseudo)
      window.localStorage.setItem("userPseudo",JSON.stringify(getUsersPseudo))
    }


 // Faire la fonction handleChange et handleSubmit
  return (
    <div className="min-h-screen bg-[#0E1217] flex justify-center items-center">
      <div className="container mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold mb-5 text-[#E11D48] text-center">Contact</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="pseudo" className="block text-white mb-2">Pseudo</label>
            <Input
              id="pseudo"
              type="text"
              color="light-blue"
              className='text-white'
              onChange={handleChange}
              value={userPseudo.pseudo}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <Textarea
              id="message"
              color="light-blue"
              className='text-white'
              value={userPseudo.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full bg-[#E11D48] hover:bg-[#c81e42]">Envoyer</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
