import type { Company } from "../../types/Company";

import CompanyInfo from "../molecules/CompanyInfo/CompanyInfo";

import CompanyButtons from "../molecules/CompanyButtons/CompanyButtons";

interface Props{

company:Company;

}

export default function CompanyCard({

company

}:Props){

return(

<section className="rounded-3xl bg-white p-8 shadow-md">

<CompanyInfo company={company}/>

<CompanyButtons

website={company.website}

linkedin={company.linkedin}

/>

</section>

)

}