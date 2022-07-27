import React from 'react';

import { EmailPreferences } from '@/components/account-preferences/email-preferences';
import { PasswordPreferences } from '@/components/account-preferences/password-preferences';

function AccountPreferencesPage() {
  return (
    <div className="grid grid-cols-2">
      <div className="drop-shadow m-5 p-10">
        <EmailPreferences />
      </div>

      <div className="drop-shadow m-5 p-10">
        <PasswordPreferences />
      </div>
    </div>
  );
}

export default AccountPreferencesPage;
