interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View available cars.', 'Book a car.', 'Update booking details.', 'Cancel a booking.'],
  ownerAbilities: [
    'Manage company profile',
    'Invite Fleet Managers and Admins',
    'View cars available',
    'Book a car',
    'Update booking',
    'Cancel booking',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/01d2cc1b-1e09-4bb3-b43b-987300c067e4',
};
