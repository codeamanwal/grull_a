import React from 'react';
import {
  SettingsBillsAndPayments,
  LoggedInHeader,
  Footer,
} from '../../components';

const BillsAndPaymentsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <LoggedInHeader
          includeNavBar={true}
          category="JOBS"
          isFreelancer={true}
        />
        <SettingsBillsAndPayments />
      </div>
      <Footer />
    </div>
  );
};

export default BillsAndPaymentsPage;
