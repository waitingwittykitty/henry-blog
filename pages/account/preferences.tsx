import React from 'react';

import { EmailPreferences } from '@/components/account-preferences/email-preferences';
import { PasswordPreferences } from '@/components/account-preferences/password-preferences';

function AccountPreferencesPage() {
  return (
    <section className="">
      <h2 className="font-mono text-xl mt-8 ml-20">Account Preferences</h2>

      <div className="grid grid-cols-2">
        <div className="drop-shadow m-5 px-20">
          <EmailPreferences />
        </div>

        <div className="drop-shadow m-5 px-20">
          <PasswordPreferences />
        </div>
      </div>
    </section>
  );
}

export default AccountPreferencesPage;
