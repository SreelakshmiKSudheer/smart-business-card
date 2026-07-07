import FormSection from "../molecules/FormSection";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

import type { Employee } from "../../types/Employee";
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
  onChange={(e) =>
    setEmployee({
      ...employee,
      firstName: e.target.value,
    })
  }
/>
</div>
         <div className="flex flex-col gap-2">
  <Label text="Last Name" />

  <Input
  value={employee.lastName}
  onChange={(e) =>
    setEmployee({
      ...employee,
      lastName: e.target.value,
    })
  }
/>
</div>

        </div>

        <div className="flex flex-col gap-2">
  <Label text="Designation" />

  <Input
  value={employee.designation}
  onChange={(e) =>
    setEmployee({
      ...employee,
      designation: e.target.value,
    })
  }
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
  onChange={(e) =>
    setEmployee({
      ...employee,
      email: e.target.value,
    })
  }
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

    </div>
  );
}