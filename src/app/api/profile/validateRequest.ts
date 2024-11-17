const RESERVED_PATHS = [
  'api',
  'profile',
  'login',
  'register',
  'edit',
  'delete',
  'create',
  'preview',
  'settings',
  'logout',
  'login',
  'auth',
  'callback',
  'signin',
  'signup',
  'signout',
  'create-page',
  'privacy',
  'policy',
  'terms',
  'privacy-policy'
];

export const validateRequest = ({ path, links }) => {
  const regex = /^[a-zA-Z0-9-]+$/;

  if (!path?.trim().length) {
    return `Path ${path} is required`;
  }

  if (RESERVED_PATHS.includes(path)) {
    return `Path ${path} is already reserved`;
  }

  if (!regex.test(path)) {
    return 'Path can only contain letters, numbers, and hyphens';
  }

  if (Array.isArray(links) && links.length > 10) {
    return 'Cannot create more than 10 links';
  }

  return undefined;
};
