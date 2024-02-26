import { Card } from "@/app/components/card/Card";
import { getDataById } from "@/data/data"

export default function page ({params}){

   const projectData = getDataById(params.projectId);

   if(!projectData) return (<p>La pagina no existe</p>)

   return(
      <>
         <Card 
            title = {projectData.title}
            location = {projectData.location}
            desc = {projectData.desc}
            imgSrc = {projectData.pImage}
            linkId={projectData.id}
         />
      </>
   )
}