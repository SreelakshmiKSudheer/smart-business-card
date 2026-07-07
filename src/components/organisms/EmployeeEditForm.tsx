import FormSection from "../molecules/FormSection";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { skills } from "../../data/skills";

import type { Employee } from "../../types/Employee";
import Chip from "../atoms/chip";
interface EmployeeEditFormProps{

    employee: Employee;

    setEmployee: React.Dispatch<
        React.SetStateAction<Employee>
    >;

}
export default function EmployeeEditForm({
  employee,
  setEmployee,
}: EmployeeEditFormProps) {
  return (
    <div className="flex flex-col gap-8">

      {/* Personal Information */}

      <FormSection title="Personal Information">

        <div className="grid gap-5 md:grid-cols-2">

          <div className="flex flex-col gap-2">
  <Label text="First Name" />

<Input
  value={employee.firstName}
  readOnly
/>
</div>
         <div className="flex flex-col gap-2">
  <Label text="Last Name" />

<Input
  value={employee.lastName}
  readOnly
/>
</div>

        </div>

        <div className="flex flex-col gap-2">
  <Label text="Designation" />

<Input
  value={employee.designation}
  readOnly
/>
</div>

      </FormSection>

      {/* Contact */}

      <FormSection title="Contact Information">

        <div className="flex flex-col gap-2">
  <Label text="Email" />

<Input
  type="email"
  value={employee.email}
  readOnly
/>
</div>

        <div className="flex flex-col gap-2">
  <Label text="Phone" />

 <Input
  value={employee.phone}
  onChange={(e) =>
    setEmployee({
      ...employee,
      phone: e.target.value,
    })
  }
/>
</div>

        <div className="flex flex-col gap-2">
  <Label text="LinkedIn" />

  <Input
  value={employee.linkedin}
  onChange={(e) =>
    setEmployee({
      ...employee,
      linkedin: e.target.value,
    })
  }
/>
</div>

      </FormSection>

      {/* About */}

      <FormSection title="About">

        <div className="flex flex-col gap-2">
  <Label text="About Yourself" />

  <Input
    isTextArea
    value={employee.about}
onChange={(e) =>
  setEmployee({
    ...employee,
    about: e.target.value,
  })
}
    rows={5}
  />
</div>

      </FormSection>


<FormSection title="Expertise">

  <p className="text-sm text-(--text-light)">
    Select up to 6 expertise areas.
  </p>

  <div className="mt-5 flex flex-wrap gap-3">

    {skills.map((skill) => {

      const selected =
        employee.expertise.includes(skill);

      const disabled =
        !selected &&
        employee.expertise.length >= 6;

      return (
        <Chip
          key={skill}
          label={skill}
          selected={selected}
          disabled={disabled}
          onClick={() => {

            if (selected) {

              setEmployee({
                ...employee,
                expertise:
                  employee.expertise.filter(
                    (item) => item !== skill
                  ),
              });

            } else {

              if (
                employee.expertise.length >= 6
              )
                return;

              setEmployee({
                ...employee,
                expertise: [
                  ...employee.expertise,
                  skill,
                ],
              });

            }

          }}
        />
      );

    })}

  </div>

  <p className="mt-5 text-sm text-(--text-light)">
    {employee.expertise.length} / 6 Selected
  </p>

</FormSection>

    </div>
  );
}