'use client';

import { Link, Copy } from 'lucide-react';
import IconButton from '../components/icon-button';
import { InputRoot, InputIcon, InputField } from '../components/input';



export default function InviteLinkInput() {
  function copyInviteLink() {
    console.log('Hello World!');
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/h5245f6sda4f21ds4"
      />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
