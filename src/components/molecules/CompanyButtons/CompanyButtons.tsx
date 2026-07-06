import Button from "../../atoms/buttons/Button";

interface Props{
    website:string;
    linkedin:string;
}

export default function CompanyButtons({

website,

linkedin

}:Props){

return(

<div className="mt-8 flex gap-4">

<Button

text="Visit Website"

variant="filled"

color="primary"

fullWidth

onClick={()=>window.open(website)}

 />

<Button

text="LinkedIn"

variant="outline"

color="primary"

fullWidth

onClick={()=>window.open(linkedin)}

 />

</div>

)

}