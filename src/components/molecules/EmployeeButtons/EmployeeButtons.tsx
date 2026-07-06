import Button from "../../atoms/buttons/Button";

import {
  Mail,
  Phone,
  Share2,
  Download,
} from "lucide-react";

import linkedinIcon from "../../../assets/icons/linkedin.svg";

interface EmployeeButtonsProps {
  email: string;
  phone: string;
  linkedin: string;
}

export default function EmployeeButtons({
  email,
  phone,
  linkedin,
}: EmployeeButtonsProps) {
  const openEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const openPhone = () => {
    window.location.href = `tel:${phone}`;
  };

  const openLinkedIn = () => {
    window.open(linkedin, "_blank");
  };

  const shareProfile = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Smart Business Card",
        text: "Check out my digital business card.",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Profile link copied!");
    }
  };

  const saveContact = () => {
    alert("vCard download will be implemented later.");
  };

  return (
    <div className="mt-6 space-y-3">

      <Button
        text="Email"
        icon={<Mail size={18} />}
        variant="outline"
        color="primary"
        fullWidth
        onClick={openEmail}
      />

      <Button
        text="Call"
        icon={<Phone size={18} />}
        variant="outline"
        color="primary"
        fullWidth
        onClick={openPhone}
      />

      <Button
        text="LinkedIn"
        icon={
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="h-4 w-4"
          />
        }
        variant="outline"
        color="primary"
        fullWidth
        onClick={openLinkedIn}
      />

      <div className="grid grid-cols-2 gap-3 pt-2">

        <Button
          text="Share"
          icon={<Share2 size={18} />}
          variant="filled"
          color="primary"
          fullWidth
          onClick={shareProfile}
        />

        <Button
          text="Save"
          icon={<Download size={18} />}
          variant="filled"
          color="primary"
          fullWidth
          onClick={saveContact}
        />

      </div>

    </div>
  );
}