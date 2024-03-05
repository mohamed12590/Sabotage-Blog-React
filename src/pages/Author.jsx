//------------------------------------------
//           PAGE AUTHOR (COMPOSANT)
//------------------------------------------
import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';


  const Author = ({arrayAuthors}) => {
    return (
        <div className="min-h-screen bg-[#0E1217]">
        <div className="container mx-auto px-4 pt-10">
          <h1 className="text-4xl font-bold mb-5 text-[#E11D48]">Auteurs</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          
          
          
            {arrayAuthors.map((oneAuthor, index) => (
             
              <Card key={index} className="max-w-sm mx-auto my-4 bg-[#1A202C] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                <CardBody className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-4">
                    {/* On affiche l'image de l'auteur dans la src et le nom dans le alt */}
                    <img src={oneAuthor.authorImageUrl} alt={"AuthorImage"} className="rounded-full shadow-lg" />
                  </div>
                  <Typography variant="h5" className="mb-2 text-center text-[#E11D48]">
                     {oneAuthor.author} {/*On affiche le nom de l'author  */}
                  </Typography>
                </CardBody>
                <CardFooter divider className="flex justify-center border-[#E11D48]">
                  <Button variant="outlined" className="mt-4 text-white bg-[#E11D48] border-[#E11D48] hover:bg-white hover:border-[#E11D48] hover:text-[#E11D48]">
                    {/* Pas d'action à faire ici */}
                    Voir les articles 
                  </Button>
                </CardFooter>
              </Card>
            ))}
            {/* Il faut map, pour générer plusieurs cards, ici c'est pour afficher une card */}
              
             
          </div>
        </div>
      </div>
    );
  };
  
  export default Author;