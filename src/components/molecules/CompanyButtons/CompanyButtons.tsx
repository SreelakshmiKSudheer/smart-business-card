import Button from "../../atoms/buttons/Button";
import linkedinIcon from "../../../assets/icons/linkedin.svg";

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
icon={
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="h-4 w-4"
          />
        }
text="LinkedIn"

variant="outline"

color="primary"

fullWidth

onClick={()=>window.open(linkedin)}

 />

</div>

)

}